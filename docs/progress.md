# 项目进展

## 2026-02-05
- 已完成：检查项目结构与关键配置（README/Gemfile/package.json/CLAUDE.md）。
- 已完成：检查本机环境（Ruby 2.6.10、Bundler 1.17.2、Node 25.1.0、npm 11.6.2）。
- 发现：README/CLAUDE.md 建议 Ruby 3.1+；当前 Ruby 版本偏低，可能导致 Jekyll 依赖不兼容。
- 待办：安装/切换到 Ruby 3.1+ 与更新 Bundler；执行 `bundle install` 后再运行 `npm run dev` 启动本地服务。

- 已完成：通过 Homebrew 安装 rbenv/ruby-build，并安装 Ruby 3.1.6（EOL 但满足项目要求）。
- 已完成：使用 Ruby 3.1.6 执行 `bundle install` 安装依赖。
- 已完成：启动本地 Jekyll 服务，监听 `http://127.0.0.1:4000`（日志见 `.jekyll.log`）。

- 已完成：清空历史文章（`_posts/`、`_posts_en/`），并创建最小示例文章各 1 篇。
- 已完成：重写 `about.md` 与 `_config.yml` 为你的个人占位信息，便于后续自定义。

- 已完成：清理 Tw93 残留配置（head 元信息、footer 控制台输出、giscus 配置、package.json、README）。
- 已完成：更新站点基础信息为 ElonJask（_config.yml、giscus.json）。

- 已完成：写入 Giscus repo_id 与 category_id（来自你提供的脚本）。

- 修正：站点 URL 改为小写 https://elonjask.github.io，避免资源加载 404 导致样式错乱。

- 修正：静态资源引用改为 `site.baseurl`（避免 `site.url` 导致 CSS/JS 404），并将 GitHub Actions 触发分支改为 `main`。

- 修正：GitHub Actions runner 固定为 ubuntu-22.04，避免 ubuntu-24.04 被识别为 self-hosted 导致 Ruby 工具缓存不可用。

- 已完成：移除历史遗留静态资源（images/、files/、github.html）与本地缓存文件。
- 已完成：清理 Tw93 文案残留（robots.txt、sw.js、en/about.md、CLAUDE.md、package-lock.json）。
- 已完成：站点标题改为 ElonJask。

- 修正：Giscus 评论样式与登录按钮显示（comment.css 不再隐藏 header；主题样式使用绝对 URL）。

- 修正：站点 URL 改为 https://www.7fl.org，并将导航链接改为相对路径，避免点击文章跳转旧域名。
- 更新：Giscus origins 增加 Vercel 域名与 www.7fl.org。

