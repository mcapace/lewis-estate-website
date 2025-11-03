import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Lewis Estate - Napa Valley\'s Ultimate Wine Experience',
  description: 'Discover Lewis Estate\'s legendary wines and experience Napa Valley\'s ultimate indulgence with exquisite wines, MICHELIN-Starred cuisine, and exclusive Salon Privé.',
  keywords: 'Lewis Estate, Napa Valley, wine tasting, luxury wine, Cabernet Sauvignon, Chardonnay, wine estate, Salon Privé, wine cellar',
  authors: [{ name: 'Lewis Estate' }],
  icons: {
    icon: [
      { url: '/images/wsfavicon.avif', type: 'image/avif' },
      { url: '/images/wsfavicon.avif', type: 'image/x-icon' },
    ],
    shortcut: '/images/wsfavicon.avif',
    apple: '/images/wsfavicon.avif',
  },
  openGraph: {
    title: 'Lewis Estate - Napa Valley\'s Ultimate Wine Experience',
    description: 'Discover Lewis Estate\'s legendary wines and experience Napa Valley\'s ultimate indulgence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lewis Estate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lewis Estate - Napa Valley\'s Ultimate Wine Experience',
    description: 'Discover Lewis Estate\'s legendary wines and experience Napa Valley\'s ultimate indulgence.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/images/wsfavicon.avif" type="image/avif" />
        <link rel="shortcut icon" href="/images/wsfavicon.avif" type="image/avif" />
        <link rel="apple-touch-icon" href="/images/wsfavicon.avif" />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}