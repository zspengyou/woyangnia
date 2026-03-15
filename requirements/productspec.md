# 📋 产品规格说明书 Product Spec: woyangnia.com
*Love Page SaaS Platform — v1.0*

---

## 🏗️ Tech Stack


* Frontend:  Next.js 14 (App Router) 
* Backend / DB:  Supabase (Postgres + Storage + Auth) 
* Styling:  Tailwind CSS, mobile-first 
* Image Handling:  Client-side compression (browser-image-compression) 
* Hosting:  Vercel (wildcard subdomain support) 

---

## 🌐 Routing Architecture
* `woyangnia.com`: Marketing site (Home, Demo, Pricing, Trial, Contact) 
* `woyangnia.com/preview/[subdomain]`: Private trial preview (owner only, not indexed) 
* `woyangnia.com/edit/[subdomain]`: Owner edit page (requires login) 
* `[subdomain].woyangnia.com`: Live public love page 
* `*.woyangnia.com`: Wildcard DNS → Vercel 

### Reserved Subdomains (blocked from registration)

`www` · `api` · `admin` · `demo` · `preview` · `pricing` · `edit` · `login` · `signup` · `contact` · `home` · `app` · `mail` · `ftp` · `blog` · `help` · `support` · `static` · `assets`

---

## 🧭 Navigation

| Chinese | English | Route |
|---------|---------|-------|
| 首页 | Home | `/` |
| 演示 | Demo | `/demo` |
| 价格 | Pricing | `/pricing` |
| 免费试用 | Free Trial | `/trial` |
| 联系我们 | Contact | `/contact` |

---

## 🏠 Home Page

**Hero Tagline:**

> 🇨🇳 *"送给 TA 一个专属的爱情世界"*
> 🇬🇧 *"Give them a world that's entirely yours"*

**Page Sections:**

1. **Hero** — Tagline + CTA button "立即创建 / Create Now" → `/trial`
2. **How It Works** — 3 steps: 创建 Create → 支付 Pay → 分享 Share
3. **Feature Highlights** — Themes, music, photos, anniversary counter
4. **Pricing Summary** — 3 cards with CTA buttons
5. **Footer** — Copyright, WeChat contact, nav links

---

## 💰 Pricing

| Plan | Price | Label |
|------|-------|-------|
| 1个月 / 1 Month | ¥99 | |
| 1年 / 1 Year | ¥520 | ⭐ 推荐 Recommended |
| 5年 / 5 Years | ¥1314 | 一生一世 Forever |

- All plans include: unlimited photos, all themes, NetEase music, full editing rights
- **Payment method:** Static WeChat Pay QR code displayed on Pricing and Trial pages

---

## 🎁 Free Trial Flow (`/trial`)

### Step 1 — Subdomain Availability Check
- Input field: desired subdomain
- Validation: letters, numbers, hyphens only · 3–20 characters · no leading/trailing hyphens
- "检查可用性 / Check Availability" button
- Queries Supabase `sites` table in real time
- Shows ✅ Available or ❌ Already taken

### Step 2 — Fill In Details (if available)
- 📧 Email *(used to auto-create account)*
- 🔑 Password *(account creation)*
- 💑 Couple names (Name 1 + Name 2)
- 📅 Anniversary date
- 🎨 Theme: Romantic (roses & candles) — *more themes planned for future*
- 🎵 NetEase Music link
- 🖼️ Photo upload (unlimited; compressed client-side before upload)

### Step 3 — Submit
- Account auto-created in Supabase Auth (email + password)
- Record saved in `sites` table with `status: trial`
- Photos compressed → uploaded to Supabase Storage at `site-photos/[subdomain]/`
- User redirected to `/preview/[subdomain]`

### Step 4 — Preview Page (`/preview/[subdomain]`)
- Full love page rendered (identical to live version)
- Banner: *"这是您的预览页面 — 付款后即可发布 / This is your preview — publish after payment"*
- Static **WeChat Pay QR code** displayed
- **"发布我的爱情页面 / Publish My Love Page"** button
- On click: `status` → `pending`, page goes **immediately live** at `[subdomain].woyangnia.com`
- Owner manually verifies payment later via Supabase dashboard

---

## 💑 Love Page (`[subdomain].woyangnia.com`)

### v1 Content
- Full-screen photo slideshow / gallery
- Couple names displayed with romantic typography
- Anniversary date + live days-together counter
- Theme: Romantic (roses, candles, floating petal animations)
- Background music from NetEase link (autoplay with on/off toggle)

### Expired Site Behaviour
1. Show romantic interstitial page: *"这段爱情故事暂时暂停了... / This love story has paused for now..."*
2. Renewal CTA button → `/pricing`
3. Auto-redirect to `/pricing` after 5 seconds

### Future Features *(out of scope for v1)*
- 💌 Love letter / personal message field
- ⏳ Countdown timer to next anniversary
- 👁️ Visitor counter ("❤️ 被 128 人看见过")
- 🗓️ Relationship milestones timeline

---

## ✏️ Edit Page (`/edit/[subdomain]`)

- Requires login (email + password via Supabase Auth)
- Only the account that owns the subdomain may access
- Editable fields: photos, couple names, anniversary date, theme, music link
- Non-editable: subdomain (permanent after creation)
- Changes saved instantly to Supabase

---

## 🎭 Demo Page (`/demo`)

- **Fictional couple:** 陈志远 & 林晓雨 (Chen Zhiyuan & Lin Xiaoyu)
- **Anniversary:** 2021-07-14
- Royalty-free placeholder romantic photos
- Full love page experience rendered inline
- Sticky CTA banner: *"创建你们的专属页面 / Create yours now"* → `/trial`

---

## 📞 Contact Page (`/contact`)

- WeChat ID displayed with scannable QR code image
- Contact form fields: Name · Email · Message
- Form submission → email notification use Resend
- Note: *"通常24小时内回复 / Usually replies within 24 hours"*

---

## 🗄️ Supabase Schema

### `sites` table

| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | Primary key |
| `subdomain` | text | Unique, lowercase |
| `user_id` | uuid | FK → `auth.users` |
| `status` | enum | `trial` · `pending` · `active` · `expired` |
| `couple_name_1` | text | |
| `couple_name_2` | text | |
| `anniversary_date` | date | |
| `theme` | text | Default: `romantic` |
| `music_url` | text | NetEase Music link |
| `plan` | text | `1month` · `1year` · `5year` · `null` (trial) |
| `expires_at` | timestamptz | `null` = trial (no expiry) |
| `created_at` | timestamptz | Auto-set |
| `published_at` | timestamptz | Set when Publish clicked |

### `photos` table

| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | Primary key |
| `site_id` | uuid | FK → `sites.id` |
| `storage_path` | text | Full path in Supabase Storage |
| `order` | int | Display order in slideshow |
| `created_at` | timestamptz | Auto-set |

### Supabase Storage

- **Bucket:** `site-photos`
- **Path pattern:** `site-photos/[subdomain]/[filename]`
- **Permissions:** Public read · Authenticated write

### Supabase Auth

- **Provider:** Email + Password
- **Constraint:** One account → one site (enforced via unique `user_id` in `sites` table)

---

## 🔒 Security & Validation Rules

- Subdomain: 3–20 chars, `[a-z0-9-]` only, no leading/trailing hyphens
- Reserved subdomain list enforced at both client (instant feedback) and server (API guard)
- `/preview/[subdomain]` — accessible to logged-in owner only
- `/edit/[subdomain]` — accessible to logged-in owner only
- RLS (Row Level Security) enabled on all Supabase tables
- Photos served via Supabase CDN (public bucket, collision-resistant filenames)

---

## 📱 Design Principles

- **Mobile-first** throughout — primary sharing context is WeChat on mobile
- **Chinese primary, English secondary** on all UI strings
- **Aesthetic:** Deep reds · Soft pinks · Gold accents · Floating petal animations
- **Typography:** Noto Serif SC for Chinese, elegant serif for English
- Smooth page transitions, fade-in animations on love pages

---

## 🚫 Out of Scope for v1

- Multiple subdomains per account
- WeChat OAuth login
- Automated payment verification
- Love letter, countdown timer, visitor counter, milestones timeline
- Additional themes beyond Romantic
- Admin dashboard (Supabase dashboard used directly)
- SMS / phone number login