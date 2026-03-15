# Homepage Design Spec — woyangnia.com

## Visual Direction: Warm & Personal

**Core principle:** The homepage should feel like a friend telling you about a sweet gift idea, not a formal product landing page. Conversational Chinese copy, warm light tones, rounded shapes.

### Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Background primary | `#faf7f5` | Main page background — warm off-white |
| Background alt | `#f5f0ed` | Alternating section backgrounds |
| Text primary | `#2d2424` | Headings, body text |
| Text secondary | `#a09090` | Descriptions, helper text |
| Accent | `#e06060` | CTA buttons, prices, highlights |
| Card bg | `#fff` / `white` | Pricing cards, content cards |
| Preview card | `#2d1a1e` → `#3a2028` | Dark gradient for love page preview |

### Typography

- **Font:** Noto Sans SC (Google Fonts) for Chinese, Figtree for Latin — loaded via `next/font/google`
- **Style:** Modern sans-serif, playful weights (400/500/700)
- **Chinese-forward:** Primary copy in Chinese, English used sparingly
- **Tone:** Conversational — "超简单，三步就好" not "HOW IT WORKS"

### Layout

Mobile-first single column, 375px base width. No ornamental dividers — sections separated by background color alternation.

Border radius: 12px for cards/buttons (soft, friendly).

## Page Sections

### 1. Navigation
- Brand name in Chinese: "我养你呀 💕"
- Minimal nav links: 演示, 价格
- Hamburger on smaller screens

### 2. Hero
- Warm, casual greeting: "给你的另一半一个惊喜 ✨"
- Main tagline: "送给 TA 一个专属的 **爱情小窝**" (爱情小窝 in accent red)
- Subtitle: "一个只属于你们两个人的网页 / 记录照片、纪念日、还有你们的歌"
- CTA button: "免费试试看" (rounded, accent red) + helper text "不需要下载 App"

### 3. Love Page Preview Card
- Dark rounded card showing a mock love page
- Music player indicator, couple names, days counter, photo thumbnails
- Label: "↑ 你的页面大概长这样"
- Purpose: Show the product visually before explaining it

### 4. How It Works
- Title: "超简单，三步就好"
- Numbered steps with red number badges:
  1. "写上你们的故事" — 名字、纪念日、照片、一首歌
  2. "微信扫码付款" — 最低 ¥99 / 月
  3. "把链接发给 TA 💌" — ta.woyangnia.com 专属域名
- Alt background (`#f5f0ed`)

### 5. Features
- Title: "你的页面会有"
- List layout (not grid), each item in a rounded card:
  - 📸 照片轮播 — 不限数量，自动压缩
  - 🎵 背景音乐 — 支持网易云音乐链接
  - 💑 在一起 XX 天 — 实时计数，每天都在涨
  - 🌹 浪漫主题 — 玫瑰花瓣飘落动画

### 6. Pricing
- Title: "多少钱？" + subtitle "可以先免费试用，满意再付"
- 3 horizontal cards:
  - 1个月 ¥99
  - 1年 ¥520 (推荐 ⭐, border highlight, "520 = 我爱你")
  - 5年 ¥1314 ("1314 = 一生一世")
- Alt background

### 7. Bottom CTA
- "准备好了吗？" + "免费创建，看看效果"
- Button: "开始创建 →"

### 8. Footer
- Nav links: 演示 · 价格 · 联系我们
- Copyright + WeChat ID

## Technical Notes

- Built with Next.js App Router (existing project setup)
- Tailwind CSS v4 for styling
- Noto Sans SC from Google Fonts for Chinese (replacing system PingFang for consistency across devices)
- Components in `apps/web/app/` and `apps/web/components/`
- All CTA buttons link to `/trial`
- Mobile-first responsive — looks great on 375px, scales up gracefully
- No dark mode for homepage (the love page itself is dark, but the marketing site stays warm/light)
