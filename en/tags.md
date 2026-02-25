---
layout: page
title: Tags
summary: Browse ElonJask posts by topic tags and archives.
comments: false
hideHomeActive: true
lang: en-US
---

<div class="tag-archive">
  <p class="tag-archive-intro">Browse posts by topic to improve discovery and internal navigation.</p>

  {% assign tags_map = site.posts_en_tags %}
  {% if tags_map and tags_map.size > 0 %}
    <div class="tag-cloud">
      {% for item in tags_map %}
        {% assign tag_name = item[0] %}
        {% assign tag_posts = item[1] %}
        <a href="#tag-{{ tag_name | slugify }}" class="tag-chip">{{ tag_name }} <span>{{ tag_posts | size }}</span></a>
      {% endfor %}
    </div>

    {% for item in tags_map %}
      {% assign tag_name = item[0] %}
      {% assign tag_posts = item[1] %}
      <section class="tag-section" id="tag-{{ tag_name | slugify }}">
        <h2>{{ tag_name }}</h2>
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
    {% endfor %}
  {% else %}
    <p>No tags are available yet.</p>
  {% endif %}
</div>
