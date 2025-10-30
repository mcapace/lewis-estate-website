# Lewis Cellars Website - Figma Design Fixes & Implementation Guide

## Overview
This document outlines all the fixes and improvements made to match the Figma design precisely, with focus on responsive design, image sizing, and layout accuracy.

---

## 🎯 Key Issues Fixed

### 1. **Image Sizing & Aspect Ratios**
**Problem:** Images were not maintaining proper aspect ratios and were either stretched or cut off incorrectly.

**Solution:**
- Added proper aspect ratio classes for different image types:
  - `aspect-[4/5]` for portrait wine tasting images
  - `aspect-[3/4]` for culinary images  
  - `aspect-[16/10]` for landscape interior shots
  - Custom aspect ratios for wine bottles
- Used Next.js Image component with proper `fill` prop and `object-cover`
- Added proper `sizes` attribute for responsive image loading

### 2. **Responsive Breakpoints**
**Problem:** Layout wasn't adapting properly across different screen sizes.

**Solution:**
- Implemented mobile-first responsive design
- Added proper breakpoints:
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+
- Used Tailwind's responsive modifiers (`md:`, `lg:`, `xl:`)
- Implemented fluid typography with `clamp()` CSS function

### 3. **Typography Scaling**
**Problem:** Font sizes were not matching Figma and weren't scaling properly on mobile.

**Solution:**
```css
--text-hero: clamp(2.5rem, 5vw, 4.5rem);
--text-section: clamp(2rem, 4vw, 3.75rem);
--text-body: clamp(0.938rem, 1.5vw, 1.125rem);
```
This ensures smooth scaling between mobile and desktop.

### 4. **Container Max-Width**
**Problem:** Content was too wide on large screens, not matching Figma's centered layout.

**Solution:**
- Set proper max-width: `1440px` (matches Figma artboard)
- Added responsive padding: `clamp(1.5rem, 5vw, 3rem)`
- Ensured consistent container usage across all sections

### 5. **Image Overlay Gradients**
**Problem:** Hero images were too bright, text wasn't readable.

**Solution:**
```css
background: linear-gradient(
  to bottom,
  rgba(13, 13, 13, 0.4) 0%,
  rgba(13, 13, 13, 0.5) 50%,
  rgba(13, 13, 13, 1) 100%
);
```
This creates proper contrast while maintaining image visibility.

---

## 📐 Section-by-Section Breakdown

### Hero Section
**Figma Specifications:**
- Full viewport height (`min-h-screen`)
- Large background image with gradient overlay
- Text positioned left-aligned, vertically centered
- Padding top to account for fixed header (80px)

**Implementation:**
```tsx
<section className="relative min-h-screen flex items-center pt-20">
  <div className="absolute inset-0 z-0">
    <Image src="..." fill className="object-cover" priority />
    <div className="absolute inset-0 bg-gradient-to-b from-Brand-Black/40 to-Brand-Black" />
  </div>
  <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20 pb-32">
    {/* Content */}
  </div>
</section>
```

### Quote Section
**Figma Specifications:**
- Centered text
- Large serif font (Playfair Display)
- Max-width: 1000px
- Generous padding: 96px top/bottom on desktop, 64px on mobile

**Key CSS:**
```tsx
<div className="max-w-4xl mx-auto text-center">
  <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl">
```

### Split Layout Sections (Wine Tastings, Culinary)
**Figma Specifications:**
- 50/50 split on desktop
- Stack on mobile (image first, then text)
- Images maintain proper aspect ratio
- Generous gap between columns

**Implementation:**
```tsx
<div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
  <div className="order-2 md:order-1">{/* Text */}</div>
  <div className="order-1 md:order-2">{/* Image */}</div>
</div>
```

### Wine Bottles Section
**Figma Specifications:**
- 3 bottles centered
- Equal spacing between bottles
- Hover effect: scale up slightly
- Gold medallions below each bottle

**Implementation:**
```tsx
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
  <div className="flex flex-col items-center group">
    <div className="relative w-32 h-80 md:w-36 md:h-96 transition-transform group-hover:scale-105">
      <Image src="..." fill className="object-contain" />
    </div>
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-Brand-Gold to-yellow-600">
      <span className="text-Brand-Black font-playfair">L</span>
    </div>
  </div>
</div>
```

---

## 🎨 Color System (From Figma)

All colors are properly mapped from Figma:

```typescript
// tailwind.config.ts
colors: {
  'Brand-Black': '#0D0D0D',              // Main background
  'Brand-White': '#FFFFFF',              // Main text
  'Brand-Gold-(Drk-BG)': '#D3A737',     // Primary CTA
  'Secondary-CTA-Gold-(Drk-BG)': '#E5C1A0',  // Hover state
  'Secondary-Light-Gold-(Drk-BG)': '#EFE5DA', // Eyebrow text
  'UI-Lightest-Grey': '#F4F4F4',        // Light backgrounds
}
```

---

## 🖼️ Image Requirements & Naming

Based on the Figma design, here are the images you need:

### Hero Section
- `/images/hero/wine-tasting-group.jpg`
  - Aspect ratio: 16:9
  - Min dimensions: 1920x1080px
  - Shows: Group of people wine tasting in elegant setting

### Wine Tastings
- `/images/tastings/couple-tasting.jpg`
  - Aspect ratio: 4:5 (portrait)
  - Min dimensions: 800x1000px
  - Shows: Couple enjoying wine tasting

### Culinary
- `/images/culinary/plated-dish.jpg`
  - Aspect ratio: 4:5 (portrait)
  - Min dimensions: 800x1000px
  - Shows: Elegant plated dish

### Interior
- `/images/interior/elegant-hallway.jpg`
  - Aspect ratio: 16:10 or 21:9
  - Min dimensions: 1600x900px
  - Shows: Architectural interior with arched doorway

### Salon Privé
- `/images/salon-prive/couple-luxury.jpg`
  - Aspect ratio: 16:9
  - Min dimensions: 1920x1080px
  - Shows: Couple in luxurious wine setting

### Wine Bottles (PNG with transparency)
- `/images/wines/chardonnay.png`
  - Dimensions: 400x1200px
  - Transparent background
  - Shows: White wine bottle (light colored)

- `/images/wines/cabernet.png`
  - Dimensions: 400x1200px
  - Transparent background
  - Shows: Red wine bottle (dark)

- `/images/wines/red-blend.png`
  - Dimensions: 400x1200px
  - Transparent background
  - Shows: Red wine bottle (dark)

---

## 🔧 Implementation Steps

### Step 1: Replace Files
```bash
# In your Next.js project:
cp /path/to/new/page.tsx src/app/page.tsx
cp /path/to/new/globals.css src/app/globals.css
```

### Step 2: Verify Image Paths
Make sure all images exist in `/public/images/` with the correct structure:
```
public/
└── images/
    ├── hero/
    │   └── wine-tasting-group.jpg
    ├── tastings/
    │   └── couple-tasting.jpg
    ├── culinary/
    │   └── plated-dish.jpg
    ├── interior/
    │   └── elegant-hallway.jpg
    ├── salon-prive/
    │   └── couple-luxury.jpg
    └── wines/
        ├── chardonnay.png
        ├── cabernet.png
        └── red-blend.png
```

### Step 3: Test Responsiveness
```bash
npm run dev
```

Test on these viewport sizes:
- **Mobile:** 375px (iPhone)
- **Tablet:** 768px (iPad)
- **Desktop:** 1440px
- **Large Desktop:** 1920px

### Step 4: Verify Against Figma
Open your Figma file side-by-side with the website and check:
- [ ] Font sizes match at all breakpoints
- [ ] Image aspect ratios are correct
- [ ] Spacing/padding matches (use browser DevTools to measure)
- [ ] Colors match exactly
- [ ] Button hover states work
- [ ] Scroll animations trigger properly

---

## 📱 Responsive Design Details

### Mobile (< 768px)
- Single column layout
- Reduced font sizes
- Stacked sections
- Full-width images
- Reduced padding

### Tablet (768px - 1024px)
- Beginning of 2-column layouts
- Medium font sizes
- Increased padding
- Split-screen sections

### Desktop (> 1024px)
- Full 2-column layouts
- Maximum font sizes
- Full padding
- Larger images
- More whitespace

---

## 🎭 Animation & Interactions

All animations use Framer Motion for smooth transitions:

### Fade In Up
```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};
```

### Stagger Children
```tsx
const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};
```

### Hover Effects
- Buttons: `hover:scale-105` + color change
- Wine bottles: `group-hover:scale-105` + translateY
- Images: Slight scale on hover for interactive feel

---

## ⚡ Performance Optimizations

### Image Loading
- Hero image uses `priority` flag for immediate loading
- Other images lazy load automatically
- Proper `sizes` attribute for responsive images
- WebP format recommended for photos

### CSS
- Uses CSS custom properties for easy theming
- Minimal use of `!important`
- Mobile-first approach reduces CSS bloat
- Proper use of CSS variables for consistency

### JavaScript
- Components only use client-side rendering where needed
- Intersection Observer for scroll animations
- Debounced scroll events

---

## 🐛 Common Issues & Solutions

### Issue 1: Images Not Loading
**Symptoms:** Broken image icons or blank spaces

**Solution:**
1. Verify image paths in `/public/images/`
2. Check file names match exactly (case-sensitive)
3. Ensure Next.js is properly configured for static assets

### Issue 2: Layout Shifts on Load
**Symptoms:** Content jumps around when page loads

**Solution:**
- Already implemented with proper aspect ratios
- Use `fill` prop with parent container sizing
- Add `sizes` attribute to Image components

### Issue 3: Fonts Not Loading
**Symptoms:** Fallback fonts showing instead of Neue Haas Grotesk

**Solution:**
1. Verify font files are in `/public/Fonts/`
2. Check @font-face declarations in globals.css
3. Ensure font file paths are correct

### Issue 4: Responsive Breakpoints Not Working
**Symptoms:** Mobile layout showing on desktop or vice versa

**Solution:**
1. Clear browser cache
2. Hard refresh (Cmd/Ctrl + Shift + R)
3. Check browser DevTools responsive mode
4. Verify Tailwind config is correct

---

## 📋 Pre-Launch Checklist

### Design Match
- [ ] Hero section matches Figma exactly
- [ ] Quote section typography is correct
- [ ] Wine Tastings section layout matches
- [ ] Culinary section layout matches
- [ ] Salon Privé overlay gradient is correct
- [ ] Wine bottles are properly sized and aligned
- [ ] Footer matches Figma structure

### Responsive
- [ ] Test on iPhone (375px)
- [ ] Test on iPad (768px)
- [ ] Test on MacBook (1440px)
- [ ] Test on 4K display (2560px)
- [ ] No horizontal scroll at any size
- [ ] All text is readable on mobile

### Performance
- [ ] Lighthouse score > 90
- [ ] Images are optimized (WebP)
- [ ] All images have proper alt text
- [ ] No console errors
- [ ] Fast load time (< 3 seconds)

### Interactions
- [ ] All buttons have hover states
- [ ] Scroll animations work smoothly
- [ ] Wine bottles scale on hover
- [ ] Navigation is sticky and functional
- [ ] Footer links are clickable

### Accessibility
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] All images have alt text
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works
- [ ] Focus states are visible

---

## 🚀 Deployment Tips

### Before Deploy:
1. Run `npm run build` to check for errors
2. Test the production build locally: `npm run start`
3. Verify all images are committed to git
4. Check all environment variables are set

### After Deploy:
1. Test on actual devices (not just DevTools)
2. Check on different browsers (Chrome, Safari, Firefox)
3. Verify SSL certificate is working
4. Test all CTAs and links
5. Check Google PageSpeed Insights

---

## 📞 Support & Resources

### Next.js Image Optimization
- [Next.js Image Component Docs](https://nextjs.org/docs/app/api-reference/components/image)
- [Responsive Images Guide](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### Tailwind CSS
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Custom Colors](https://tailwindcss.com/docs/customizing-colors)

### Framer Motion
- [Animation Variants](https://www.framer.com/motion/animation/)
- [Scroll Animations](https://www.framer.com/motion/scroll-animations/)

---

## 💡 Tips for Future Updates

1. **Always design mobile-first** - Start with the mobile layout, then scale up
2. **Use consistent spacing** - Stick to the spacing system (8px grid)
3. **Test on real devices** - DevTools is great but not perfect
4. **Optimize images before upload** - Use tools like TinyPNG or Squoosh
5. **Keep accessibility in mind** - Use semantic HTML and proper ARIA labels

---

**Last Updated:** October 30, 2025  
**Version:** 2.0  
**Author:** Claude (Anthropic)
