# 🔧 Quick Fix Reference Card

## Image Sizing Issues

### Problem: Image is stretched or cut off
```tsx
// ❌ Wrong
<img src="/image.jpg" width="500" height="300" />

// ✅ Correct
<div className="relative aspect-[4/5]">
  <Image src="/image.jpg" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
</div>
```

### Problem: Wine bottles wrong size
```tsx
// ✅ Correct sizing
<div className="relative w-32 h-80 md:w-36 md:h-96">
  <Image src="/wines/bottle.png" fill className="object-contain" />
</div>
```

---

## Responsive Issues

### Problem: Layout not stacking on mobile
```tsx
// ❌ Wrong
<div className="grid-cols-2">

// ✅ Correct  
<div className="grid grid-cols-1 md:grid-cols-2">
```

### Problem: Text too large on mobile
```tsx
// ❌ Wrong
<h1 className="text-6xl">

// ✅ Correct
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

---

## Spacing Issues

### Problem: Not enough padding on mobile
```tsx
// ❌ Wrong
<div className="px-12">

// ✅ Correct
<div className="px-6 lg:px-12">
```

### Problem: Sections too close together
```tsx
// ❌ Wrong
<section className="py-8">

// ✅ Correct
<section className="py-16 md:py-24">
```

---

## Color Issues

### Problem: Using wrong brand colors
```tsx
// ❌ Wrong
<button className="bg-yellow-500">

// ✅ Correct (use Figma colors)
<button className="bg-Brand-Gold-(Drk-BG)">
```

---

## Common Tailwind Classes to Use

### Containers
```tsx
<div className="container mx-auto px-6 lg:px-12">
```

### Responsive Images
```tsx
<div className="relative aspect-[16/9] w-full">
  <Image src="..." fill className="object-cover" />
</div>
```

### Buttons
```tsx
<button className="bg-Brand-Gold-(Drk-BG) text-Brand-Black px-8 py-3 font-neue-haas text-sm tracking-[0.1em] uppercase hover:bg-Secondary-CTA-Gold-(Drk-BG) transition-all hover:scale-105">
```

### Typography
```tsx
// Eyebrow text
<p className="text-Secondary-Light-Gold-(Drk-BG) text-xs tracking-[0.2em] uppercase">

// Main heading
<h2 className="text-Brand-White font-playfair text-4xl md:text-5xl lg:text-6xl font-light">

// Body text
<p className="text-Brand-White/80 font-neue-haas text-base leading-relaxed">
```

---

## Image Path Checklist

### Required Image Structure
```
public/
└── images/
    ├── hero/
    │   └── wine-tasting-group.jpg    (1920x1080)
    ├── tastings/
    │   └── couple-tasting.jpg         (800x1000)
    ├── culinary/
    │   └── plated-dish.jpg            (800x1000)
    ├── interior/
    │   └── elegant-hallway.jpg        (1600x900)
    ├── salon-prive/
    │   └── couple-luxury.jpg          (1920x1080)
    └── wines/
        ├── chardonnay.png             (400x1200 transparent)
        ├── cabernet.png               (400x1200 transparent)
        └── red-blend.png              (400x1200 transparent)
```

---

## Quick Test Commands

### Start Development Server
```bash
npm run dev
# Then open http://localhost:4000
```

### Build for Production
```bash
npm run build
npm run start
```

### Check for Errors
```bash
npm run lint
```

---

## Breakpoint Reference

| Size | Pixels | Tailwind Prefix | Use For |
|------|--------|----------------|---------|
| Mobile | < 768px | (none) | Phones |
| Tablet | 768px+ | `md:` | iPads |
| Desktop | 1024px+ | `lg:` | Laptops |
| Large | 1280px+ | `xl:` | Desktops |

---

## Animation Classes

### Fade In on Scroll
```tsx
const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.8 }}
>
```

### Hover Scale
```tsx
<div className="transition-transform duration-300 hover:scale-105">
```

---

## Color Cheat Sheet

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Brand-Black | #0D0D0D | Backgrounds |
| Brand-White | #FFFFFF | Text |
| Brand-Gold-(Drk-BG) | #D3A737 | CTAs |
| Secondary-CTA-Gold-(Drk-BG) | #E5C1A0 | Hover states |
| Secondary-Light-Gold-(Drk-BG) | #EFE5DA | Eyebrow text |

---

## Most Common Mistakes

### 1. Forgetting Mobile-First
Always write mobile styles first, then add `md:` and `lg:` modifiers.

### 2. Wrong Image Aspect Ratios
Use `aspect-[4/5]` for portraits, `aspect-[16/9]` for landscapes.

### 3. Not Using Container Classes
Always wrap content in `<div className="container mx-auto px-6 lg:px-12">`.

### 4. Inconsistent Spacing
Use Tailwind's spacing scale: `py-16 md:py-24` for sections.

### 5. Missing Hover States
Always add hover effects: `hover:bg-Secondary-CTA-Gold-(Drk-BG) transition-all`.

---

## Emergency Fixes

### If Everything Looks Wrong:
1. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
2. Delete `.next` folder and rebuild:
   ```bash
   rm -rf .next
   npm run dev
   ```

### If Images Won't Load:
1. Check file paths are correct (case-sensitive!)
2. Restart dev server
3. Check `public/` folder structure

### If Fonts Look Wrong:
1. Verify font files in `/public/Fonts/`
2. Check globals.css @font-face declarations
3. Clear browser cache

---

## 🚨 Before You Ask for Help

- [ ] Did I clear my browser cache?
- [ ] Did I restart the dev server?
- [ ] Are all images in the correct folders?
- [ ] Did I check the browser console for errors?
- [ ] Did I test on multiple screen sizes?
- [ ] Did I compare with the Figma file?

---

## Quick Debugging

### View Actual vs Expected Size
```tsx
// Add this temporarily to see dimensions
<div className="text-xs text-red-500">
  Width: {typeof window !== 'undefined' && window.innerWidth}px
</div>
```

### Highlight All Images
```css
/* Add to globals.css temporarily */
img {
  outline: 2px solid red !important;
}
```

### Show Grid Lines
```tsx
// Add to any section temporarily
<div className="absolute inset-0 bg-red-500/10 grid grid-cols-12 gap-4">
  {Array.from({ length: 12 }).map((_, i) => (
    <div key={i} className="bg-blue-500/20" />
  ))}
</div>
```

---

**Keep this card open while you code!** 📌
