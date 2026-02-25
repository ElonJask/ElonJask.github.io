---
layout: page
title: Tags
summary: Browse by tags.
comments: false
hideHomeActive: true
lang: en-US
---

{% assign tags_map = site.posts_en_tags %}

<div class="tag-index">
  <p class="tag-index-note">All tags (alphabetical)</p>

  {% if tags_map and tags_map.size > 0 %}
    <ul class="tag-index-list">
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
          <li class="tag-index-item" id="tag-{{ tag_name | slugify }}">
            <a href="#tag-{{ tag_name | slugify }}" class="tag-index-name">{{ tag_name }}</a>
            <span class="tag-index-count">{{ visible_tag_posts }}</span>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  {% else %}
    <p>No tags yet.</p>
  {% endif %}
</div>
