---
layout: page
title: Topic Categories
summary: "Browse posts by fixed topics: life essays, tech notes, and tool sharing."
permalink: /en/topics
comments: false
hideHomeActive: true
lang: en-US
---

{% assign topics = site.topics_en %}

<div class="topic-index">
  {% if topics and topics.size > 0 %}
    <ul class="topic-index-list">
      {% for topic in topics %}
        {% assign topic_posts = site.posts_en | where: "topic", topic.key | sort: "date" | reverse %}
        {% assign visible_posts = 0 %}
        {% for post in topic_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_posts = visible_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_posts > 0 %}
          <li class="topic-index-item">
            <a href="#topic-{{ topic.key }}" class="topic-index-name">{{ topic.name }}</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>

    <div class="topic-post-groups">
      {% for topic in topics %}
        {% assign topic_posts = site.posts_en | where: "topic", topic.key | sort: "date" | reverse %}
        {% assign visible_posts = 0 %}
        {% for post in topic_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_posts = visible_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_posts > 0 %}
          <section class="topic-post-group" id="topic-{{ topic.key }}">
            <h2 class="topic-post-title">{{ topic.name }}</h2>
            {% if topic.summary and topic.summary != "" %}
              <p class="topic-post-summary">{{ topic.summary }}</p>
            {% endif %}
            <ul class="topic-post-list">
              {% for post in topic_posts %}
                {% assign is_hidden = post.hidden | default: post.hide %}
                {% if is_hidden != true %}
                  <li>
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
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
    <p>No topic definitions yet.</p>
  {% endif %}
</div>
