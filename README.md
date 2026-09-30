# Zelu Co. — Website

**One-page website for Zelu Co., a boutique dessert and catering kitchen in Ankara.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-icons-F56565?logo=lucide&logoColor=white)

> Client project — designed and developed by Berke Coşkuner for **Zelu Co.**

**Live:** [zelu.co](https://zelu.co)

<p align="center">
  <img src="public/images/post_dtbi7radpas_1.jpg" alt="Zelu Co. lemon tiramisu cup — product photo used in the hero section" width="360">
</p>

---

## Overview

A Turkish-language, light and minimal single-page website for Zelu Co., which prepares desserts and snacks — lemon tiramisu, mini San Sebastian cheesecakes, brownies and cookies (including gluten-free options) — for private events, corporate meetings and businesses across Ankara. The site showcases the products with the brand's own photos, lets visitors browse the menu interactively and sends every order or quote request straight to WhatsApp or Instagram DM.

## Features

- **Header** with a glass effect on scroll, slide-in mobile drawer and a WhatsApp order button with a pre-filled message
- **Hero** section with calls to action for the menu and the contact section
- **About** section with three value cards (additive-free ingredients, gluten-free alternatives, corporate & bulk orders)
- **Services** — boutique catering & events, private chef experience, corporate meal solutions and cooking workshops, plus a "request a quote" WhatsApp banner
- **Interactive menu planner** (`InteractiveSection`) — two tabs (cakes & brownies / cookies); each item expands to show a description, ingredients, suggested drink pairing and preparation info, and an order button that opens WhatsApp with the product name filled in
- **Gallery** of product photos with a lightbox (previous / next / close, background scroll lock)
- **Reviews marquee** — infinitely scrolling customer comment cards
- **Contact** — service area, e-mail, working hours and direct WhatsApp / Instagram buttons
- **SEO** — Turkish metadata and keywords, Open Graph tags, theme colour, `robots.txt` and `sitemap.xml` via App Router metadata routes

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Fonts | `next/font` — Playfair Display, Plus Jakarta Sans |
| Linting | ESLint 9 (`eslint-config-next`) |

## Project structure

```text
zeluco/
├── public/images/            # Product photos from the brand's Instagram posts
│                             # (+ *_caption.txt files with the original post captions)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Fonts, SEO metadata, Open Graph, viewport
│   │   ├── page.tsx          # One-page layout + footer
│   │   ├── globals.css       # Tailwind v4 theme and custom utilities
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   └── components/
│       ├── Header.tsx, Hero.tsx, About.tsx, Services.tsx
│       ├── InteractiveSection.tsx   # Menu planner (tabs + WhatsApp order)
│       ├── Gallery.tsx, ReviewsMarquee.tsx
│       └── Contact.tsx
└── next.config.ts
```

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm run start
```

The `dev` and `build` scripts run with the `--webpack` flag instead of Turbopack. No environment variables are required.

## Editing content

| What | Where |
| --- | --- |
| Menu items (description, ingredients, pairing, image) | `src/components/InteractiveSection.tsx` |
| Services | `src/components/Services.tsx` |
| Gallery photos | `src/components/Gallery.tsx` |
| Service area, e-mail, working hours | `src/components/Contact.tsx` |
| WhatsApp / Instagram links | `Header.tsx`, `Services.tsx`, `InteractiveSection.tsx`, `Contact.tsx`, `src/app/page.tsx` |
| Page title, description, keywords | `src/app/layout.tsx` |

---

## Türkçe

**Ankara'da butik tatlı ve catering mutfağı Zelu Co. için tek sayfalık web sitesi.**

> Müşteri projesi — **Zelu Co.** için Berke Coşkuner tarafından tasarlandı ve geliştirildi.

**Canlı:** [zelu.co](https://zelu.co)

### Genel bakış

Özel davetler, kurumsal toplantılar ve işletmeler için Ankara genelinde limonlu tiramisu, mini San Sebastian, brownie ve cookie (glutensiz seçenekler dahil) hazırlayan Zelu Co. için açık renkli, minimal ve Türkçe tek sayfalık web sitesi. Site ürünleri markanın kendi fotoğraflarıyla sergiler, menünün etkileşimli olarak incelenmesini sağlar ve tüm sipariş ya da teklif taleplerini doğrudan WhatsApp veya Instagram DM'e yönlendirir.

### Özellikler

- Kaydırınca buzlu cam efektine geçen üst menü, yandan açılan mobil menü ve hazır mesajlı WhatsApp sipariş butonu
- Menüye ve iletişime yönlendiren **hero** bölümü
- Üç değer kartından oluşan **Hakkımızda** bölümü (katkısız malzeme, glutensiz alternatifler, kurumsal ve toplu sipariş)
- **Hizmetler** — butik catering ve davetler, kişiye özel şef deneyimi, kurumsal yemek çözümleri, yemek atölyeleri ve WhatsApp teklif çağrısı
- **Etkileşimli menü planlayıcı** — iki sekme (pastalar & brownieler / cookieler); her ürün açıldığında açıklama, malzemeler, içecek eşleşmesi ve hazırlık bilgisi gösterilir, sipariş butonu ürün adıyla WhatsApp mesajı açar
- Lightbox destekli **ürün galerisi**
- Sonsuz kayan **müşteri yorumları** şeridi
- **İletişim** — hizmet bölgesi, e-posta, çalışma saatleri, WhatsApp ve Instagram butonları
- **SEO** — Türkçe meta etiketler, Open Graph, tema rengi, `robots.txt` ve `sitemap.xml`

### Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, lucide-react, `next/font` (Playfair Display, Plus Jakarta Sans).

### Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

`dev` ve `build` komutları Turbopack yerine `--webpack` ile çalışır. Ortam değişkeni gerekmez.

### İçerik düzenleme

- Menü ürünleri → `src/components/InteractiveSection.tsx`
- Hizmetler → `src/components/Services.tsx`
- Galeri → `src/components/Gallery.tsx`
- İletişim bilgileri → `src/components/Contact.tsx`
- Sayfa başlığı ve SEO → `src/app/layout.tsx`

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
