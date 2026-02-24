# 个人博客

这是基于 Jekyll 的个人博客项目。

## 本地运行

1. 安装 Ruby 3.1+ 与 Bundler
2. 安装依赖：`bundle install`
3. 启动服务：`npm run dev`
4. 访问：`http://127.0.0.1:4000`

## 写文章

- 中文文章：`_posts/YYYY-MM-DD-title.md`
- 英文文章：`_posts_en/YYYY-MM-DD-title.md`
- 强烈建议先阅读：`docs/WRITING_RULES.md`

模板示例：

```md
---
layout: post
title: "文章标题"
date: 2026-02-05 10:00:00
summary: "一句话简介"
categories: Share
---

正文内容...
```

## 部署

- 当前推荐：Vercel 自动部署（push 到 `main` 后自动发布）。
- 自建服务器：执行 `bundle exec jekyll build`，上传 `_site/`。
