# LACS-AstroWind 项目技术学习路线图

欢迎来到领创工作室 (LACS) 官方网站项目！本项目基于 **Astro 5.0** 构建，融合了现代前端最前沿的技术栈。为了帮助新手快速上手，我们整理了这份详尽的学习路线和方法。

---

## 🚀 阶段一：核心基础 (必须掌握)

这是项目的地基，掌握这些内容后，你就能修改现有的页面和样式。

### 1. Astro 框架 (核心)
*   **官方文档：** [Astro Docs (中文)](https://docs.astro.build/zh-cn/getting-started/)
*   **核心技能：** 
    *   `.astro` 文件语法（代码围栏 vs 模板）。
    *   基于文件的路由（`src/pages`）。
    *   Astro 组件与 Layouts 的使用。
    *   静态站点生成 (SSG) 概念。
*   **学习方法：** 按照官方文档的 [入门指南](https://docs.astro.build/zh-cn/install/auto/) 动手写一个简单的 Astro 页面。

### 2. Tailwind CSS (样式)
*   **官方文档：** [Tailwind CSS Docs](https://tailwindcss.com/docs)
*   **核心技能：**
    *   原子化类名（Utility-first Classes）。
    *   响应式修饰符（`sm:`, `md:`, `lg:`）。
    *   深色模式切换（`dark:`）。
    *   `tailwind.config.js` 配置（颜色、间距、自定义主题）。
*   **学习方法：** 使用 [Tailwind Play](https://play.tailwindcss.com/) 在线练习，或参考项目中 `src/components` 下的组件代码。

### 3. TypeScript (语言)
*   **官方文档：** [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
*   **核心技能：**
    *   基本类型、接口 (Interface) 和 类型别名 (Type)。
    *   泛型 (Generics) 基础。
    *   如何在 `.astro` 代码围栏中定义变量类型。
*   **学习方法：** 关注项目中的 `src/types.d.ts` 文件，理解项目中定义的数据模型。

---

## 🎨 阶段二：内容与交互 (进阶掌握)

掌握这些内容后，你可以发布博客、添加交互组件。

### 1. 内容管理 (Content Collections & MDX)
*   **官方文档：** [Astro Content Collections](https://docs.astro.build/zh-cn/guides/content-collections/) | [MDX Guide](https://docs.astro.build/zh-cn/guides/integrations-guide/mdx/)
*   **核心技能：**
    *   使用 Markdown/MDX 编写内容。
    *   Schema 校验（Zod）。
    *   渲染内容集合数据。
*   **学习方法：** 观察 `src/content` 目录下的文件夹结构，尝试添加一篇新的博客文章。

### 2. React 集成 (交互)
*   **官方文档：** [React Docs](https://react.dev/) | [Astro React 集成](https://docs.astro.build/zh-cn/guides/integrations-guide/react/)
*   **核心技能：**
    *   React 组件基础、Hooks (`useState`, `useEffect`)。
    *   **客户端指令 (Client Directives)：** 理解 `client:load`, `client:visible`, `client:only` 的区别。
*   **学习方法：** 查阅 `src/components` 中后缀为 `.tsx` 的文件。

---

## ✨ 阶段三：高级动效与图形 (专家之路)

本项目使用了大量高级动画和图形技术，如果你想负责视觉特效，需要深入这些领域。

### 1. 动画引擎 (GSAP & Framer Motion)
*   **官方文档：** [GSAP Docs](https://gsap.com/docs/v3/) | [Framer Motion Docs](https://www.framer.com/motion/)
*   **核心技能：**
    *   **GSAP：** 时间轴 (Timelines)、滚动触发 (ScrollTrigger)。
    *   **Framer Motion：** 简单入场动画、布局过渡 (Layout Animations)。
*   **学习方法：** 搜索代码中 `gsap` 和 `framer-motion` 的使用实例，特别是 `src/components` 下的装饰性组件。

### 2. 2D/3D 图形 (Three.js & Konva)
*   **官方文档：** [Three.js Docs](https://threejs.org/docs/) | [Konva Docs](https://konvajs.org/docs/react/index.html)
*   **核心技能：**
    *   **Three.js：** 场景 (Scene)、相机 (Camera)、渲染器 (Renderer)、几何体 (Mesh)。
    *   **Konva：** 基于 Canvas 的 2D 图形操作。
*   **学习方法：** 这些库的学习曲线较陡，建议先了解基础 API，再查看本项目中相关的视觉背景或交互画布实现。

---

## 🛠️ 阶段四：项目配置与部署

### 1. 环境变量与配置
*   **文件：** `src/config.yaml`, `.env.example`
*   **技能：** 了解如何通过 YAML 配置文件驱动 UI 展示。

### 2. 部署 (Vercel)
*   **官方文档：** [Vercel Docs](https://vercel.com/docs)
*   **技能：** 了解适配器 `@astrojs/vercel` 的配置。

---

## 📈 学习路线建议 (Roadmap)

1.  **第 1-2 天：** 熟悉 Astro 基本语法和 Tailwind CSS。尝试修改 `src/config.yaml` 中的文案并运行 `npm run dev` 查看效果。
2.  **第 3-5 天：** 深入了解内容集合。尝试克隆一个 `src/pages` 下的页面，并尝试使用 Tailwind 重新排版。
3.  **第 6-10 天：** 学习 React 组件在 Astro 中的使用。掌握 `client:*` 指令的触发时机。
4.  **后续：** 根据兴趣选择进阶动画 (GSAP) 或图形学 (Three.js)。

---

## 🔗 官方资源速查表

| 技术 | 官方文档链接 | 推荐程度 |
| :--- | :--- | :--- |
| **Astro** | [docs.astro.build](https://docs.astro.build/) | ⭐⭐⭐⭐⭐ |
| **Tailwind CSS** | [tailwindcss.com](https://tailwindcss.com/docs) | ⭐⭐⭐⭐⭐ |
| **TypeScript** | [typescriptlang.org](https://www.typescriptlang.org/) | ⭐⭐⭐⭐⭐ |
| **React** | [react.dev](https://react.dev/) | ⭐⭐⭐⭐ |
| **GSAP** | [gsap.com](https://gsap.com/docs/v3/) | ⭐⭐⭐ |
| **Three.js** | [threejs.org](https://threejs.org/) | ⭐⭐ |
| **Framer Motion**| [framer.com/motion](https://www.framer.com/motion/) | ⭐⭐⭐ |

希望这份路线图能帮助你快速成为 LACS 项目的贡献者！如有疑问，请查阅 `docs/DESIGN_GUIDELINES.md` 或直接询问资深开发者。
