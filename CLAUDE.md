# CLAUDE.md

This repository is a personal Jekyll blog using the cosy-jekyll-theme layout.

## Project Overview

- Jekyll-based static site
- Posts in `_posts/` (Chinese) and `_posts_en/` (English)
- Layouts in `_layouts/`, shared components in `_includes/`

## Local Development

```bash
bundle install
npm run dev
```

Site will be served at `http://127.0.0.1:4000`.

## Writing Posts

```yaml
---
layout: post
title: "Post Title"
date: 2026-02-05 10:00:00
summary: "Short summary"
categories: Share
---
```

## Deployment

- GitHub Actions builds and deploys to GitHub Pages.

