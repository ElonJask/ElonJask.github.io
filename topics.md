---
layout: page
title: 专题
summary: 按固定专题查看文章，避免标签碎片化。
permalink: /topics
comments: false
hideHomeActive: true
lang: zh-CN
---

{% assign topics = site.topics_zh %}
{% assign topics_page_url = '/topics' | relative_url %}

<div class="topic-index">
  <p class="topic-index-note">固定专题用于沉淀长期内容；标签仅作补充检索。</p>

  {% if topics and topics.size > 0 %}
    <ul class="topic-index-list">
      <li class="topic-index-item">
        <a href="{{ topics_page_url }}" class="topic-index-name" data-topic-key="">全部</a>
      </li>
      {% for topic in topics %}
        {% assign key = topic.key %}
        {% assign topic_posts = site.posts | where: "topic", key | sort: "date" | reverse %}
        {% assign visible_posts = 0 %}
        {% for post in topic_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_posts = visible_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_posts > 0 %}
          <li class="topic-index-item">
            <a href="{{ topics_page_url }}?topic={{ key }}#topic-posts" class="topic-index-name" data-topic-key="{{ key }}">{{ topic.name }}</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>

    <div class="topic-post-groups" id="topic-posts">
      {% for topic in topics %}
        {% assign key = topic.key %}
        {% assign topic_posts = site.posts | where: "topic", key | sort: "date" | reverse %}
        {% assign visible_posts = 0 %}
        {% for post in topic_posts %}
          {% assign is_hidden = post.hidden | default: post.hide %}
          {% if is_hidden != true %}
            {% assign visible_posts = visible_posts | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if visible_posts > 0 %}
          <section class="topic-post-group" id="topic-{{ key }}" data-topic-key="{{ key }}">
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
</div>

<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    var activeKey = (params.get('topic') || '').trim().toLowerCase();
    var groups = Array.prototype.slice.call(document.querySelectorAll('.topic-post-group'));
    var links = Array.prototype.slice.call(document.querySelectorAll('.topic-index-name[data-topic-key]'));
    if (!groups.length || !links.length) return;

    links.forEach(function (link) {
      var key = (link.dataset.topicKey || '').toLowerCase();
      if (activeKey === key) {
        link.classList.add('active');
      }
    });

    if (!activeKey) {
      links[0] && links[0].classList.add('active');
      return;
    }

    var hasMatch = false;
    groups.forEach(function (group) {
      var key = (group.dataset.topicKey || '').toLowerCase();
      var visible = key === activeKey;
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
