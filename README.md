# Lewis Estate - Luxury Wine Experience Website

A premium, responsive website for Lewis Estate, showcasing Napa Valley's ultimate wine experience with exquisite wines, MICHELIN-Starred cuisine, and exclusive Salon Privé.

## 🍷 Features

- **Luxury Design**: Elegant black and gold theme with premium typography
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Real Assets**: High-quality images from Google Drive integrated
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Performance**: Next.js Image optimization and static generation
- **Type Safety**: Full TypeScript implementation

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## 📱 Pages

- **Homepage**: Hero section, wine cellar, salon privé, culinary, and tasting sections
- **Wines**: Wine collection showcase with tasting notes
- **Salon Privé**: Exclusive experience details and pricing
- **Culinary**: MICHELIN-Starred chef experience and menu highlights
- **Tastings**: Wine tasting experiences and group options

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd lewis-estate-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4000`

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors
- **Lewis Black**: #000000
- **Lewis Gold**: #D4AF37
- **Lewis Gold Hover**: #E5C158
- **Lewis Gray**: #1a1a1a

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Responsive navigation with mobile menu
- Interactive wine bottle components
- Smooth scroll animations
- Professional footer with contact information

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── wines/             # Wine collection page
│   ├── salon-prive/       # Salon Privé page
│   ├── culinary/          # Culinary experiences page
│   └── tastings/          # Wine tastings page
├── components/            # React components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
└── lib/                  # Utility functions and constants
    ├── animations.ts     # Framer Motion variants
    ├── constants.ts      # Site constants
    ├── utils.ts          # Utility functions
    └── types.ts          # TypeScript interfaces
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## 📞 Contact

For questions about this project, please contact the development team.

## 📄 License

This project is proprietary to Lewis Estate.