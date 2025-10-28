# Lewis Estate - Luxury Wine Website

A premium, responsive website for Lewis Estate showcasing their legendary wines and exclusive experiences in Napa Valley.

## 🍷 Features

- **Luxury Design**: Dark aesthetic with gold accents
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth Framer Motion animations and transitions
- **Performance**: Optimized with Next.js 15 and modern web standards
- **SEO Ready**: Complete metadata and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Images**: Next.js Image optimization
- **Deployment**: Vercel

## 🎨 Design System

### Colors
- **Primary Background**: #000000 (black)
- **Secondary Background**: #1a1a1a (dark gray)
- **Accent Gold**: #D4AF37
- **Text Primary**: #FFFFFF
- **Text Secondary**: #CCCCCC

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Spacing**: Large whitespace for luxury feel

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with all sections
│   ├── globals.css         # Global styles and design system
│   └── [pages]/            # Additional pages (wines, salon-prive, etc.)
├── components/
│   ├── layout/
│   │   └── Navigation.tsx  # Main navigation component
│   └── sections/
│       └── WineBottle.tsx  # Wine bottle display component
└── lib/                    # Utility functions
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd lewis-estate-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:4000](http://localhost:4000) to see the site.

### Available Scripts

- `npm run dev` - Start development server on port 4000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Sections

### 1. Hero Section
- Full-screen background image
- Parallax scrolling effect
- Main headline and description
- Scroll indicator

### 2. Wine Cellar
- Three wine bottles with hover effects
- Lewis Cellars branding
- Gold/bronze emblems
- Call-to-action button

### 3. Salon Privé
- Intimate luxury setting background
- Exclusive experience description
- Private service details

### 4. Culinary Experiences
- Split layout with gourmet images
- MICHELIN-Starred chef highlights
- Interactive image hover effects

### 5. Wine Tastings
- Sensory experience focus
- Couple wine tasting imagery
- Booking call-to-action

## 🎯 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components load on demand

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 📊 SEO Features

- Complete metadata for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data for business information
- Semantic HTML structure
- Optimized images with alt text

## 🎨 Customization

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add corresponding styles to `globals.css`

### Modifying Colors

Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  gold: {
    500: '#D4AF37', // Your custom gold
  }
}
```

### Adding Animations

Use Framer Motion for smooth animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

## 📝 Content Management

Currently using placeholder content. To add real content:

1. Replace placeholder images in `src/app/page.tsx`
2. Update text content in each section
3. Add real wine data to the `wines` array
4. Update metadata in `src/app/layout.tsx`

## 🔧 Troubleshooting

### Common Issues

**Images not loading**: Check `next.config.js` for remote patterns
**Fonts not loading**: Verify Google Fonts import in `globals.css`
**Animations not working**: Ensure Framer Motion is properly installed
**Build errors**: Check TypeScript types and imports

### Performance Issues

- Optimize images (use WebP format)
- Reduce bundle size (check for unused dependencies)
- Enable compression in production
- Use Vercel Analytics for monitoring

## 📄 License

This project is proprietary to Lewis Estate.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions about this website, please contact the development team.

---

Built with ❤️ for Lewis Estate