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
- 已完成：按反馈彻底移除首页置顶组件（模板/样式/脚本/文章 `featured` 标记全部清理），首页恢复极简文章列表。
- 已完成：接入 Umami 统计（`cloud.umami.is`），支持 `_config.yml` 配置 `script_url/website_id/domains/do_not_track`，并在 `head` 增加按域名预连接以降低首访握手开销。
- 已完成：按“只保留 Umami”策略移除 Google Analytics 与 51.LA 注入逻辑，清理对应配置项与 README 文档说明。
- 已完成：Umami 升级为第一方代理接入（Vercel `rewrites` 将 `/stats/script.js` 与 `/stats/api/send` 转发到 `cloud.umami.is`），降低拦截导致的数据丢失概率。
- 已完成：补充行为级统计埋点（阅读深度、目录点击、导航点击、语言切换、站内搜索、搜索结果点击、代码复制、外链点击、Read More 点击），从“仅访问量”升级为“访问+行为”分析。
- 已完成：建立固定专题体系（`blog-engineering` / `mac-workflow` / `life-notes`），新增中英文专题页（`/topics`、`/en/topics`）并将导航从“标签”切到“专题”。
- 已完成：统一中英文文章元数据到固定专题（新增 `topic`，分类统一为 `Tech` / `Life`），减少一次性标签碎片化。
- 已完成：文章列表与文章页增加专题内链，提升站内主题聚合与权重传递路径。
- 已完成：修复细节项：`read-more` 绝对链接改为相对链接；中英 About 页面补齐本地化摘要，改善搜索摘要展示一致性。
- 已完成：专题体系调整为固定三类（`life-essays`/`tech-notes`/`tool-sharing`），并同步重映射全部中英文文章。
- 已完成：`/topics` 与 `/en/topics` 改为“专题分类页”直出结构（每个专题下直接展示文章列表），不再使用 query 过滤交互。
- 已完成：下线标签体系主入口（删除 `tags.md`、`en/tags.md` 与 `tag_indexes` 插件），文章页不再展示标签聚合入口，标签字段改为可选补充信息。
- 已完成：移除专题页顶部索引列表与提示文案，并清理未使用的 `topic-index-*` 与 `archive-note` 样式，压缩 CSS 体积以优先性能与 SEO 稳定性。
- 已完成：全仓清理未使用资源（移除 `js/ppt` 演示模块、`lazysizes` 脚本与无引用的 `giscus.json` 配置），减少无效体积与维护负担。
- 已完成：新增博文《当增长像日志一样漂亮，人的告警却越来越多》（`2026-02-27`），从开发者视角讨论“无就业繁荣/减员式增长”与个人处境。

## 2026-02-27
- 已完成：新增英文对照博文《When Growth Looks Healthy but People Still Feel the Squeeze》，与中文文章建立双语映射（`translation_key: growth-and-jobs-decoupling-2026`）。
- 已完成：修正该组中英文文章 `date` 时区为 `+0800`，避免构建后 URL 偏移到次日（`2026-02-28`）导致链接不一致。

## 2026-03-01
- 已完成：导航语言切换入口改为纯图标（移除文字徽标），减少中英文切换时的视觉突兀。
- 已完成：顶部导航字体策略调整为“仅站点名 `ElonJask` 使用手写体”，菜单项（关于/专题/归档 + About/Topics/Archive）统一为常规字体。
- 已完成：移动端导航收敛（字号、间距、换行策略）并统一首页/文章页/专题页/关于页容器间距，提升多页面观感一致性。
- 已完成：本地构建验证通过（`bundle exec jekyll build`）。
- 已完成：修复移动端语言切换抖动细节（导航最小高度、语言图标固定宽高、右侧语言槽位固定宽度，减少切页时布局跳动）。
- 已完成：专题/归档页结构与关于页对齐（新增中部标题容器 `page-shell + title-area`），避免页面内容过度贴顶。
- 已完成：重构 `tags.css/tags_mobile.css`，删除旧标签页遗留规则，改为仅保留当前专题/归档实际使用样式。
- 已完成：移除首页历史遗留未使用 `topbar` 样式与相关覆盖规则，减少 CSS 体积与解析负担。
- 已完成：资源加载优化：
  - `home/page/post` 改为按 `use_jinkai_font` 条件加载金铠字体；
  - 默认将 `use_jinkai_font` 调整为 `false`，减少首屏额外字体样式负担；
  - `post` 页仅在正文存在代码块时加载 `highlight.css`；
  - 移除 `site-head` 中未必触发的 `gw.alipayobjects.com` 预连接。
- 已完成：更新语言切换埋点选择器（兼容 `.lang-switch-icon`），避免切换事件遗漏。
- 已完成：本地 Lighthouse 复测（mobile）：
  - 首页 `http://127.0.0.1:4001/`：Performance `99` / SEO `100`，LCP `1.8s`，CLS `0`。
  - 文章页 `http://127.0.0.1:4001/2026-02-27/growth-and-jobs-decoupling.html`：Performance `99` / SEO `100`，LCP `1.7s`，CLS `0`。
- 已完成：继续深度清理未使用代码/资产：
  - 删除未使用布局与 include（`_layouts/base.html`、`_includes/head.html`、`_includes/header.html`、`_includes/footer.html`、`_includes/search.html`、`_includes/flags.html`）；
  - 删除未使用脚本与资源（`js/*`、`css/comment.css`、`css/photoswipe.css`、`css/index.scss`）；
  - 删除未使用字体（`fonts/SCRIPTIN.ttf`、`fonts/jinkai.ttf`）；
  - 删除未使用 `_sass` 目录并同步移除 `_config.yml` 中 sass 配置与 sitemap 例外项。
- 已完成：进一步性能收敛：
  - 首页背景改为纯色，移除外部背景图依赖（避免第三方 404 请求与额外 RTT）；
  - 去除 `jinkai.css` 与 `use_jinkai_font` 开关逻辑，减少样式分支与无效静态资源；
  - `font.css` 仅保留站点名所需字体，`font-display` 调整为 `optional` 降低字体替换抖动。
- 已完成：移除未使用 `sw.js` 与 `vercel.json` 对应缓存头配置，清理历史 Service Worker 维护面。
- 已完成：中文导航字体细化：`关于 / 专题 / 归档` 在中文态统一为正文同款字体（`TsangerJinKai02` 字体栈），仅站点名 `ElonJask` 保持手写体。
- 已完成：修复站点名字体偶发回退问题：`@font-face` 调整为标准 `format(\"truetype\")`，补齐 `font-style/font-weight`，并在导航 Logo 上禁用字体合成（`font-synthesis: none`）降低回退概率。
- 已完成：确认 Umami 在生产构建生效（`_site` 全页面注入 `/stats/script.js` + `data-website-id`），并保留第一方代理路径（`/stats/*`）以减少拦截导致的统计丢失。
- 已完成：为字体资源增加长期缓存策略（`vercel.json` 新增 `/fonts/*.(ttf|woff2)` immutable 缓存头），降低重复访问的字体请求成本。
- 已完成：本地验收补充：
  - `bundle exec jekyll build` 通过（Ruby 3.1.6 + Bundler 2.3.27）。
  - Lighthouse（mobile，localhost）复测：首页 `99/100/96/100`，文章页 `100/100/96/100`（Performance/Accessibility/Best Practices/SEO）。
- 已完成：重构 `关于/专题/归档` 页面视觉密度与宽度策略：
  - 容器从固定 `60%` 调整为 `max-width: 980px + 自适应边距`，与首页阅读宽度统一；
  - 去除旧版“手写体框线标题”，改为简洁下划线标题结构，缓解“挤”和“突兀”问题；
  - 列表行距、间距、时间信息字号按桌面/移动分别重配，提升扫描效率与阅读舒适度。
- 已完成：标题字体策略修正：
  - 中文页（`lang=zh-*`）`关于/专题/归档` 主标题统一为正文中文字体栈；
  - 英文页保持系统字体，避免中文字体对英文字形造成观感偏差；
  - 站点左上角 `ElonJask` 仍保持手写体，不受上述改动影响。
- 已完成：本地服务复启（`bundle exec jekyll serve --host 127.0.0.1 --port 4001 --livereload`）并验证构建正常。
- 已完成：首页标语颜色加深（`#4f4f4f`），提升在白底下的可读性与视觉稳定性。
- 已完成：将站点名字体新增 `WOFF2` 资源（`fonts/angelina.woff2`）并改为优先加载：
  - `@font-face` 调整为 `woff2 -> ttf` 回退；
  - `site-head` 预加载切换为 `font/woff2`；
  - 在保留手写体风格前提下缩小字体传输体积（约 `75KB -> 32KB`）。
- 已完成：移动端语言切换交互重排：
  - 顶栏右上角语言图标在移动端隐藏，释放导航横向空间；
  - 导航下方新增小号分段开关 `中 / EN`（当前语言高亮），降低视觉突兀并缓解英文导航拥挤。
- 已完成：根据反馈切换为“顶栏同排文字切换”：
  - 取消移动端导航下方分段开关；
  - 顶栏右侧改为 `中 / EN` 纯文字切换（当前项下划线高亮）；
  - 桌面端继续保持右上角语言图标。
- 已完成：再次按反馈简化移动端语言文案为“单按钮反向切换”：
  - 中文页仅显示 `EN`，英文页仅显示 `中`；
  - 保持顶栏同排布局，不再占用第二行空间。
- 已完成：移动端顶部导航字号上调（菜单 `14 -> 16`，窄屏 `13 -> 14`；语言切换 `12 -> 14`），提升可读性并减少“发小”观感。
- 已完成：移动端语言切换进一步与导航风格统一：
  - 取消语言文案下划线，改为与导航项一致的纯文字链接样式；
  - 结构简化为单链接（`EN` 或 `中`），避免额外包裹元素造成对齐偏差。
- 已完成：导航布局重排（桌面 + 移动端）：
  - `ElonJask` 不再占满整行（移除 `flex: 1`），导航项（关于/专题/归档）左移到站点名右侧；
  - 语言切换区域改为 `margin-left: auto` 固定在行尾，维持清晰的“主导航在左，语言在右”结构；
  - 同步微调移动端 logo 与导航间距，改善左上区域的视觉协调度。
- 已完成：按新反馈将主导航提升到“顶部中间区域”：
  - 模板结构重排为 `left / center / right` 三段（logo / 菜单 / 语言），菜单区固定居中；
  - 桌面端使用三列网格保持居中稳定，不随 logo 长度变化漂移；
  - 移动端改为两行网格（首行 logo + 语言，次行居中菜单），并放大导航字号改善小屏可读性。
- 已完成：移动端导航再次调整为单行结构（与 `ElonJask` 同行）：
  - 移除两行布局，改为 `left / center / right` 单行网格；
  - 中间菜单保持居中，左右分别为 logo 与语言切换；
  - 细分 `430/380/340` 三档字号与间距，缓解小屏拥挤并提升观感一致性。
- 已完成：修复移动端语言切换贴边问题并统一栅格边距：
  - 桌面导航内边距统一为 `20px`，移动端统一为 `16/14/12px` 分档；
  - 右侧语言区增加微小内补偿，避免 `EN/中` 贴到屏幕边缘；
  - 清理 `styles/custom.css` 中遗留的导航覆盖规则，避免样式互相打架导致对齐漂移。
- 已完成：补齐移动端安全区适配（`env(safe-area-inset-left/right)`），在刘海屏与圆角屏设备上进一步避免右上角语言切换贴边。
- 已完成：导航当前页高亮（Active）：
  - 模板中新增菜单 URL 标准化匹配（`/about` 与 `/about.html` 统一），避免因链接形态不同导致高亮丢失；
  - 当前导航项仅通过颜色/字重增强，不使用下划线，保持极简风格一致性。
- 已完成：统一“导航到首屏内容”的纵向节奏：
  - 桌面导航底部间距收敛到 `36px`，移动端收敛到 `18px`；
  - 进一步降低页面切换时的垂直跳变感（首页、文章页、关于/专题/归档）。
- 已完成：移动端首页信息密度优化：
  - 文章摘要改为 2 行截断并提高行高（更易扫读），减少列表首屏拥挤。
- 已完成：导航点击热区统一（PC/移动）：
  - 导航链接统一改为 `inline-flex + min-height`，扩大可点击区域，减少误触；
  - 桌面与移动端语言切换点击热区同步对齐。
- 已完成：专题/归档日期列等宽对齐：
  - 桌面端时间列固定宽度 `96px`，移动端 `88px`；
  - 启用 `tabular-nums`，提升时间列纵向扫描稳定性。
- 已完成：顶部垂直节奏统一：
  - 文章页首屏容器去除额外顶外边距并下调顶内边距（桌面/移动）；
  - 首页移动端标语上边距从 `34px` 收敛到 `18px`，桌面标语下边距同步收敛，减少页面切换时“忽上忽下”的跳变感。
- 已完成：导航交互细化：
  - 导航与语言切换链接统一加入 `120ms` 颜色过渡，提升交互质感；
  - 不增加额外装饰，仅在 hover/active 时做轻量状态变化，保持简约风格。
- 已完成：首页卡片基线统一：
  - `post-line` 改为纵向 `flex + gap`，标题/摘要/元信息间距由统一节奏控制；
  - 移动端新增 `390/380` 分档字号，缓解不同设备上标题与摘要的“忽大忽小”问题。
- 已完成：文章页元信息对齐重构：
  - 模板新增 `post-meta` 结构，将标签与日期/字数放入同一元信息层；
  - 桌面与移动端均改为可换行但等高对齐，数值列启用 `tabular-nums`，提升扫描一致性。

## 2026-03-02
- 已完成：收尾级全量体检（构建、链接、样式引用、页面结构）并确认 `bundle exec jekyll build` 通过。
- 已完成：本地静态链接扫描，修复唯一缺失内部链接：
  - 新增英文错误页 `en/404.md`（`/en/404.html`），避免中英切换在 404 页落空。
- 已完成：继续清理未使用样式代码（不影响现有页面展示）：
  - `styles/post.css`、`styles/post_mobile.css` 删除历史遗留且无引用的选择器（`#archives`、`.category-name`、`.line-quote`、`.text-quote`、`.hacker-*`）；
  - 规范标题选择器为 `h1..h6`（移除无效的 `h7..h10`）。
- 已完成：修复潜在分页样式缺失风险：
  - 为 `pagination.html` 对应类补齐首页桌面/移动样式（`styles/home.css`、`styles/home_mobile.css`），保证文章数超过分页阈值后样式稳定。
- 已完成：移除无效结构包装与冗余类：
  - `_layouts/page.html` 删除未使用的 `.page-shell-body` 包装；
  - `topics.md`、`en/topics.md` 删除未使用的 `.topic-index` 包装；
  - `_includes/target-nav.html` 去掉无样式用途的 `is-en` 标记类。
- 已完成：精简依赖体积与维护面：
  - 移除未使用插件 `jekyll-pdf-embed`（同步更新 `_config.yml`、`Gemfile`、`Gemfile.lock`）。
- 已完成：复检结果：
  - 内部链接缺失 `0`；
  - HTML 中未定义类仅剩 `language-plaintext`（代码高亮自动生成类，非异常）；
  - 代码仓（不含 `.git/_site/.jekyll-cache`）约 `666KB`，样式总量约 `29KB`。
- 已完成：更新 `README.md`（部署与统计章节）并补充 Umami 自检流程：
  - 明确 `vercel.json` 的 `/stats/*` 第一方代理链路；
  - 同步当前 Umami 配置示例（`website_id/do_not_track/enable_in_dev`）；
  - 增加“生产构建 + 线上 Network”两步校验方法。
- 已完成：执行 Umami 生产注入核验：
  - `JEKYLL_ENV=production bundle exec jekyll build` 后，首页/文章页中均已出现 `/stats/script.js`、`data-website-id`、`data-host-url`。
