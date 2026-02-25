# SEO 自动化工具链（开源方案）

目标：不写自研提交脚本，直接用成熟开源工具做「收录加速 + 质量巡检」。

## 已接入工具

1. `bojieyang/indexnow-action`
- 用途：自动向 IndexNow（Bing/Yandex 等）提交新增/更新 URL。
- 触发：`main` 分支 push（仅文章与配置变更）+ 手动触发 + 每日定时。

2. `lycheeverse/lychee-action`
- 用途：巡检文档与文章中的失效链接，避免 SEO 因 404 外链受影响。
- 触发：PR + 每周定时 + 手动触发。

3. `treosh/lighthouse-ci-action`
- 用途：持续监控首页/文章页性能与 SEO 评分变化。
- 触发：每周定时 + 手动触发。

## 你需要配置的内容

### 1) IndexNow Key（必配）

在 GitHub 仓库设置 Secret：

- 名称：`INDEXNOW_KEY`
- 值：你的 IndexNow key（建议 8-128 位随机字符串）

并在站点根目录上线一个同名文件：

- 路径：`https://www.7fl.org/<INDEXNOW_KEY>.txt`
- 内容：仅写 key 本身（无额外字符）

> 如果没有这个文件，IndexNow 端会校验失败。

### 2) Google 收录（保留官方推荐方式）

Google 对博客站点的常规做法依然是：

1. 在 Search Console 保持域名属性已验证
2. 提交并维护 `https://www.7fl.org/sitemap.xml`
3. 通过 Search Console 的「网址检查」手动请求抓取重要新文

本仓库不再使用自研 Google 提交脚本，避免维护成本和鉴权复杂度。

## 工作流文件

- `.github/workflows/indexnow.yml`
- `.github/workflows/seo-health.yml`
- `.github/workflows/lighthouse.yml`

## 参考来源

- IndexNow 协议文档：<https://www.indexnow.org/documentation>
- Google Search Console：提交站点地图：<https://support.google.com/webmasters/answer/7451001>
- Google Search Console API（Sitemaps）：<https://developers.google.com/webmaster-tools/v1/sitemaps/submit>
- Google Indexing API 适用范围说明：<https://developers.google.com/search/apis/indexing-api/v3/using-api>
- `bojieyang/indexnow-action`：<https://github.com/bojieyang/indexnow-action>
- `lycheeverse/lychee-action`：<https://github.com/lycheeverse/lychee-action>
- `treosh/lighthouse-ci-action`：<https://github.com/treosh/lighthouse-ci-action>
