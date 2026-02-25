---
layout: page
title: Tags
summary: Browse posts by tags.
comments: false
hideHomeActive: true
lang: en-US
---

{% assign tags_map = site.posts_en_tags %}

<div class="tag-index">
  <p class="tag-index-note">Click a tag to jump to posts under that tag.</p>

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
          <li class="tag-index-item">
            <a href="#tag-{{ tag_name | slugify }}" class="tag-index-name">{{ tag_name }}</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>

    <div class="tag-post-groups">
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
          <section class="tag-post-group" id="tag-{{ tag_name | slugify }}">
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
