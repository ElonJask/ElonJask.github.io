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
- 已完成：首页标题与摘要品牌化（中文/英文），提升品牌词检索展示一致性。
- 已完成：列表摘要添加 `data-nosnippet`，降低首页摘要被最新文章片段“污染”的概率。
- 已完成：增加 `google_site_verification` 配置项与 `<meta name="google-site-verification">` 注入支持。
- 已完成：性能优化（首屏关键路径）：
  - 首页/英文首页不再加载 `jinkai.css`（仅中文文章页加载），移除首页字体级联阻塞。
  - `giscus.app`、`googletagmanager.com`、`gw.alipayobjects.com` 改为按需预连接，减少无效连接开销。
  - 关闭空 GA 配置下的脚本注入（避免无效第三方请求）。
  - favicon 改为本地静态资源 `images/favicon.png`，减少首屏第三方依赖。
  - 移除全局样式中未使用的 `_404.scss` 导入，缩减关键 CSS 体积。
  - 文章图片在构建阶段注入加载策略：统一 `loading=\"lazy\" + decoding=\"async\"`，降低首屏与长文并发图片请求压力。
- 已完成：本地 Lighthouse 复测（mobile, localhost）得分提升至 `100`，指标约为 `FCP 0.9s / LCP 1.4s / TBT 0ms`。
- 已完成：文章页性能复测（mobile, localhost）得分约 `74`（此前约 `57`），瓶颈主要转为外链大图体积与中文字体文件体积。
- 已完成：新增 `use_jinkai_font` 开关并默认关闭，统一首页与文章页字体粗细观感，避免页面间字体观感不一致。
- 已完成：将《我的 Mac 效率工具清单（2026）》中英文图片迁移为本地 WebP 资源（`/images/posts/mac-apps-2026/*.webp`），显著降低图片体积。
- 已完成：为上述文章图片补齐 `width/height` 与语义化 `alt`，修复 `unsized-images` 审计项。
- 已完成：`vercel.json` 增加图片长期缓存头（`max-age=31536000, immutable`）与 `sw.js` 重新验证策略。
- 已完成：本地 Lighthouse 复测（文章页 mobile）约 `97`，LCP 约 `2.6s`，主要剩余为通用样式/脚本未按页面拆分。
- 已完成：新增 `docs/WRITING_RULES.md`（面向人类与 AI 的写作/SEO/性能规范）并在 `README.md` 增加入口说明。
- 已完成：重构 `README.md`，补齐项目结构、部署流程、写作规范入口、SEO/统计配置说明。
- 已完成：新增多引擎站点验证配置项（Bing/Baidu）并在 `head` 模板注入对应验证 meta。
- 已完成：新增 `baidu_tongji` 可选配置，保持按需加载，默认空值不引入额外请求。
- 已完成：写入 GA4 Measurement ID（`google_analytics: G-H2Z2T321VZ`），启用站点访问统计采集。
- 已完成：按 DNS 验证方案移除 `google_site_verification` 配置项与对应模板注入，减少冗余配置。
- 已完成：移除 Bing/Baidu 验证与统计注入逻辑，配置侧改为仅保留 GA 与 51.LA。
- 已完成：接入 51.LA 同步脚本（`LA_COLLECT + LA.init`）并写入站点 ID/CK。

## 2026-02-25
- 已完成：为全部中英文文章补齐 `tags`，增强文章级关键词覆盖。
- 已完成：新增 `Tags` 导航入口与中英文标签归档页（`/tags.html`、`/en/tags.html`），提升站内主题聚合与爬虫可发现性。
- 已完成：新增 `_plugins/tag_indexes.rb`，统一构建中文/英文标签索引（`posts_tags`、`posts_en_tags`）。
- 已完成：文章页元信息新增可点击标签锚点，直接跳转对应标签归档区块。
- 已完成：文章页新增“相关文章”模块（按同标签优先，数量不足时回退最近文章），强化内链结构。
- 已完成：搜索数据源 `search.json` 增加 `tags` 字段并扩展正文摘要长度，提升站内检索召回。
- 已完成：新增索引提交脚本 `scripts/seo/submit_indexing.py`，支持：
  - Google Search Console API 提交 sitemap；
  - IndexNow URL 提交；
  - 百度资源平台 URL 提交；
  - `--git-range` 按提交差异自动生成文章 URL；
  - `--dry-run` 与 `--insecure` 运行模式。
- 已完成：新增 `docs/INDEXING_GUIDE.md` 与 `npm run seo:submit:*` 命令，提供可执行的索引提交流程。
- 已完成：按“优先开源工具”策略移除自研索引提交脚本（`scripts/seo/submit_indexing.py`）。
- 已完成：接入 `bojieyang/indexnow-action`（`indexnow.yml`），自动提交站点地图 URL 到 IndexNow。
- 已完成：接入 `lycheeverse/lychee-action`（`seo-health.yml`），对 README/About/中英文文章做失效链接巡检。
- 已完成：接入 `treosh/lighthouse-ci-action`（`lighthouse.yml`），定时输出线上页面性能与 SEO 报告。
- 已完成：新增 `docs/SEO_AUTOMATION.md`，统一说明开源工具职责、触发机制与必配项（`INDEXNOW_KEY`）。
- 已完成：创建并上线 IndexNow key 文件（根路径 `<key>.txt`）并写入仓库 Secret `INDEXNOW_KEY`。
- 已完成：重做中英文标签页（信息卡片 + 搜索筛选 + 分组列表），提升可读性与可检索性。
- 已完成：按反馈移除文章页新增“相关文章”模块，恢复原有 `read-more` 单模块结构。
- 已完成：按反馈将中英文标签页改为极简风格，仅展示标签与文章数，去除搜索和分组列表。
- 已完成：再次精简标签页排版为“列表式标签索引”（双栏自适应、细分割线、锚点高亮），贴合项目整体简洁风格。
- 已完成：按反馈移除标签数量显示，标签点击后直接定位到该标签文章列表区块。
- 已完成：按“仅用 Vercel”策略移除全部自建 GitHub Actions 工作流（`indexnow`/`seo-health`/`lighthouse`）。
- 已完成：移除 IndexNow key 文件与 SEO 自动化文档，仓库回归最小维护面。
- 已完成：删除仓库 Secret `INDEXNOW_KEY`，避免无用敏感配置残留。
- 已完成：GitHub Pages 切换到 `legacy + gh-pages` 源分支，避免 `main` 分支继续触发 Pages 构建。
- 已完成：标签页升级为可分享筛选链接（`/tags.html?tag=xxx`、`/en/tags.html?tag=xxx`），支持“全部/All”快速恢复。
- 已完成：文章页标签链接改为指向筛选 URL，减少跳转后再手动定位成本。
- 已完成：搜索模块升级为中英双语文案与标签匹配，补齐空态/加载态/错误态样式，提升可用性。
- 已完成：文章页新增轻量目录（TOC，基于 `h2/h3` 自动生成），桌面端默认展开并支持滚动高亮。
- 已完成：新增中英文归档页（`/archive.html`、`/en/archive.html`）并加入导航。
- 已完成：首页新增“精选文章”模块（`featured: true`），保持风格简洁且不引入额外依赖。
- 已完成：新增模块链接统一改为 `relative_url`，避免域名切换/预览环境跳转异常。
- 已完成：本地构建验证通过（Ruby 3.1.6 + Bundler 2.3.27，`bundle exec jekyll build`）。
- 已完成：按反馈移除首页“精选文章/置顶组件”，恢复纯列表首页，删除相关样式与配置，避免风格割裂。
- 已完成：按反馈恢复首页“置顶”模块，并改为横向滑动卡片布局（支持后续置顶数量增长，避免挤压主列表）。
- 已完成：为 CSS/JS 资源增加构建版本参数（cache-busting）并升级 SW 缓存版本，降低部署后样式不一致概率。
- 已完成：归档页改为“严格倒序”展示（按年份与文章时间均为最新在前）。
- 已完成：中文站顶部导航文案本地化（About/Tags/Archive -> 关于/标签/归档），搜索按钮文案同步中文化。
- 已完成：导航文案配置化（`_config.yml` 拆分 `menu_zh` / `menu_en`），模板不再写死映射逻辑。
- 已完成：归档页升级为“年份折叠/展开”交互，默认展开当年，历史年份按需展开。
- 已完成：置顶横滑区新增两侧渐隐提示（根据滚动位置动态显隐），提升可发现性。
- 已完成：文章页目录（TOC）样式重构为线性极简风，去除圆角卡片感并压缩视觉占用，统一项目基调。
- 已完成：文章页目录升级为“大屏左侧细栏”布局（桌面侧边、小组件化），并将默认自动展开阈值调整为超宽屏。
- 已完成：进一步优化左侧目录细栏对比度与可读性（增强背景/边框/文字层级），减轻“突兀和发灰”观感。
- 已完成：左侧目录卡片圆角与正文卡片统一（沿用 `$border-radius`），降低“方正割裂感”。
