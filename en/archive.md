---
layout: page
title: Archive
summary: Browse all posts by year.
comments: false
hideHomeActive: true
lang: en-US
---

{% assign grouped_posts = site.posts_en | group_by_exp: "post", "post.date | date: '%Y'" %}

<div class="archive-page">
  <p class="archive-note">Browse posts by year.</p>

  {% for group in grouped_posts %}
    {% assign visible_count = 0 %}
    {% for post in group.items %}
      {% assign is_hidden = post.hidden | default: post.hide %}
      {% if is_hidden != true %}
        {% assign visible_count = visible_count | plus: 1 %}
      {% endif %}
    {% endfor %}

    {% if visible_count > 0 %}
      <section class="archive-year-group">
        <h2 class="archive-year">{{ group.name }}</h2>
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
      </section>
    {% endif %}
  {% endfor %}
</div>
