---
layout: page
title: 专题
summary: 按固定专题查看文章：生活随笔、技术记录、工具分享。
permalink: /topics
comments: false
hideHomeActive: true
lang: zh-CN
---

{% assign topics = site.topics_zh %}

{% if topics and topics.size > 0 %}
  <div class="topic-post-groups">
      {% for topic in topics %}
        {% assign topic_posts = site.posts | where: "topic", topic.key | sort: "date" | reverse %}
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
  <p>当前还没有配置专题。</p>
{% endif %}
