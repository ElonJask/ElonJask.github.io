---
layout: page
title: Tags
summary: Browse ElonJask posts by topic tags and archives.
comments: false
hideHomeActive: true
lang: en-US
---

{% assign tags_map = site.posts_en_tags %}
{% assign posts_count = 0 %}
{% for post in site.posts_en %}
  {% assign is_hidden = post.hidden | default: post.hide %}
  {% if is_hidden != true %}
    {% assign posts_count = posts_count | plus: 1 %}
  {% endif %}
{% endfor %}
{% assign tags_count = 0 %}
{% if tags_map %}
  {% for item in tags_map %}
    {% assign tag_posts = item[1] %}
    {% assign visible_tag_posts = 0 %}
    {% for post in tag_posts %}
      {% assign is_hidden = post.hidden | default: post.hide %}
      {% if is_hidden != true %}
        {% assign visible_tag_posts = visible_tag_posts | plus: 1 %}
      {% endif %}
    {% endfor %}
    {% if visible_tag_posts > 0 %}
      {% assign tags_count = tags_count | plus: 1 %}
    {% endif %}
  {% endfor %}
{% endif %}

<div class="tag-archive">
  <section class="tag-hero">
    <h1>Tags</h1>
    <p>Browse grouped topics and jump to related posts instantly.</p>
  </section>

  <div class="tag-metrics">
    <div class="tag-metric">
      <span class="tag-metric-value">{{ posts_count }}</span>
      <span class="tag-metric-label">Posts</span>
    </div>
    <div class="tag-metric">
      <span class="tag-metric-value">{{ tags_count }}</span>
      <span class="tag-metric-label">Tags</span>
    </div>
  </div>

  {% if tags_map and tags_map.size > 0 and tags_count > 0 %}
    <div class="tag-toolbar">
      <label for="J_tag_search">Filter tags/posts</label>
      <div class="tag-toolbar-input">
        <input id="J_tag_search" type="search" placeholder="Try: productivity, AI, workflow" autocomplete="off">
        <button type="button" id="J_tag_clear">Clear</button>
      </div>
    </div>

    <div class="tag-cloud" id="J_tag_cloud">
      {% for item in tags_map %}
        {% assign tag_name = item[0] %}
        {% assign tag_posts = item[1] %}
        {% assign visible_tag_posts = 0 %}
        {% for post in tag_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_tag_posts = visible_tag_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_tag_posts > 0 %}
          <a href="#tag-{{ tag_name | slugify }}" class="tag-chip" data-tag="{{ tag_name | downcase }}">
            <span class="tag-chip-name">{{ tag_name }}</span>
            <span class="tag-chip-count">{{ visible_tag_posts }}</span>
          </a>
        {% endif %}
      {% endfor %}
    </div>

    <div class="tag-section-list" id="J_tag_sections">
      {% for item in tags_map %}
        {% assign tag_name = item[0] %}
        {% assign tag_posts = item[1] %}
        {% assign visible_tag_posts = 0 %}
        {% for post in tag_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_tag_posts = visible_tag_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_tag_posts > 0 %}
          <section class="tag-section" id="tag-{{ tag_name | slugify }}" data-tag="{{ tag_name | downcase }}">
            <header class="tag-section-head">
              <h2>#{{ tag_name }}</h2>
              <span class="tag-section-count">{{ visible_tag_posts }} posts</span>
            </header>
            <ul class="tag-post-list">
              {% for post in tag_posts %}
                {% assign is_hidden = post.hidden | default: post.hide %}
                {% if is_hidden != true %}
                  <li class="tag-post-item" data-title="{{ post.title | downcase }}">
                    <a href="{{ post.url }}">{{ post.title }}</a>
                    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
                  </li>
                {% endif %}
              {% endfor %}
            </ul>
          </section>
        {% endif %}
      {% endfor %}
    </div>
    <p class="tag-empty" id="J_tag_empty" hidden>No matching results. Try a shorter keyword.</p>
  {% else %}
    <p>No tags are available yet.</p>
  {% endif %}
</div>

<script>
  (function () {
    const input = document.getElementById('J_tag_search');
    const clearBtn = document.getElementById('J_tag_clear');
    const empty = document.getElementById('J_tag_empty');
    const sections = Array.from(document.querySelectorAll('#J_tag_sections .tag-section'));
    const chips = Array.from(document.querySelectorAll('#J_tag_cloud .tag-chip'));

    if (!input || !clearBtn || !sections.length) return;

    const updateView = () => {
      const keyword = input.value.trim().toLowerCase();
      let visibleSections = 0;

      sections.forEach((section) => {
        const tag = section.dataset.tag || '';
        const postItems = Array.from(section.querySelectorAll('.tag-post-item'));
        const matchTag = tag.includes(keyword);
        const matchPost = postItems.some((item) => (item.dataset.title || '').includes(keyword));
        const visible = !keyword || matchTag || matchPost;

        section.hidden = !visible;
        if (visible) visibleSections += 1;
      });

      chips.forEach((chip) => {
        if (!keyword) {
          chip.hidden = false;
          return;
        }
        const tag = chip.dataset.tag || '';
        const linked = document.querySelector(`.tag-section[data-tag="${tag}"]`);
        chip.hidden = !(tag.includes(keyword) || (linked && !linked.hidden));
      });

      if (empty) empty.hidden = visibleSections !== 0;
    };

    input.addEventListener('input', updateView);
    clearBtn.addEventListener('click', () => {
      input.value = '';
      updateView();
      input.focus();
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        input.value = '';
        updateView();
      }
    });
  })();
</script>
