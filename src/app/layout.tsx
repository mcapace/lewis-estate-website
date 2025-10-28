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

export const metadata: Metadata = {
  title: 'Lewis Estate - Napa Valley\'s Ultimate Wine Experience',
  description: 'Discover Lewis Estate\'s legendary wines and experience Napa Valley\'s ultimate indulgence with exquisite wines, MICHELIN-Starred cuisine, and exclusive Salon Privé.',
  keywords: 'Lewis Estate, Napa Valley, wine tasting, luxury wine, Cabernet Sauvignon, Chardonnay, wine estate, Salon Privé, wine cellar',
  authors: [{ name: 'Lewis Estate' }],
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
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}