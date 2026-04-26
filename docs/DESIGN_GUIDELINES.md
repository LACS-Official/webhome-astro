# 领创工作室 (LACS) 设计规范指南

为了在项目中保持视觉的高级感和一致性，并对齐一线科技公司（如 Apple、Vercel 等）的现代极简设计风尚，我们在未来的 UI 设计中应严格遵循以下原则。

## 1. 核心设计哲学

- **极简主义（Minimalism）**：如无必要，勿增实体。去掉不必要的边框、圆角多层嵌套、阴影和花里胡哨的背景元素。
- **高对比与单色（High Contrast & Monochromatic）**：尽量让内容本身成为视觉焦点。使用极其纯粹的颜色代替渐变色，尤其是背景区域。
- **排版为王（Typography First）**：优秀的排版比复杂的图形更能传递高级感。注重字号对比、行间距（Line-height）以及字距缩进（Tracking/Letter-spacing）。

## 2. 颜色方案 (Color Palette)

- **拒绝大面积渐变色**：在背景和主要文字内容上，严禁使用复杂的 CSS 渐变色（`bg-gradient-to-*`, `bg-clip-text`）。
- **纯粹的背景**：
  - **Light Mode（白天模式）**：统一使用极其干净的纯白（`#FFFFFF`）或极浅的冷灰色（`#F8FAFC`）。
  - **Dark Mode（夜间模式）**：统一使用极尽深邃的纯黑（`#000000`）或近乎黑的深灰色（如 `#0A0A0A`）。避免使用发蓝或发紫的过渡深色（如 Tailwind 的默认 `slate-950` 如果饱和度过高，需调整或直接用纯黑底色）。
- **强调色（Accent Colors）**：少量、克制地使用单色。在主控按钮、特殊高亮文本或图标内使用实体强调色（如纯蓝色、纯紫色等），不可使其泛滥。

## 3. 背景与环境 (Backgrounds & Environment)

- **移除“光污染”**：禁止使用高模糊值的大面积发光“光斑”或霓虹光效饰边（除非在需要渲染特殊气氛的局部插画区域）。
- **呼吸感（Negative Space / Whitespace）**：在移动端不需要用卡片容器强行包裹内容，让文字和按钮自由地在背景原色中呼吸。在宽屏或桌面端可酌情使用带轻微磨砂感（`backdrop-blur`）的极淡色卡片或细实线边框用于区分层级。

## 4. 排版规范 (Typography)

- **字体颜色**：
  - 主要标题：白天使用纯黑 `text-slate-900`（或 `#111`），夜间使用纯白 `text-white`。
  - 次要内容（副标题/正文）：使用克制的灰 `text-slate-500` 或 `dark:text-slate-400`。
- **字体样式**：
  - 大标题需使用粗体（`font-bold` 或 `font-black`），同时**收紧字距**（`tracking-tight` 或 `tracking-tighter`）。
  - 合适的行高：副标题需采用较大的行高（如 `leading-relaxed` 或 1.6+），大标题采用紧凑的行高（如 `leading-[1.1]`）。

## 5. 组件规范 (Components)

- **按钮 (Buttons)**：
  - **Primary (主要按钮)**：使用纯实色背景与高对比度文字（如 白底黑字 或 黑底白字）。摒弃发光的 `box-shadow`，仅保留极细微的容器阴影（`shadow-sm`）即可。
  - **Secondary (次要按钮)**：使用极简的浅灰色底（`bg-slate-100` / `dark:bg-slate-800`）或仅仅采用一层半透明磨砂边框（特别是在有深色/视频背景时）。
- **微交互 (Micro-interactions)**：
  - 悬停：禁止过度动画，推荐简单的缩放反馈，如 `hover:scale-[1.02] active:scale-95`。
  - 过渡：设置平滑但干脆的持续时间 `transition-all duration-300` 或 `duration-200`。
- **卡片 (Cards)**：
  - 减少高强度的玻璃态积木拼接（Heavy Glassmorphism）。如果必须使用卡片，采用细实干练的边框（如 `border border-slate-200 dark:border-white/10`），不填充背景色或填充极低透明度的背景色，使之融入大环境。

---

> “好设计不应该喧宾夺主。” —— 请在所有后续的前端开发与重构中，以提升纯净度、专业感和性能为第一导向，严格贯彻本指南。
