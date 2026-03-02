(function () {
  "use strict";

  var modal = document.getElementById("search-modal");
  var searchBtn = document.getElementById("search-btn");
  var closeBtn = document.getElementById("search-close");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");

  if (!modal || !searchBtn || !closeBtn || !input || !results) return;

  var data = [];
  var isLoaded = false;
  var selectedIndex = -1;
  var debounceTimer = null;

  var searchUrl = modal.getAttribute("data-search-url") || "/search.json";
  var pageLang = modal.getAttribute("data-lang") || "zh-CN";
  var textEmpty = modal.getAttribute("data-text-empty") || "";
  var textLoading = modal.getAttribute("data-text-loading") || "";
  var textNoResult = modal.getAttribute("data-text-no-result") || "";
  var textError = modal.getAttribute("data-text-error") || "";
  var textResultSuffix = modal.getAttribute("data-text-result-suffix") || "";

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function normalize(str) {
    return String(str || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function isOpen() {
    return modal.classList.contains("active");
  }

  function openSearch() {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    showEmpty();
    window.setTimeout(function () {
      input.focus();
      input.select();
    }, 60);

    if (!isLoaded) loadData();
  }

  function closeSearch() {
    if (document.activeElement === input) input.blur();
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    input.value = "";
    results.innerHTML = "";
    selectedIndex = -1;
  }

  function showEmpty() {
    results.classList.add("is-empty");
    results.innerHTML = "";
  }

  function showLoading() {
    results.classList.remove("is-empty");
    results.innerHTML = '<div class="search-loading">' + escapeHtml(textLoading) + "</div>";
  }

  function showError() {
    results.classList.remove("is-empty");
    results.innerHTML = '<div class="search-error">' + escapeHtml(textError) + "</div>";
  }

  function loadData() {
    showLoading();
    fetch(searchUrl)
      .then(function (res) {
        if (!res.ok) throw new Error("search.json request failed");
        return res.json();
      })
      .then(function (rows) {
        data = (rows || []).filter(function (item) {
          return item && item.lang === pageLang;
        });
        isLoaded = true;
        if (normalize(input.value)) searchNow();
        else showEmpty();
      })
      .catch(function () {
        showError();
      });
  }

  function buildSearchText(item) {
    var categories = Array.isArray(item.categories) ? item.categories.join(" ") : "";
    var tags = Array.isArray(item.tags) ? item.tags.join(" ") : "";
    return normalize(
      [item.title, item.summary, item.content, categories, tags, item.topic].join(" ")
    );
  }

  function highlight(text, query) {
    var safe = escapeHtml(text);
    if (!query) return safe;
    var regex = new RegExp("(" + escapeRegExp(query) + ")", "ig");
    return safe.replace(regex, "<mark>$1</mark>");
  }

  function render(list, query) {
    results.classList.remove("is-empty");
    selectedIndex = -1;
    if (!list.length) {
      results.innerHTML = '<div class="search-no-results">' + escapeHtml(textNoResult) + "</div>";
      return;
    }

    var html = list
      .slice(0, 12)
      .map(function (item, idx) {
        var summary = item.summary || item.content || "";
        return (
          '<a href="' + escapeHtml(item.url || "#") + '" class="search-result-item" data-index="' + idx + '" role="option" aria-selected="false">' +
          '<div class="search-result-title">' + highlight(item.title || "", query) + "</div>" +
          '<div class="search-result-summary">' + highlight(summary, query) + "</div>" +
          '<div class="search-result-meta">' +
          '<span class="search-result-date">' + escapeHtml(item.date || "") + "</span>" +
          "</div>" +
          "</a>"
        );
      })
      .join("");

    var countText = '<div class="search-result-count">' + list.length + " " + escapeHtml(textResultSuffix) + "</div>";
    results.innerHTML = countText + html;

    var items = results.querySelectorAll(".search-result-item");
    items.forEach(function (el, idx) {
      el.addEventListener("mouseenter", function () {
        selectedIndex = idx;
        updateSelection();
      });
    });
  }

  function searchNow() {
    var q = normalize(input.value);
    if (!q) {
      showEmpty();
      return;
    }
    if (!isLoaded) {
      showLoading();
      return;
    }

    var tokens = q.split(" ").filter(Boolean);
    var matched = data
      .map(function (item) {
        var text = buildSearchText(item);
        var score = 0;
        var title = normalize(item.title);
        var summary = normalize(item.summary);

        for (var i = 0; i < tokens.length; i += 1) {
          var token = tokens[i];
          if (!text.includes(token)) return null;
          if (title.includes(token)) score += 4;
          if (summary.includes(token)) score += 2;
          score += 1;
        }

        return { item: item, score: score };
      })
      .filter(Boolean)
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        return Date.parse(b.item.date || "") - Date.parse(a.item.date || "");
      })
      .map(function (x) {
        return x.item;
      });

    render(matched, q);
  }

  function scheduleSearch() {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(searchNow, 120);
  }

  function updateSelection() {
    var items = results.querySelectorAll(".search-result-item");
    items.forEach(function (item, idx) {
      var selected = idx === selectedIndex;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
  }

  function navigate(step) {
    var items = results.querySelectorAll(".search-result-item");
    if (!items.length) return;
    selectedIndex += step;
    if (selectedIndex < 0) selectedIndex = items.length - 1;
    if (selectedIndex >= items.length) selectedIndex = 0;
    updateSelection();
    items[selectedIndex].scrollIntoView({ block: "nearest" });
  }

  searchBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeSearch();
  });
  input.addEventListener("input", scheduleSearch);

  document.addEventListener("keydown", function (event) {
    var target = event.target;
    var typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

    if (event.key === "/" && !isOpen() && !typing) {
      event.preventDefault();
      openSearch();
      return;
    }

    if (!isOpen()) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeSearch();
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      navigate(1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      navigate(-1);
      return;
    }
    if (event.key === "Enter" && selectedIndex >= 0) {
      var items = results.querySelectorAll(".search-result-item");
      var selected = items[selectedIndex];
      if (selected) {
        event.preventDefault();
        window.location.href = selected.getAttribute("href");
      }
    }
  });
})();
