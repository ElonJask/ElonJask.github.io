---
layout: page
title: Archive
summary: Browse all posts by year.
comments: false
hideHomeActive: true
lang: en-US
---

{% assign grouped_posts = site.posts_en | sort: "date" | reverse | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign current_year = "now" | date: "%Y" %}

<div class="archive-page">
  {% for group in grouped_posts %}
    {% assign visible_count = 0 %}
    {% for post in group.items %}
      {% assign is_hidden = post.hidden | default: post.hide %}
      {% if is_hidden != true %}
        {% assign visible_count = visible_count | plus: 1 %}
      {% endif %}
    {% endfor %}

    {% if visible_count > 0 %}
      <details class="archive-year-group"{% if group.name == current_year %} open{% endif %}>
        <summary class="archive-year-summary">
          <h2 class="archive-year">{{ group.name }}</h2>
        </summary>
        <ul class="archive-list">
          {% for post in group.items %}
            {% assign is_hidden = post.hidden | default: post.hide %}
            {% if is_hidden != true %}
              <li class="archive-item">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d" }}</time>
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      </details>
    {% endif %}
  {% endfor %}
</div>
