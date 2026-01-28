# Image Requirements (Optional Enhancement)

The website is **fully functional without images**, but adding these would enhance the premium feel:

## Recommended Images (Optional)

### 1. **Hero Section Background** (Optional)
- **File**: `public/images/hero-bg.jpg` or `hero-bg.webp`
- **Size**: 1920x1080px (or larger)
- **Description**: Premium automotive background - could be:
  - Abstract car silhouette on dark background
  - Dubai skyline with automotive theme
  - Subtle luxury car detail (grille, wheel, etc.)
  - Minimalist automotive line art
- **Usage**: Background for hero section (currently uses gradient)
- **Format**: WebP or AVIF preferred for performance

### 2. **Service Icons** (Optional - Currently using emojis)
- **Files**: `public/images/services/` folder
  - `battery-service.jpg`
  - `tyre-service.jpg`
  - `ac-service.jpg`
  - `diagnostics-service.jpg`
  - `oil-service.jpg`
  - `brake-service.jpg`
  - `starter-service.jpg`
  - `overheat-service.jpg`
  - `recovery-service.jpg`
- **Size**: 400x300px each
- **Description**: Professional photos of mechanics working on each service type
- **Usage**: Replace emoji icons in service cards
- **Format**: WebP preferred

### 3. **About Page Image** (Optional)
- **File**: `public/images/about-team.jpg` or `about-mechanic.jpg`
- **Size**: 1200x800px
- **Description**: Professional mechanic or team photo
- **Usage**: About page hero section
- **Format**: WebP preferred

### 4. **Testimonial Avatars** (Optional)
- **Files**: `public/images/testimonials/` folder
  - `customer-1.jpg`
  - `customer-2.jpg`
  - `customer-3.jpg`
- **Size**: 100x100px (circular avatars)
- **Description**: Customer profile photos (or placeholder avatars)
- **Usage**: Testimonials section
- **Format**: WebP or PNG with transparency

### 5. **Logo** (Optional - Currently using emoji)
- **File**: `public/images/logo.svg` or `logo.png`
- **Size**: 200x200px (for retina) or SVG
- **Description**: Company logo
- **Usage**: Header logo (currently shows 🔧 emoji)
- **Format**: SVG preferred for scalability

### 6. **Favicon** (Recommended)
- **File**: `public/favicon.ico` or `public/icon.png`
- **Size**: 32x32px (favicon.ico) or 180x180px (icon.png)
- **Description**: Site favicon
- **Usage**: Browser tab icon
- **Format**: ICO or PNG

## Image Guidelines

### Technical Requirements:
- **Format**: WebP or AVIF for photos, SVG for logos/icons
- **Optimization**: Compress images before adding (use tools like TinyPNG, Squoosh)
- **Naming**: Use kebab-case (e.g., `hero-background.webp`)
- **Alt Text**: Always include descriptive alt text for accessibility

### Design Guidelines:
- **Style**: Premium, professional, automotive-focused
- **Colors**: Match brand palette (charcoal, amber, cyan, silver)
- **Tone**: Trustworthy, modern, luxury automotive
- **No Copyright**: Must be original or properly licensed images

## Current Status

✅ **Website works perfectly without images**
- All functionality intact
- Emojis and SVG graphics provide visual interest
- Gradient backgrounds create premium feel

## If Adding Images

1. Create `public/images/` folder
2. Add images following naming conventions above
3. Update components to use Next/Image component
4. Example usage:
   ```tsx
   import Image from "next/image";
   
   <Image
     src="/images/hero-bg.webp"
     alt="Premium car mechanic service"
     fill
     className="object-cover opacity-20"
     priority
   />
   ```

## Priority Order (if adding gradually)

1. **Favicon** (Quick win, improves branding)
2. **Logo** (Replaces emoji, professional look)
3. **Service Images** (Enhances service cards)
4. **Hero Background** (Major visual impact)
5. **About/Testimonial Images** (Nice to have)

---

**Note**: The website is production-ready without any images. These are optional enhancements for visual polish.
