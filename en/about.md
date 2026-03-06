---
layout: page
title: About
summary: "About ElonJask: focus areas, writing topics, and contact links."
permalink: /en/about.html
hideHomeActive: true
lang: en-US
---

## About Me

Hi, I'm **ElonJask**.

This is my bilingual personal blog (Chinese / English), where I document software practice, life observations, and long-term thinking. The site is available at [https://www.7fl.org](https://www.7fl.org).

I want this blog to keep three principles:

- Content first: keep writing, publishing, and maintenance clear and reliable.
- Keep it simple: prioritize readability and information density over decoration.
- Long-term mindset: iterate consistently instead of doing one-off overhauls.

## Main Writing Topics

- **Life Essays (`life-essays`)**: notes on growth, relationships, and personal rhythm.
- **Tech Notes (`tech-notes`)**: software practice, engineering methods, and technical thinking.
- **Tool Sharing (`tool-sharing`)**: tools and workflows focused on efficiency, stability, and long-term usability.

## Site Info

- Stack: Jekyll, Ruby + Bundler, Liquid.
- Deployment: automatic deployment from `main` (current production platform: Vercel).
- Comments: Giscus.
- Analytics: Umami (proxied via `/stats`).

## Follow Me

- [Github](https://github.com/{{site.github}})
{% if site.twitter and site.twitter != "" %}
- [Twitter](https://twitter.com/{{site.twitter}})
{% endif %}
{% if site.zhihu and site.zhihu != "" %}
- [Zhihu](https://www.zhihu.com/people/{{site.zhihu}})
{% endif %}
{% if site.v2ex and site.v2ex != "" %}
- [V2EX](https://www.v2ex.com/member/{{site.v2ex}})
{% endif %}
