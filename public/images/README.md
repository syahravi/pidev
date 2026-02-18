# Image Guidelines for PI Dev Website

## Placeholder Images
Currently using placehold.co for development. Replace with actual images before production.

## Required Images

### 1. OG Image (Social Sharing)
- **File:** `og-image.png` (place in `/public/`)
- **Size:** 1200x630px
- **Format:** PNG or JPG
- **Usage:** Preview image when sharing on social media

### 2. Hero Image
- **Size:** 600x400px minimum
- **Format:** WebP preferred, PNG/JPG fallback
- **Content:** Illustration of website/business growth

### 3. Service Images (6 images)
- **Size:** 400x300px
- **Format:** WebP preferred
- **Files needed:**
  - UMKM/Bisnis
  - Personal/Profesional
  - Landing Page
  - Restoran/Kuliner
  - Bio Link
  - Mahasiswa

### 4. Portfolio Images (6 images)
- **Size:** 600x400px
- **Format:** WebP preferred
- **Content:** Screenshots of actual website projects

### 5. Testimonial Avatars (3 images)
- **Size:** 100x100px
- **Format:** WebP or JPG
- **Content:** Client photos (with permission)

## How to Replace Placeholder Images

1. Open `src/content/site.ts`
2. Find the section you want to update (hero, services, portfolio, testimonials)
3. Replace the `https://placehold.co/...` URL with your image path:
   - For images in `/public/images/`: use `/images/your-image.webp`
   - For external images: use the full URL

### Example:
```typescript
// Before
image: "https://placehold.co/600x400/2563EB/white?text=Hero+Image"

// After (local image)
image: "/images/hero-image.webp"
```

## Image Optimization Tips

1. Use WebP format for best compression
2. Compress images using tools like:
   - [Squoosh](https://squoosh.app/)
   - [TinyPNG](https://tinypng.com/)
3. Keep file sizes under 200KB each
4. Use descriptive filenames (e.g., `toko-kue-website.webp`)
5. Always include alt text for accessibility
