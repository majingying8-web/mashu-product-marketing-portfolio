# 项目交接

## 1. 项目目标与技术栈

麻静莹的产品营销作品集单页，展示消费者洞察、价值定义、海外 GTM、新品上市、整合传播与经营判断。技术栈：React 19、TypeScript、Vinext/Vite、Tailwind CSS 4，并使用 Cloudflare Vite 与 OpenAI Sites 配置。

## 2. 当前页面和启动命令

- 本地页面：`http://localhost:3000/`
- 页面顺序：首页 Hero → 方法论 → 四个案例 → 更多实践 → 关于与联系
- 主要锚点：`#top`、`#method`、`#work`、`#seedpace`、`#w20`、`#clock`、`#w3`、`#more`、`#about`
- 启动开发服务器：`npm run dev`
- 构建：`npm run build`
- 代码检查：`npm run lint`
- 测试：`npm run test`

## 3. 已完成的主要修改

- 完成 Hero、方法论、案例目录、Seedpace、W20、AI 闹钟、W3、更多实践、关于与联系页面的当前版本。
- 案例目录移除箭头路径说明，“查看案例”改为胶囊按钮样式。
- Seedpace 接入最新红人素材；删除“中国 · 跨市场适配”小标签；项目结果独立为白色模块，并拆分市场触点、潜在渠道线索、首次提货三项。
- W20 项目结果为“上市首日销售额超 1000 万”“累计销售额达亿元级”；详情页四张长图改为固定四列、各自上下滚动，不提供左右滚动。
- AI 闹钟已按“事实 → 解读 → 行动”组织；核心判断为“利润被高退货吃掉，单台贡献由正转亏”；行动结尾使用已确认的收束文案。
- W3 技术翻译内容按 AG、AR、AF 表格更新；移除英文小标签、数字编号与“产品语言”字样；微博 KOL 固定两张图并取消横向滚动；TVC/KOL 内容层级已简化。
- W20、W3、Seedpace 统一使用“项目结果”模块与案例结尾价值收束句。
- 四支 TVC 使用 `AutoplayVideo`：进入视口约 45% 时自动播放，离开视口暂停，并保留原生控制与字幕轨道。
- Hero 人物已替换为 `mashu-portrait-hero.png`；联系面板已接入现有微信二维码 `wechat-qr.jpg`。
- 菜单 aria-label 按展开状态更新；案例通过 ID 获取数据；滚动激活逻辑使用 requestAnimationFrame；图片均补充尺寸信息。
- 最新一次 `npm run lint` 与 `npm run build` 已通过。

## 4. 尚未完成的问题

- 用户最新提供的二维码 `d36ac5f3d7f11718c19f8c4ef1717ad8.jpg` 尚未替换进项目；“回复时间”字段也尚未按最新要求删除（因交接请求要求只更新本文件）。
- 尚未完成全站桌面与移动端的最终视觉巡检，重点是四个案例长图、视频比例、章节间距、断行与滚动提示。
- `npm run test` 尚未在本轮最终状态执行。
- 仍需确认所有视频字幕、简历下载、微信二维码和锚点在目标浏览器中的实际表现。

## 5. 重要设计规则和用户偏好

- 视觉要简洁、克制、有编辑感；白底为主，品牌蓝与暖橙只做强调，渐变和玻璃感适度使用。
- 减少无意义的小标签、胶囊、卡片和横线；标题要有尺度、呼吸感，避免一句话被挤成过多行。
- 案例内容只使用已确认事实、数据和素材，不新增或夸大成果；项目结果要有清晰语境，且使用统一版式。
- 纵向长图使用固定视口和“↓ 向下滑动查看”；只有确有多张横向素材时才使用“↔ 左右滑动查看”。W3 微博 KOL 只有两张图，不滚动。
- TVC 不增加解释性注释，进入视口自动播放；视频仍保留原生控制和字幕轨道。
- 保留工作树中已有改动，不使用 reset、checkout 或其他覆盖/回滚操作。

## 6. 关键文件路径

- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/app/page.tsx`：页面结构、文案、案例数据与交互
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/app/story-flow.css`：案例故事流、素材组件与响应式样式
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/app/globals.css`：全局变量与基础样式
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/app/layout.tsx`：页面布局与元信息
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/public/seedpace-assets/`：Seedpace、Amazon、A+、独立站、CES 与红人素材
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/public/w20-assets/`、`/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/public/w3-assets/`：W20、W3 素材
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/public/captions/`：视频字幕文件
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/public/wechat-qr.jpg`：当前联系面板二维码
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/package.json`：脚本与依赖
- `/Users/mashu/Documents/Codex/2026-08-21/new-chat/portfolio-site/.openai/hosting.json`：Sites 配置

## 7. 当前 Git 状态及不能回滚的改动

- HEAD：`69ddc33`（`Shorten portfolio narrative and clarify Seedpace expansion`）。
- 已修改：`app/globals.css`、`app/page.tsx`、`app/story-flow.css`。
- 未跟踪：`HANDOFF.md`、`public/captions/`、三张人物图、Seedpace 新红人素材、`public/wechat-qr.jpg`、`tsconfig.tsbuildinfo`、中文规格说明文件。
- 当前工作树是有意保留的进行中状态；代码、样式、文案、素材和二维码接入均属于不能擅自回滚的已有改动。

## 8. 下一步建议

1. 按用户最新要求替换二维码，并删除联系面板中的“回复时间”。
2. 执行 `npm run test`，记录最终结果。
3. 在 1440、1280、768、390 宽度检查首页、四个案例、更多实践和联系区域。
4. 重点检查视频自动播放策略、长图滚动容器、移动端断行与结果模块的留白。
5. 最终确认线上发布权限与素材公开范围后再部署。
