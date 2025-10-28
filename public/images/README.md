# Lewis Estate - Images Directory

This directory contains all images for the Lewis Estate website.

## Folder Structure

```
public/images/
├── hero/                 # Hero section backgrounds
├── wine-bottles/         # Wine bottle images
├── culinary/            # Culinary experience images
├── salon-prive/         # Salon Privé section images
├── wine-tasting/        # Wine tasting experience images
├── backgrounds/         # General background images
└── README.md           # This file
```

## Image Guidelines

### File Formats
- **Primary**: WebP (best compression)
- **Fallback**: JPG for photos, PNG for graphics with transparency
- **Avoid**: Large PNG files, uncompressed images

### Dimensions
- **Hero backgrounds**: 1920x1080px minimum
- **Wine bottles**: 400x1000px (portrait)
- **Section images**: 800x600px minimum
- **Thumbnails**: 300x200px

### Optimization
- Compress images before adding
- Use descriptive filenames (e.g., `hero-luxury-wine-tasting.jpg`)
- Include alt text for accessibility

### Naming Convention
```
[section]-[description]-[variant].[ext]

Examples:
- hero-luxury-wine-tasting.jpg
- wine-bottle-chardonnay-gold.jpg
- culinary-plated-dish-artistic.jpg
- salon-prive-couple-intimate.jpg
```

## Current Placeholders

The website currently uses Unsplash placeholder images. Replace these with actual Lewis Estate images:

1. **Hero Section**: Group in luxury wine setting
2. **Wine Bottles**: Lewis Cellars branded bottles
3. **Salon Privé**: Intimate couple setting
4. **Culinary**: MICHELIN-starred dishes and dining room
5. **Wine Tasting**: Couple enjoying wine experience

## Next.js Image Component Usage

```tsx
import Image from 'next/image'

// For full-width backgrounds
<Image
  src="/images/hero/luxury-wine-tasting.jpg"
  alt="Luxury wine tasting experience"
  fill
  className="object-cover"
  priority
/>

// For specific dimensions
<Image
  src="/images/wine-bottles/chardonnay.jpg"
  alt="Lewis Cellars Chardonnay"
  width={400}
  height={1000}
  className="object-contain"
/>
```

## Performance Tips

- Use `priority` prop for above-the-fold images
- Use `loading="lazy"` for below-the-fold images
- Optimize images with tools like:
  - [Squoosh](https://squoosh.app/) (Google)
  - [TinyPNG](https://tinypng.com/)
  - [ImageOptim](https://imageoptim.com/) (Mac)

## Adding New Images

1. Place image in appropriate subfolder
2. Use descriptive filename
3. Optimize for web (compress)
4. Update component to use local image
5. Test on different screen sizes
