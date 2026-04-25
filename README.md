# HyberTec Portfolio

A production-ready Next.js 15 marketing and portfolio site for HyberTec.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Syne (display) + Plus Jakarta Sans (body) via `next/font/google`
- **Deploy**: GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── app/
│   ├── (marketing)/        # Homepage, About, Services, Contact
│   ├── (portfolio)/        # Portfolio list + individual case studies
│   ├── layout.tsx          # Root layout with fonts + header/footer
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Design tokens + base styles
├── features/
│   ├── portfolio/          # Project data, types, grid + card components
│   ├── pricing/            # Pricing table component
│   └── testimonials/       # Testimonials section
├── components/
│   ├── layout/             # Header + Footer
│   └── shared/             # SectionHeader, reusable UI
└── lib/
    └── utils.ts            # cn() helper
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization Checklist

### 1. Branding
- [ ] Update brand copy, logo, and metadata as needed in the layout components

### 2. Content
- [ ] Edit `src/features/portfolio/data/projects.ts` — replace sample projects with real ones
- [ ] Update testimonials in `src/features/testimonials/components/TestimonialCard.tsx`
- [ ] Update About page copy in `src/app/(marketing)/about/page.tsx`
- [ ] Update stats on the homepage (`src/app/(marketing)/page.tsx`)

### 3. Contact Form
- The contact form in `src/app/(marketing)/contact/page.tsx` currently calls `setSubmitted(true)` as a placeholder.
- Wire it up to your preferred provider:
  - **[Resend](https://resend.com)** — recommended for transactional email
  - **[Formspree](https://formspree.io)** — no-backend option
  - Next.js Server Action + Nodemailer

### 4. Pricing
- Edit pricing plans in `src/features/pricing/components/PricingTable.tsx`

### 5. Images
- Replace Unsplash placeholder URLs in `projects.ts` with your own screenshots
- Hosted images on your preferred CDN or object storage are recommended

### 6. Footer
- Update email, social links, and year logic in `src/components/layout/Footer.tsx`

## Deployment

```bash
# Local production build
npm run build
```

The site is configured to deploy to GitHub Pages from the `main` branch through GitHub Actions.

1. Push your latest changes to `main`
2. In GitHub, open `Settings -> Pages`
3. Set `Source` to `GitHub Actions`
4. Wait for the `Deploy GitHub Pages` workflow to finish
5. Open `https://hybertecofficial.github.io/portfolio/`

Set the following environment variables in your hosting platform if using a form provider:
```
RESEND_API_KEY=your_key_here
```

## Adding New Projects

1. Open `src/features/portfolio/data/projects.ts`
2. Add a new object to the `projects` array following the `Project` type in `src/features/portfolio/types.ts`
3. The project will automatically appear in the portfolio grid and get its own case study page at `/portfolio/your-slug`

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0C0C0C` | Page background |
| `surface` | `#141414` | Cards, panels |
| `surface-2` | `#1E1E1E` | Nested surfaces |
| `border` | `#2A2A2A` | Borders, dividers |
| `cream` | `#F2EDE4` | Primary text |
| `cream-muted` | `#9E9A93` | Secondary text |
| `lime` | `#B8FF47` | Accent / CTA |
