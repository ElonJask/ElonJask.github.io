---
layout: page
title: Tags
summary: Browse posts by tags.
comments: false
hideHomeActive: true
lang: en-US
---

{% assign tags_map = site.posts_en_tags %}

<div class="tag-archive-simple">
  <p class="tag-archive-note">Browse by tags, nothing extra.</p>

  {% if tags_map and tags_map.size > 0 %}
    <div class="tag-cloud-simple">
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
          <a id="tag-{{ tag_name | slugify }}" href="#tag-{{ tag_name | slugify }}" class="tag-pill-simple">
            <span>{{ tag_name }}</span>
            <em>{{ visible_tag_posts }}</em>
          </a>
        {% endif %}
      {% endfor %}
    </div>
  {% else %}
    <p>No tags yet.</p>
  {% endif %}
</div>
