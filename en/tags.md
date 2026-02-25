---
layout: page
title: Tags
summary: Browse posts by tags.
comments: false
hideHomeActive: true
lang: en-US
---

{% assign tags_map = site.posts_en_tags %}
{% assign tags_page_url = '/en/tags.html' | relative_url %}

<div class="tag-index">
  <p class="tag-index-note">Click a tag to filter posts under that tag.</p>

  {% if tags_map and tags_map.size > 0 %}
    <ul class="tag-index-list">
      <li class="tag-index-item">
        <a href="{{ tags_page_url }}" class="tag-index-name" data-tag-slug="">All</a>
      </li>
      {% for item in tags_map %}
        {% assign tag_name = item[0] %}
        {% assign tag_posts = item[1] %}
        {% assign tag_slug = tag_name | slugify %}
        {% assign visible_tag_posts = 0 %}
        {% for post in tag_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_tag_posts = visible_tag_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_tag_posts > 0 %}
          <li class="tag-index-item">
            <a href="{{ tags_page_url }}?tag={{ tag_slug }}#tag-posts" class="tag-index-name" data-tag-slug="{{ tag_slug }}">{{ tag_name }}</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>

    <div class="tag-post-groups" id="tag-posts">
      {% for item in tags_map %}
        {% assign tag_name = item[0] %}
        {% assign tag_posts = item[1] %}
        {% assign tag_slug = tag_name | slugify %}
        {% assign visible_tag_posts = 0 %}
        {% for post in tag_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_tag_posts = visible_tag_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_tag_posts > 0 %}
          <section class="tag-post-group" id="tag-{{ tag_slug }}" data-tag-slug="{{ tag_slug }}">
            <h2 class="tag-post-title">#{{ tag_name }}</h2>
            <ul class="tag-post-list">
              {% for post in tag_posts %}
                {% assign is_hidden = post.hidden | default: post.hide %}
                {% if is_hidden != true %}
                  <li>
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
  {% else %}
    <p>No tags yet.</p>
  {% endif %}
</div>

<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    var activeSlug = (params.get('tag') || '').trim().toLowerCase();
    var groups = Array.prototype.slice.call(document.querySelectorAll('.tag-post-group'));
    var links = Array.prototype.slice.call(document.querySelectorAll('.tag-index-name[data-tag-slug]'));
    if (!groups.length || !links.length) return;

    links.forEach(function (link) {
      var slug = (link.dataset.tagSlug || '').toLowerCase();
      if (activeSlug === slug) {
        link.classList.add('active');
      }
    });

    if (!activeSlug) {
      links[0] && links[0].classList.add('active');
      return;
    }

    var hasMatch = false;
    groups.forEach(function (group) {
      var slug = (group.dataset.tagSlug || '').toLowerCase();
      var visible = slug === activeSlug;
      group.hidden = !visible;
      if (visible) hasMatch = true;
    });

    if (!hasMatch) {
      groups.forEach(function (group) {
        group.hidden = false;
      });
      links[0] && links[0].classList.add('active');
    }
  })();
</script>
