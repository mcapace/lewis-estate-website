import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import QuoteSection from '@/components/sections/QuoteSection'
import WineTastingSection from '@/components/sections/WineTastingSection'
import CulinarySection from '@/components/sections/CulinarySection'
import SalonPriveSection from '@/components/sections/SalonPriveSection'
import DiscoverWinesSection from '@/components/sections/DiscoverWinesSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <WineTastingSection />
        <CulinarySection />
        <SalonPriveSection />
        <DiscoverWinesSection />
      </main>
      <Footer />
    </>
  )
}