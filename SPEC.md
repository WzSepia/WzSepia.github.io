# 一站式门户集合平台 - 设计规范

## 1. Concept & Vision

一个现代化的导航门户网站，将常用网站入口以卡片形式优雅呈现。设计灵感来自高端杂志的网格布局，结合玻璃拟态效果，营造出通透、轻盈的视觉体验。整体感觉应该像一个精心策划的"数字收藏夹"，每张卡片都是一件值得展示的艺术品。

## 2. Design Language

### Aesthetic Direction
- **风格**: 玻璃拟态(Glassmorphism) + 柔和渐变背景
- **参考**: Apple Vision Pro 界面风格，融合极简杂志排版

### Color Palette
- **Primary**: `#6366f1` (靛蓝紫)
- **Secondary**: `#8b5cf6` (紫罗兰)
- **Accent**: `#f472b6` (玫瑰粉)
- **Background Gradient**: `linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)`
- **Glass Background**: `rgba(255, 255, 255, 0.08)`
- **Glass Border**: `rgba(255, 255, 255, 0.18)`
- **Text Primary**: `#f8fafc`
- **Text Secondary**: `rgba(255, 255, 255, 0.7)`

### Typography
- **Heading**: "Noto Sans SC", system-ui, sans-serif - 700 weight
- **Body**: "Noto Sans SC", system-ui, sans-serif - 400/500 weight
- **Scale**: 48px (Logo) → 24px (Section Title) → 16px (Card Title) → 14px (Description)

### Spatial System
- **Container Max Width**: 1400px
- **Card Grid Gap**: 28px
- **Card Padding**: 0 (image) + 20px (content area)
- **Border Radius**: 20px (card), 12px (image)

### Motion Philosophy
- **Entrance**: 卡片依次淡入上浮，stagger 80ms，duration 600ms
- **Hover**: 卡片上浮 8px + 阴影增强，scale 1.02，300ms ease-out
- **Image Hover**: scale 1.08，400ms ease-out
- **Focus**: 外发光边框，box-shadow glow

### Visual Assets
- **Icons**: Lucide Icons (通过 CDN)
- **Images**: 门户网站的截图/预览图，使用 screenshot.gsite 截图服务
- **Decorative**: 背景动态渐变光斑，浮动粒子效果

## 3. Layout & Structure

### Page Structure
```
┌─────────────────────────────────────────────────────────┐
│  Header: Logo + 标题 + 搜索栏                            │
├─────────────────────────────────────────────────────────┤
│  Category Tabs: 全部 | 社交媒体 | 工作效率 | 开发工具...  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │  Card   │  │  Card   │  │  Card   │  │  Card   │    │
│  │ Preview │  │ Preview │  │ Preview │  │ Preview │    │
│  │─────────│  │─────────│  │─────────│  │─────────│    │
│  │  Title  │  │  Title  │  │  Title  │  │  Title  │    │
│  │   Desc  │  │   Desc  │  │   Desc  │  │   Desc  │    │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │  Card   │  │  Card   │  │  Card   │  │  Card   │    │
│  ...                                                   │
├─────────────────────────────────────────────────────────┤
│  Footer: 版权信息                                       │
└─────────────────────────────────────────────────────────┘
```

### Responsive Strategy
- **Desktop (>1200px)**: 4列网格
- **Tablet (768-1200px)**: 3列网格
- **Mobile (<768px)**: 2列网格，分类标签横向滚动

## 4. Features & Interactions

### Core Features
1. **门户卡片展示**: 展示网站名称、预览图、简短描述
2. **分类筛选**: 通过标签筛选不同类别的网站
3. **搜索功能**: 实时搜索匹配的网站
4. **新窗口打开**: 点击卡片在新窗口打开目标网站

### Interaction Details
- **卡片点击**: cursor:pointer → 新窗口打开链接
- **卡片悬停**: 浮起效果 + 图片放大 + 标题颜色变化
- **Tab 切换**: 下划线滑动动画，内容区淡入切换
- **搜索输入**: 实时过滤，输入框带清除按钮
- **空状态**: 无匹配结果时显示友好提示

### Edge Cases
- 搜索无结果: 显示"未找到匹配的网站"提示
- 图片加载失败: 显示渐变占位背景 + 网站首字母

## 5. Component Inventory

### Card Component
- **Default**: 玻璃背景，白色边框，阴影
- **Hover**: 上浮8px，阴影加深，边框高亮
- **Active**: scale(0.98)
- **Focus**: 外发光紫色边框

### Tab Component
- **Default**: 透明背景，灰色文字
- **Hover**: 文字变亮
- **Active**: 白色文字，底部紫色指示条

### Search Input
- **Default**: 玻璃背景，搜索图标，右边框圆角
- **Focus**: 边框高亮，背景稍亮
- **With Content**: 显示清除按钮

### Image Preview
- **Default**: 圆角裁切，object-fit: cover
- **Loading**: 骨架屏动画
- **Hover**: scale(1.08)

## 6. Technical Approach

- **纯前端实现**: HTML + CSS + Vanilla JavaScript
- **无框架依赖**: 轻量级实现
- **CSS 变量**: 统一管理主题色彩
- **ES6+**: 使用模块化组织代码
- **数据结构**: JavaScript 对象数组存储门户数据

## 7. Portal Data

预置网站列表（包含真实可用的URL）:
1. 微信 (weixin.qq.com) - 社交
2. 腾讯视频 (v.qq.com) - 影音
3. 知乎 (zhihu.com) - 社区
4. 哔哩哔哩 (bilibili.com) - 影音
5. 京东 (jd.com) - 电商
6. 淘宝 (taobao.com) - 电商
7. 掘金 (juejin.cn) - 开发
8. GitHub (github.com) - 开发
9. Gitee (gitee.com) - 开发
10. CSDN (csdn.net) - 开发
11. 百度 (baidu.com) - 搜索
12. 微博 (weibo.com) - 社交
13. 抖音 (douyin.com) - 影音
14. 飞书 (feishu.cn) - 办公
15. Notion (notion.so) - 效率
16. Figma (figma.com) - 设计
