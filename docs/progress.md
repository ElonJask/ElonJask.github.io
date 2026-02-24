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

- 已完成：彻底停用 GitHub Actions（删除 .github/workflows/jekyll.yml）。
- 已完成：简化 robots.txt，保留允许抓取与 sitemap，避免阻塞 CSS/JS。

- 已新增：文章页阅读进度条（顶部细线）与页面淡入/标题下划线动画（可被系统“减少动态效果”设置关闭）。

- 已新增：文章页阅读时间（按 300 词/分钟估算，含中英切换文案）。
- 已调整：页脚仅保留 GitHub/Twitter/RSS 图标。

- 已新增：返回顶部按钮（仅滚动到一定距离后出现，保持轻量）。
- 已优化：文章元信息（类别/日期/阅读时间）排版更一致。


## 2026-02-06
- 已完成：新增中文博文《向外走》，扩写原始文案以呈现更完整的内心变化。

## 2026-02-07
- 已完成：新增中文博文《我的 Mac 效率工具清单（2026）》，增强讲解密度并保留原始官网/项目链接与图片。
- 已完成：重写提交历史，移除提交信息中的 emoji，统一提交信息风格。

## 2026-02-08
- 已完成：页脚新增站点统计信息（文章数/字数）并优化样式展示。

## 2026-02-17
- 已完成：新增中文博文《归乡之后，继续向前》，对年假返乡经历与新年计划进行润色整理。
- 已完成：新增英文版博文《Homecoming, Then Forward》，与中文主题保持一致。

## 2026-02-10
- 已完成：重新设计页脚统计展示为胶囊式布局，突出“文章数/字数”并优化可读性与间距。
- 已完成：补齐英文文章（同步新增《Walk Outward》《My Mac Productivity Toolkit (2026)》）。
- 已完成：修复英文模式下页脚统计口径，按语言统计文章数与字数。
- 已完成：统一页脚统计在英文模式下的文案与口径（Posts/Words），并增强语言识别逻辑。
- 已完成：页脚统计改为纯文本展示，移除胶囊样式，保持简洁。

## 2026-02-24
- 已完成：修复 `hreflang` 映射逻辑，支持中英文 slug 不一致场景（基于 `translation_key`）。
- 已完成：为现有中英文文章补齐 `translation_key`，确保语言切换与搜索引擎语言关系一致。
- 已完成：404 页面增加 `noindex` 与 `sitemap: false`，避免错误页被收录。
- 已完成：清理 RSS 残留（移除 `Tw93 Blog` 和 `follow_challenge`），并统一为站点配置输出。
- 已完成：清理占位社媒配置（twitter/zhihu/v2ex），并让 About/页脚在未配置时自动隐藏对应链接。
