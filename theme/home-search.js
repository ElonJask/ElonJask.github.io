(function () {
  var box = document.querySelector(".home-search-box");
  if (!box) return;

  var input = document.getElementById("home-search-input");
  var clearBtn = document.getElementById("home-search-clear");
  var statusEl = document.getElementById("home-search-status");
  var resultsEl = document.getElementById("home-search-results");
  var defaultListEl = document.getElementById("home-default-list");
  var paginationEl = document.getElementById("home-pagination");

  if (!input || !clearBtn || !statusEl || !resultsEl || !defaultListEl) return;

  var lang = box.getAttribute("data-lang") === "en" ? "en-US" : "zh-CN";
  var searchUrl = box.getAttribute("data-search-url") || "/search.json";
  var textEmpty = box.getAttribute("data-text-empty") || "";
  var textLoading = box.getAttribute("data-text-loading") || "";
  var textNoResult = box.getAttribute("data-text-no-result") || "";
  var textResults = box.getAttribute("data-text-results") || "";
  var textError = box.getAttribute("data-text-error") || "";

  var indexData = null;
  var loadPromise = null;
  var debounceTimer = null;

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function toArrayText(value) {
    if (Array.isArray(value)) return value.join(" ");
    return String(value || "");
  }

  function buildSearchText(item) {
    return normalizeText(
      [
        item.title,
        item.summary,
        item.content,
        toArrayText(item.tags),
        toArrayText(item.categories),
        item.topic
      ].join(" ")
    );
  }

  function sortByDateDesc(a, b) {
    var da = Date.parse(a.date || "");
    var db = Date.parse(b.date || "");
    if (Number.isNaN(da) || Number.isNaN(db)) return 0;
    return db - da;
  }

  function setSearchMode(active) {
    defaultListEl.hidden = active;
    if (paginationEl) paginationEl.hidden = active;
    resultsEl.hidden = !active;
  }

  function ensureIndexLoaded() {
    if (indexData) return Promise.resolve(indexData);
    if (loadPromise) return loadPromise;

    statusEl.textContent = textLoading;
    loadPromise = fetch(searchUrl)
      .then(function (res) {
        if (!res.ok) throw new Error("search index request failed");
        return res.json();
      })
      .then(function (rows) {
        indexData = (rows || [])
          .filter(function (item) {
            return item && item.lang === lang;
          })
          .map(function (item) {
            item._searchText = buildSearchText(item);
            return item;
          });
        return indexData;
      });

    return loadPromise;
  }

  function renderResults(items) {
    resultsEl.innerHTML = "";

    items.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "home-search-item";

      var link = document.createElement("a");
      link.className = "home-search-link";
      link.href = item.url;

      var title = document.createElement("div");
      title.className = "home-search-title";
      title.textContent = item.title || "";

      var summary = document.createElement("div");
      summary.className = "home-search-summary";
      summary.textContent = item.summary || item.content || "";

      var meta = document.createElement("div");
      meta.className = "home-search-meta";
      meta.textContent = item.date || "";

      link.appendChild(title);
      link.appendChild(summary);
      link.appendChild(meta);
      li.appendChild(link);
      resultsEl.appendChild(li);
    });
  }

  function search(query) {
    var q = normalizeText(query);
    if (!q) {
      setSearchMode(false);
      statusEl.textContent = textEmpty;
      resultsEl.innerHTML = "";
      return;
    }

    setSearchMode(true);

    ensureIndexLoaded()
      .then(function (rows) {
        var tokens = q.split(" ").filter(Boolean);
        var matched = rows
          .map(function (item) {
            var score = 0;
            var titleText = normalizeText(item.title);
            var summaryText = normalizeText(item.summary);
            var allText = item._searchText || "";

            for (var i = 0; i < tokens.length; i += 1) {
              var t = tokens[i];
              if (!allText.includes(t)) return null;
              if (titleText.includes(t)) score += 4;
              if (summaryText.includes(t)) score += 2;
              score += 1;
            }

            return { item: item, score: score };
          })
          .filter(Boolean)
          .sort(function (a, b) {
            if (b.score !== a.score) return b.score - a.score;
            return sortByDateDesc(a.item, b.item);
          })
          .slice(0, 20)
          .map(function (x) {
            return x.item;
          });

        if (!matched.length) {
          statusEl.textContent = textNoResult;
          resultsEl.innerHTML = "";
          return;
        }

        statusEl.textContent = matched.length + " " + textResults;
        renderResults(matched);
      })
      .catch(function () {
        statusEl.textContent = textError;
      });
  }

  function scheduleSearch() {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(function () {
      search(input.value);
    }, 120);
  }

  input.addEventListener("focus", function () {
    if (!indexData && !loadPromise) {
      ensureIndexLoaded().catch(function () {
        statusEl.textContent = textError;
      });
    }
  });

  input.addEventListener("input", scheduleSearch);

  clearBtn.addEventListener("click", function () {
    input.value = "";
    search("");
    input.focus();
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "/" && document.activeElement !== input) {
      event.preventDefault();
      input.focus();
      input.select();
      return;
    }
    if (event.key === "Escape" && document.activeElement === input) {
      input.value = "";
      search("");
      input.blur();
    }
  });

  search("");
})();
