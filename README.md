# ElonJask Blog

基于 Jekyll 的双语个人博客（中文 / English），当前主部署平台为 Vercel，域名为 [https://www.7fl.org](https://www.7fl.org)。

## 项目目标

- 内容优先：写作、发布、维护流程清晰。
- 站点简洁：风格稳定，不做过度花哨改造。
- SEO 友好：可被 Google / Bing / 百度等搜索引擎收录。
- 性能优先：保证首屏和文章页加载速度。

## 技术栈

- `Jekyll`（静态站点生成）
- `Ruby + Bundler`（依赖与构建）
- `Liquid`（模板）
- `Vercel`（生产部署）
- `Giscus`（评论系统）

## 快速开始

### 1) 环境要求

- Ruby `3.1+`（建议用 `rbenv` 管理）
- Bundler `2.x`
- Node.js（仅用于执行 `npm run dev/build` 脚本，非核心依赖）

### 2) 安装依赖

```bash
bundle install
```

### 3) 本地启动

```bash
npm run dev
# 或
bundle exec jekyll serve --watch --trace
```

打开：`http://127.0.0.1:4000`

### 4) 本地构建

```bash
bundle exec jekyll build
```

生成目录：`_site/`

## 常用命令

```bash
# 启动开发服务
npm run dev

# 构建静态站点
npm run build

# 检查是否有外链图片（建议发布前执行）
rg -n "https?://.*\.(png|jpg|jpeg|webp|gif)" _posts _posts_en
```

## 目录结构

```text
.
├── _config.yml            # 全局配置（SEO、评论、域名等）
├── _posts/                # 中文文章
├── _posts_en/             # 英文文章
├── _includes/             # 公共模板（head/footer/giscus）
├── _layouts/              # 页面布局
├── _plugins/              # 自定义插件
├── css/                   # 样式
├── js/                    # 脚本
├── images/                # 本地图片资源
├── docs/WRITING_RULES.md  # 写作/SEO/性能规范（强烈建议先读）
└── docs/progress.md       # 项目进展记录
```

## 写作与发布流程

### 1) 新建文章

- 中文：`_posts/YYYY-MM-DD-slug.md`
- 英文：`_posts_en/YYYY-MM-DD-slug.md`

示例 Front Matter：

```md
---
layout: post
title: "文章标题"
date: 2026-02-24 10:00:00 +0800
summary: "一句话摘要，建议 60-140 字"
categories: Tech
topic: tech-notes
# tags 可选（不再作为主导航）
# tags: [jekyll, seo, performance]
translation_key: your-post-key
---
```

英文版本请额外加：

```md
lang: en-US
```

固定专题（`topic`）当前使用以下 key：

- `life-essays`（生活随笔）
- `tech-notes`（技术记录）
- `tool-sharing`（工具分享）

### 2) 发布前检查

```bash
bundle exec jekyll build
```

确保：

- 本地构建通过
- `summary / categories / topic / translation_key` 填写完整（`tags` 可选）
- 图片尽量使用本地 `webp`，并补齐 `alt + width + height`

详细规则见：`docs/WRITING_RULES.md`

## 部署

### Vercel（当前生产方案）

- 已连接 GitHub 仓库，`main` 分支 push 后自动部署。
- 项目根目录：`./`
- Build Command：`bundle exec jekyll build`
- Output Directory：`_site`

## 评论系统（Giscus）

配置位置：`_config.yml`

```yml
giscus:
  repo_id: "R_xxx"
  category: "General"
  category_id: "DIC_xxx"
```

站点仓库名通过 `repo` 配置读取：

```yml
repo: ElonJask/ElonJask.github.io
```

## SEO 与统计配置

配置位置：`_config.yml`

```yml
# SEO and Analytics
umami:
  script_url: "/stats/script.js"
  website_id: ""
  data_host_url: "https://www.7fl.org/stats"
  domains: "www.7fl.org,7fl.org,elon-jask-github-io.vercel.app,elonjask.github.io"
  do_not_track: true
```

### Google Search Console 验证（当前推荐）

当前站点使用 **DNS 验证**（域名提供商验证），不需要 `google_site_verification` 配置项。
只要 Search Console 里显示“您是经过验证的所有者”即可。

### `umami` 怎么填

- `script_url`：Umami 脚本地址（当前通过 Vercel 反向代理为 `/stats/script.js`）。
- `website_id`：Umami 站点 ID（必填）。
- `data_host_url`：Umami 事件上报地址（当前为 `https://www.7fl.org/stats`）。
- `domains`：统计域名白名单（建议含 `www` 与裸域）。
- `do_not_track`：是否尊重浏览器 DNT（建议 `true`）。

示例：

```yml
umami:
  script_url: "/stats/script.js"
  website_id: "f23dd8f5-ee34-4395-8908-4c2e46adca76"
  data_host_url: "https://www.7fl.org/stats"
  domains: "www.7fl.org,7fl.org,elon-jask-github-io.vercel.app,elonjask.github.io"
  do_not_track: true
```

## 搜索引擎收录（建议按这个顺序）

### 1) 先确认基础项

- `url` 已设为线上域名：`https://www.7fl.org`
- `robots.txt` 可访问：`https://www.7fl.org/robots.txt`
- `sitemap.xml` 可访问：`https://www.7fl.org/sitemap.xml`

### 2) 提交站点地图

- Google Search Console：提交 `https://www.7fl.org/sitemap.xml`
- Bing Webmaster Tools：提交 `https://www.7fl.org/sitemap.xml`
- 百度搜索资源平台：提交 `https://www.7fl.org/sitemap.xml`

### 3) 提交后预期

- 收录不会实时生效，通常需要几天到几周。
- 新站前期波动正常，持续更新高质量文章比频繁改模板更有效。

## 维护约定

- 进展记录：`docs/progress.md`
- 写作规范：`docs/WRITING_RULES.md`
- 保持主分支可构建：每次改动后至少执行一次 `bundle exec jekyll build`

## License

本仓库遵循 `License` 文件中的授权条款。
