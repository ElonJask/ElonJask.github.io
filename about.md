---
layout: page
title: 关于
summary: "关于 ElonJask：技术方向、写作主题与联系方式。"
permalink: /about.html
hideHomeActive: true
---

## 关于我

你好，我是 **ElonJask**。

这里是我的双语个人博客（中文 / English），主要记录技术实践、生活观察与长期思考。站点地址是 [https://www.7fl.org](https://www.7fl.org)。

我希望这个博客保持三件事：

- 内容优先：让写作、发布和维护流程清晰稳定。
- 风格简洁：避免过度花哨，信息密度和可读性优先。
- 长期主义：持续更新、持续迭代，而不是一次性堆砌。

## 主要写作方向

- **生活随笔（life-essays）**：关于成长、关系与个人节奏的记录。
- **技术记录（tech-notes）**：围绕开发实践、工程方法与技术思考。
- **工具分享（tool-sharing）**：关注效率、稳定性与长期可用性的工具与工作流。

## 站点信息

- 技术栈：Jekyll、Ruby + Bundler、Liquid。
- 部署方式：主分支变更后自动部署（当前生产平台为 Vercel）。
- 评论系统：Giscus。
- 站点统计：Umami（通过 `/stats` 代理）。

## 关注我

- [Github](https://github.com/{{site.github}})
{% if site.twitter and site.twitter != "" %}
- [Twitter](https://twitter.com/{{site.twitter}})
{% endif %}
{% if site.zhihu and site.zhihu != "" %}
- [知乎](https://www.zhihu.com/people/{{site.zhihu}})
{% endif %}
{% if site.v2ex and site.v2ex != "" %}
- [V2EX](https://www.v2ex.com/member/{{site.v2ex}})
{% endif %}
