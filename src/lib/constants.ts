export const SITE_NAME = 'Lewis Estate'
export const SITE_DESCRIPTION = 'Napa Valley\'s Ultimate Wine Experience'

export const NAVIGATION_ITEMS = [
  { name: 'WINE TASTINGS', href: '/tastings' },
  { name: 'CULINARY EXPERIENCES', href: '/culinary' },
  { name: 'SALON PRIVÉ', href: '/salon-prive' },
  { name: 'WINES', href: '/wines' },
]

export const WINE_COLLECTION = [
  {
    name: 'LEWIS CELLARS',
    type: 'CHARDONNAY',
    region: 'NAPA VALLEY',
    bottleType: 'chardonnay' as const,
    emblemColor: 'gold' as const,
    description: 'A rich, buttery Chardonnay with notes of vanilla and oak.',
    image: '/images/wine-bottles/chardonnay.png'
  },
  {
    name: 'LEWIS CELLARS',
    type: 'CABERNET SAUVIGNON',
    region: 'NAPA VALLEY',
    bottleType: 'cabernet' as const,
    emblemColor: 'gold' as const,
    description: 'Bold and complex with dark fruit flavors and smooth tannins.',
    image: '/images/wine-bottles/cabernet.png'
  },
  {
    name: 'LEWIS CELLARS',
    type: 'THE BIG BLEND',
    region: 'NAPA VALLEY',
    bottleType: 'big-blend' as const,
    emblemColor: 'bronze' as const,
    description: 'Our signature blend showcasing the best of Napa Valley.',
    image: '/images/wine-bottles/big-blend.png'
  }
]

export const IMAGE_PATHS = {
  logos: {
    wineSpectator: '/images/logos/wine-spectator-logo.png',
    lewis: '/images/logos/lewis-logo.png',
  },
  hero: {
    homepage: '/images/hero/homepage-hero.png',
  },
  wines: {
    chardonnay: '/images/wine-bottles/chardonnay.png',
    cabernet: '/images/wine-bottles/cabernet.png',
    rose: '/images/wine-bottles/rose.png',
  },
  salonPrive: {
    couple: '/images/salon-prive/couple-luxury.png',
  },
  culinary: {
    platedDish: '/images/culinary/plated-dish.png',
    diningRoom: '/images/culinary/dining-room.jpg',
  },
  tastings: {
    couple: '/images/wine-tasting/wine-tasting-couple.png',
  },
}

export const CONTACT_INFO = {
  phone: '+1 (707) 963-6999',
  email: 'info@lewisestate.com',
  address: '1234 Silverado Trail, Napa Valley, CA 94558',
  hours: 'Daily 10:00 AM - 6:00 PM'
}
