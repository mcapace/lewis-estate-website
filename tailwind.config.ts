import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design Colors
        'Brand-Black': '#0D0D0D',
        'Brand-White': '#FFFFFF',
        'Brand-Gold-(Drk-BG)': '#D3A737',
        'Secondary-CTA-Gold-(Drk-BG)': '#E5C1A0',
        'Secondary-Light-Gold-(Drk-BG)': '#EFE5DA',
        'UI-Lightest-Grey': '#F4F4F4',
        
        // Legacy colors (keeping for compatibility)
        'lewis-gold': '#D4AF37',
        'lewis-gold-hover': '#E5C158',
        'lewis-black': '#000000',
        'lewis-gray': '#1a1a1a',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'neue-haas': ['Neue Haas Grotesk Display Std', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'figma-gradient': 'linear-gradient(to bottom, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 0.6) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-out',
        'parallax': 'parallax 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        parallax: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config