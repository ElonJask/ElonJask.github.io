# 博客写作与发布规则（SEO + 性能）

本规范用于后续你自己写作，或让 AI 代写时直接套用，目标是：

- 保持收录友好（SEO）
- 保持页面加载快（Performance）
- 保持中英文内容可维护（Bilingual）

## 1. 必填 Front Matter 规则

中文文章（`_posts/`）最小模板：

```md
---
layout: post
title: "文章标题"
date: 2026-02-24 10:00:00 +0800
summary: "一句话摘要（建议 60-140 字）"
categories: Tech # Tech / Life
topic: blog-engineering # blog-engineering / mac-workflow / life-notes
tags: [关键词1, 关键词2, 关键词3]
translation_key: unique-key-for-this-post
---
```

英文文章（`_posts_en/`）最小模板：

```md
---
layout: post
title: "Post Title"
date: 2026-02-24 10:00:00 +0800
summary: "One-sentence summary (recommended 60-160 chars)."
categories: Tech # Tech / Life
topic: blog-engineering # blog-engineering / mac-workflow / life-notes
tags: [keyword1, keyword2, keyword3]
lang: en-US
translation_key: unique-key-for-this-post
---
```

硬性要求：

- `date` 必须带时区 `+0800`，避免 URL 日期偏移。
- 同一篇中英文文章必须共享同一个 `translation_key`。
- 每篇文章至少 `3` 个 `tags`，避免关键词覆盖不足。
- `topic` 必须填写且只能从固定专题中选择（避免一次性标签碎片化）。
- `categories` 仅用 `Tech` / `Life` 两个一级分类，保持结构稳定。

## 2. 文件命名规则

- 中文：`_posts/YYYY-MM-DD-slug.md`
- 英文：`_posts_en/YYYY-MM-DD-slug.md`
- `YYYY-MM-DD` 必须与 `date` 的自然日一致（按 `+0800`）。

## 3. SEO 内容规则

- `title`：简洁明确，尽量包含核心关键词。
- `summary`：必须是可读摘要，不要留空，不要复制正文首段。
- 正文结构：按 `##` 分节，避免长段无小节。
- 外链必须使用 `https`。
- 不要堆叠关键词，不要写无意义重复段落。

## 4. 图片性能规则（强制）

- 禁止使用外链图床（如 `https://xxx.com/xxx.jpg` 直接热链）。
- 图片必须放在：`images/posts/<slug>/`。
- 优先使用 `.webp`，推荐宽度不超过 `1280`。
- Markdown 中图片使用 HTML 写法并带尺寸：

```html
<img src="/images/posts/your-slug/demo.webp" alt="图片描述" width="1200" height="800" />
```

- `alt` 必填，描述图片含义，不要空字符串。

## 5. AI 写作交付格式规则

让 AI 生成文章时，必须明确要求：

- 输出完整 Front Matter（含 `tags`、`translation_key`）。
- 图片使用本地路径，不允许外链 URL。
- 图片用 HTML `<img ...>`，必须包含 `alt/width/height`。
- 若提供中英文双语，二者主题一致且 `translation_key` 相同。

可直接给 AI 的指令模板：

```txt
请按 Jekyll 博客格式输出文章：
1) 提供完整 Front Matter（layout/title/date(+0800)/summary/categories/topic/tags/translation_key，英文版加 lang: en-US）。
2) 正文分节清晰（至少 3 个 H2）。
3) 如包含图片，只允许本地路径 /images/posts/<slug>/xxx.webp，并使用 <img> 标签且带 alt/width/height。
4) 不要生成外链图床地址。
```

## 6. 发布前检查清单

执行以下命令：

```bash
cd /Users/lianhua/Personal/Tw93Blog/tw93.github.io
bundle exec jekyll build
```

检查是否有外链图片：

```bash
rg -n "https?://.*\\.(png|jpg|jpeg|webp|gif)" _posts _posts_en
```

检查 `translation_key` 是否缺失：

```bash
rg -n "^translation_key:" _posts _posts_en
```

检查 `topic` 是否缺失：

```bash
rg -n "^topic:" _posts _posts_en
```

## 7. 质量门槛（DoD）

一篇文章只有在满足以下条件后才允许发布：

- 本地构建成功，无报错。
- Front Matter 字段完整。
- 无外链图片，图片有 `alt/width/height`。
- 中英文互链关系正确（如有双语）。
