# PI Dev - Jasa Website UMKM & Personal Bogor

Landing page untuk jasa pembuatan website profesional di Bogor.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5
- **UI Components:** [Svelte](https://svelte.dev/) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3
- **Deployment:** [Netlify](https://netlify.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
pidev2/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── content/
│   │   ├── site.ts          # All website content
│   │   └── wa.ts            # WhatsApp templates
│   ├── styles/
│   │   └── global.css       # Tailwind + custom styles
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout with SEO
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   └── sections/        # Page sections
│   └── pages/               # 6 pages
├── astro.config.mjs
├── tailwind.config.mjs
└── netlify.toml
```

## Configuration

### Environment Variables

Create `.env` file (optional):

```env
PUBLIC_SITE_URL=https://pidev.biz.id
```

### Content Editing

All website content is centralized in `src/content/site.ts`:

- Site configuration (name, phone, email, social media)
- Hero section
- Services (6 categories)
- Features (14 items)
- Portfolio
- Testimonials
- Pricing
- FAQ

### WhatsApp Templates

WhatsApp message templates are in `src/content/wa.ts`. Update the phone number in `src/content/site.ts`:

```typescript
export const siteConfig = {
  phone: "6281234567890", // Replace with actual number
  // ...
};
```

### Replacing Placeholder Images

See `public/images/README.md` for image guidelines.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Beranda | `/` | Homepage with all sections |
| Layanan | `/layanan` | Services detail |
| Portfolio | `/portfolio` | Project showcase |
| Harga | `/harga` | Pricing page |
| Tentang | `/tentang` | About page |
| Kontak | `/kontak` | Contact page |

## Deployment

### Netlify (Recommended)

1. Connect your Git repository to Netlify
2. Build settings are already configured in `netlify.toml`
3. Deploy automatically on push

### Manual Deploy

```bash
npm run build
# Upload ./dist folder to your hosting
```

## SEO Features

- Meta tags (title, description)
- Open Graph tags
- Twitter Card tags
- Schema.org LocalBusiness markup
- Sitemap generation
- robots.txt

## License

Private - All rights reserved
