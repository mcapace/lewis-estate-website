'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import MapSection from '@/components/sections/MapSection'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div style={{width: '100vw', position: 'relative', background: '#0D0D0D', margin: 0, padding: 0, border: 'none'}}>
      {/* Disclaimer Bar */}
      <div style={{width: '100%', background: '#0D0D0D', padding: '8px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative', zIndex: 100}}>
        <p style={{color: '#F4F4F4', fontSize: '12px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', margin: 0, letterSpacing: '0.5px'}}>
          Paid sponsorship by Lewis Cellars
        </p>
      </div>
      
      <div style={{width: '100%', maxWidth: '1600px', margin: '0 auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', overflow: 'visible'}}>
        
        {/* Hero Section */}
        <div style={{width: '100%', height: '100vh', position: 'relative', background: 'var(--Brand-Black, #0D0D0D)', overflow: 'visible', display: 'flex', flexDirection: 'column', zIndex: 0}}>
          <div style={{width: '100%', height: '100%', position: 'absolute', top: '80px', left: '0px', overflow: 'hidden'}}>
            <Image
              style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', objectFit: 'cover', objectPosition: 'center'}}
              src="/_Assets/ws_lewis_hero.png"
              alt="Lewis Estate Hero"
              width={1440}
              height={850}
              priority
              className="object-cover"
            />
            <div style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', background: 'linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 0.65) 100%)'}}></div>
          </div>
          
          {/* Navigation */}
          <div style={{width: '100%', padding: '15px 20px', position: 'absolute', top: '0px', left: '0px', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.8) 0%, rgba(13, 13, 13, 0) 100%)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', zIndex: 101, flex: isMobile ? '0' : '0 0 auto'}}>
              <a href="https://www.lewiscellars.com/?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderLogo" style={{display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none'}}>
                <div style={{position: 'relative', width: 'clamp(80px, 20vw, 120px)', height: 'auto', filter: 'brightness(0) saturate(100%) invert(92%) sepia(25%) saturate(1400%) hue-rotate(355deg) brightness(1.15) contrast(0.9)', WebkitFilter: 'brightness(0) saturate(100%) invert(92%) sepia(25%) saturate(1400%) hue-rotate(355deg) brightness(1.15) contrast(0.9)'}}>
                  <Image
                    src="/_Assets/WSlogoWhite-stroke (2) (4) (3).png"
                    alt="Wine Spectator Logo"
                    width={120}
                    height={40}
                    style={{width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain'}}
                    className="object-contain"
                  />
                </div>
              </a>
              <span style={{color: '#ebd493', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1', display: 'flex', alignItems: 'center'}}>×</span>
              <a href="https://www.lewiscellars.com/?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderLogo" style={{display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none'}}>
                <Image
                  src="/images/logos/assets_50612480d3c642cea40342a99f4dc2b7_44b56dde89a746a4a6c8c35f911348c9.webp"
                  alt="Lewis Cellars Logo"
                  width={100}
                  height={33}
                  style={{width: 'clamp(65px, 16vw, 100px)', height: 'auto', maxWidth: '100%', objectFit: 'contain'}}
                className="object-contain"
              />
              </a>
            </div>
            
            {/* Desktop Navigation - Centered on desktop */}
            <div style={{gap: '20px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '12px', display: isMobile ? 'none' : 'flex', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
              <a href="https://www.lewiscellars.com/visit/wine-tastings?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" style={{padding: '8px 0', textDecoration: 'none', cursor: 'pointer'}}>
                <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', transition: 'color 0.3s ease'}} className="hover:text-[#D3A737]">
                  wine tastings
                </div>
              </a>
              <a href="https://www.lewiscellars.com/visit/culinary-experiences?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" style={{padding: '8px 0', textDecoration: 'none', cursor: 'pointer'}}>
                <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', transition: 'color 0.3s ease'}} className="hover:text-[#D3A737]">
                  culinary experiences
                </div>
              </a>
              <a href="https://www.lewiscellars.com/visit/salon-prive?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" style={{padding: '8px 0', textDecoration: 'none', cursor: 'pointer'}}>
                <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', transition: 'color 0.3s ease'}} className="hover:text-[#D3A737]">
                  salon privé
                </div>
              </a>
              <a href="https://www.lewiscellars.com/collection/all?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" style={{padding: '8px 0', textDecoration: 'none', cursor: 'pointer'}}>
                <div style={{color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', transition: 'color 0.3s ease'}} className="hover:text-[#D3A737]">
                  wines
                </div>
              </a>
            </div>

            {/* Mobile Hamburger Button - Only shown on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{display: isMobile ? 'flex' : 'none', flexDirection: 'column', gap: '5px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', zIndex: 101}}
              aria-label="Toggle menu"
            >
              <span 
                className="w-[25px] h-[2px] transition-all duration-300"
                style={{
                  background: mobileMenuOpen ? 'transparent' : '#F4F4F4',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none'
                }}
              ></span>
              <span 
                className="w-[25px] h-[2px] bg-[#F4F4F4] transition-all duration-300"
                style={{
                  opacity: mobileMenuOpen ? '0' : '1'
                }}
              ></span>
              <span 
                className="w-[25px] h-[2px] bg-[#F4F4F4] transition-all duration-300"
                style={{
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'
                }}
              ></span>
            </button>
          </div>

          {/* Mobile Menu Overlay - Only shown on mobile */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? '0%' : '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full max-w-[300px] h-screen bg-[#0D0D0D] z-[99] p-[80px_30px_30px_30px] flex flex-col gap-[30px] shadow-[-4px_0_20px_rgba(0,0,0,0.5)] md:hidden"
            style={{
              display: mobileMenuOpen ? 'flex' : 'none',
            }}
          >
            <a 
              href="https://www.lewiscellars.com/visit/wine-tastings?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" 
              onClick={() => setMobileMenuOpen(false)}
              style={{padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}
            >
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                wine tastings
              </div>
            </a>
            <a 
              href="https://www.lewiscellars.com/visit/culinary-experiences?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" 
              onClick={() => setMobileMenuOpen(false)}
              style={{padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}
            >
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                culinary experiences
              </div>
            </a>
            <a 
              href="https://www.lewiscellars.com/visit/salon-prive?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" 
              onClick={() => setMobileMenuOpen(false)}
              style={{padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}
            >
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                salon privé
              </div>
            </a>
            <a 
              href="https://www.lewiscellars.com/collection/all?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=HeaderNavigationLink" 
              onClick={() => setMobileMenuOpen(false)}
              style={{padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}
            >
              <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                wines
            </div>
            </a>
          </motion.div>

          {/* Mobile Menu Backdrop */}
          {mobileMenuOpen && (
            <div
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: 98
              }}
              className="md:hidden"
            />
          )}
          </div>
          
        {/* Hero Text Content Section - Below Hero Image */}
        <div style={{width: '100%', padding: '0px 20px 80px 20px', marginTop: '-100px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '32px', position: 'relative', zIndex: 1}}>
            <div style={{textAlign: 'center', maxWidth: '800px', width: '100%'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '24px'}}>
                The Home of Big Reds and Sexy Chardonnays
              </div>
            <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.0', letterSpacing: '1.08px', marginBottom: '24px'}}>
              Napa Valley's Ultimate<br/>Experience Awaits
              </div>
            <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
                With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
            </div>
            <motion.a 
              href="https://www.lewiscellars.com/collection/all?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-HeroCTAButton" 
              style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer', textDecoration: 'none', marginBottom: '24px', borderRadius: '4px'}}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(211, 167, 55, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                EXPLORE OUR WINES
              </div>
            </motion.a>
            
            {/* Social Media Icons */}
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center'}}>
              {/* Instagram */}
              <a href="https://www.instagram.com/lewiscellars/?hl=en" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/LewisCellars?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <ScrollAnimation delay={0.2}>
          <div style={{width: '100vw', padding: '80px 20px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', position: 'relative', zIndex: 1, marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{textAlign: 'center', color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', letterSpacing: '0.32px', lineHeight: '1.08'}}
            >
              <span style={{display: 'inline-block', width: '1100px', maxWidth: '90vw'}}>
                <span style={{display: 'block'}}>"A record of excellence that few</span>
                <span style={{display: 'block'}}>California wineries can rival."</span>
              </span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{textAlign: 'center', color: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', fontSize: 'clamp(14px, 2.5vw, 18px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: '5.76px'}}
            >
            -James Laube, wine spectator
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Wine Tastings & Culinary Section */}
        <div id="wine-tastings" style={{width: '100%', padding: '80px 20px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'center', scrollMarginTop: '80px'}}>
          {/* Wine Tastings */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', flexWrap: 'wrap', maxWidth: '1200px', width: '100%'}}>
            <div style={{flex: 1, minWidth: '300px', maxWidth: '500px'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '4.48px', marginBottom: '16px'}}>
                A Sensory Experience
              </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '24px'}}>
                Wine Tastings
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
                Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
              </div>
              <motion.a 
                href="https://www.lewiscellars.com/visit/wine-tastings?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-TastingsCTAButton" 
                style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer', textDecoration: 'none', borderRadius: '4px'}}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(211, 167, 55, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                  Book A wine tasting
                </div>
              </motion.a>
            </div>
            <motion.a
              href="https://www.lewiscellars.com/visit/wine-tastings?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-TastingsCTAButton"
              style={{textDecoration: 'none', display: 'block'}}
              className="image-container"
            >
            <motion.div 
              style={{flex: 1, minWidth: '300px', maxWidth: '600px', height: '650px', position: 'relative', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden', borderRadius: '0', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer'}}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)' }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{width: '100%', height: '100%'}}
              >
              <Image
                  style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.4s ease'}}
                src="/_Assets/ws_lewis_wine_tastings.png"
                alt="Wine Tastings"
                width={1136}
                height={758}
                className="object-cover"
              />
              </motion.div>
            </motion.div>
            </motion.a>
          </div>
          
          {/* Culinary Experiences */}
          <div id="culinary-experiences" style={{display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', flexWrap: 'wrap-reverse', maxWidth: '1200px', width: '100%', scrollMarginTop: '80px'}}>
            <motion.a
              href="https://www.lewiscellars.com/visit/culinary-experiences?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-CulinaryCTAButton"
              style={{textDecoration: 'none', display: 'block'}}
              className="image-container"
            >
            <motion.div 
              style={{flex: 1, minWidth: '300px', maxWidth: '600px', height: '650px', position: 'relative', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden', borderRadius: '0', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer'}}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)' }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{width: '100%', height: '100%'}}
              >
              <Image
                  style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.4s ease'}}
                src="/_Assets/ws_lewis_culinary_exp.png"
                alt="Culinary Experience"
                width={513}
                height={651}
                className="object-cover"
              />
              </motion.div>
            </motion.div>
            </motion.a>
            <div style={{flex: 1, minWidth: '300px', maxWidth: '500px'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '4.48px', marginBottom: '16px'}}>
                A Magical Interplay
              </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '24px'}}>
                Culinary Experiences
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
                Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
              </div>
              <motion.a 
                href="https://www.lewiscellars.com/visit/culinary-experiences?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-CulinaryCTAButton" 
                style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer', textDecoration: 'none', borderRadius: '4px'}}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(211, 167, 55, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                  Book A Taste of Lewis
                </div>
              </motion.a>
                </div>
              </div>

          {/* Third Image - Dining Room */}
          <div style={{width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'flex-end'}}>
            <div className="image-container" style={{width: '100%', maxWidth: '400px', height: '400px', position: 'relative', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden', borderRadius: '0', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
              <Image
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
                src="/images/culinary/dining-room.jpg"
                alt="Dining Room"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Salon Privé Section */}
        <div id="salon-prive" style={{width: '100%', position: 'relative', background: '#0D0D0D', overflow: 'visible', display: 'flex', flexDirection: 'column', scrollMarginTop: '80px'}}>
          {/* Image Container - Fixed Height */}
          <a href="https://www.lewiscellars.com/visit/salon-prive?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-SalonPriveCTAButton" style={{textDecoration: 'none', display: 'block', width: '100%', height: '80vh', position: 'relative', overflow: 'visible', cursor: 'pointer'}}>
          <div style={{width: '100%', height: '100%', position: 'relative', overflow: 'visible'}}>
          <Image
              style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
            src="/_Assets/ws_lewis_salon_prive.png"
            alt="Salon Privé"
            width={1440}
            height={850}
            className="object-cover"
          />
          <div style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.15) 0%, rgba(13, 13, 13, 0.5) 100%)'}}></div>
          </div>
          </a>
          
          {/* Text Content - Starts at legs (overlapping image bottom) and continues below */}
          <div style={{width: '100%', background: '#0D0D0D', padding: '0px 20px 60px 20px', marginTop: '-180px', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{maxWidth: '800px', width: '100%', textAlign: 'center'}}>
              {/* Titles - Overlapping bottom of image */}
            <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '24px'}}>
              enter A Secluded World
            </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '32px'}}>
              Salon Privé
            </div>
              
              {/* Descriptive text - Below image */}
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
              Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove, on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés, access to their private cellar, private car service, and more.
            </div>
              
              {/* Button - Below image */}
            <motion.a 
              href="https://www.lewiscellars.com/visit/salon-prive?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-SalonPriveCTAButton" 
              style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer', textDecoration: 'none', borderRadius: '4px'}}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(211, 167, 55, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                Explore the salon privé
              </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div id="discover-wines" style={{width: '100%', background: '#0D0D0D', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px 80px 20px', overflow: 'visible', position: 'relative', scrollMarginTop: '80px'}}>
          {/* Wine Bottles Image Section */}
          <div style={{width: '100%', maxWidth: '1600px', marginBottom: '0', position: 'relative', paddingBottom: '0', overflow: 'visible', minHeight: '300px'}}>
          <Image
              style={{width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block', marginBottom: '0'}}
              className="object-contain"
            src="/_Assets/ws_lewis_product_showcase.png"
            alt="Wine Showcase"
            width={1440}
            height={850}
              priority={false}
              sizes="(max-width: 768px) 100vw, 1600px"
            />
            {/* Clickable overlay areas for wine bottles */}
            {/* Chardonnay Bottle - Left */}
            <a 
              href="https://www.lewiscellars.com/product/2023-chardonnay-napa-valley-750?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-WinesWineCard"
              style={{
                position: 'absolute',
                left: '20%',
                top: '20%',
                width: '22%',
                height: '60%',
                cursor: 'pointer',
                zIndex: 5,
                textDecoration: 'none'
              }}
              aria-label="Chardonnay Wine"
            />
            {/* Cabernet Sauvignon Bottle - Middle */}
            <a 
              href="https://www.lewiscellars.com/product/2022-reserve-cabernet-sauvignon-750?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-WinesWineCard"
              style={{
                position: 'absolute',
                left: '39%',
                top: '20%',
                width: '22%',
                height: '60%',
                cursor: 'pointer',
                zIndex: 5,
                textDecoration: 'none'
              }}
              aria-label="Cabernet Sauvignon Wine"
            />
            {/* The Big Blend Bottle - Right */}
            <a 
              href="https://www.lewiscellars.com/product/2022-the-big-blend-750?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-WinesWineCard"
              style={{
                position: 'absolute',
                left: '58%',
                top: '20%',
                width: '22%',
                height: '60%',
                cursor: 'pointer',
                zIndex: 5,
                textDecoration: 'none'
              }}
              aria-label="The Big Blend Wine"
            />
          </div>

          {/* Text Content Box Below Bottles */}
          <div style={{
            width: '100%',
            maxWidth: '1600px',
            backgroundColor: '#0D0D0D',
            padding: '0px 20px 60px 20px',
            marginTop: 'clamp(-200px, -15vw, -100px)',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            <div style={{textAlign: 'center', maxWidth: '800px', width: '100%', paddingTop: '0px', marginTop: '0px', position: 'relative', zIndex: 11}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '12px', marginTop: '0px'}}>
              the Cellar Awaits
            </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '12px', marginTop: '0px'}}>
              Discover Lewis Wines
            </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '20px', marginTop: '0px'}}>
              Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
            </div>
              <motion.a 
                href="https://www.lewiscellars.com/collection/all?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=Homepage-WinesCTAButton" 
                style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer', marginTop: '0px', textDecoration: 'none', borderRadius: '4px'}}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(211, 167, 55, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                Explore wines
              </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <MapSection />

        {/* Footer Section */}
        <footer style={{width: '100%', padding: '80px 20px 40px 20px', background: '#0D0D0D', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 40px'}}>
            {/* Wine Spectator Footer Links */}
            <div className="footer-grid" style={{marginBottom: '40px'}}>
              
              {/* Column 1: WineSpectator.com & Wine Spectator Magazine */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  WineSpectator.com
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://sub.winespectator.com/pubs/M5/WNE/2-Subscribe-button-monthly.jsp?cds_page_id=274759&cds_mag_code=WNE&id=1762194047753&lsid=53071220477056377&vid=1" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Become a Member
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/pages/member-benefits" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Member Benefits
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://giftcenter.winespectator.com/?_gl=1*9ysxb3*_gcl_au*NzE1Mzc0ODQyLjE3NTc2OTEyODM.*_ga*MTYyMzMzNjE3MC4xNzU3NjkxMjg3*_ga_65Y4BX4L8M*czE3NjIxOTQwNDckbzI0JGcxJHQxNzYyMTk0MDcxJGozNiRsMCRoMA.." style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Give a Gift Membership
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/newsletter" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Email Newsletters
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/retailers/search" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Find a Wine Shop
                    </a>
                  </li>
                </ul>
                
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Wine Spectator Magazine
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://sub.winespectator.com/pubs/M5/WNE/2-Subscribe-button-monthly.jsp?cds_page_id=274759&cds_mag_code=WNE&id=1762194105091&lsid=53071220477056377&vid=2" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Subscribe
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://mshanken.emags.com/mshanken_subs" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Digital Subscription
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://giftcenter.winespectator.com/" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Gift Subscription
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://sub.winespectator.com/pubs/M5/WNE/WNE_mag_store1.jsp?cds_page_id=253707&cds_mag_code=WNE&id=1762194137685&lsid=53071220477056377&vid=3" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Buy Back Issues
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/issues" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Issue Archives
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://sub.winespectator.com/pubs/M5/WNE/product_store.jsp?cds_page_id=254319&cds_mag_code=WNE&id=1762194154192&lsid=53071220477056377&vid=4" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Wine Spectator Products
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Help, Events & Services */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Help
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://mshanken.cloud.buysub.com/" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Manage Account
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://help.winespectator.com/support/home?_gl=1*7gvcy8*_gcl_au*NzE1Mzc0ODQyLjE3NTc2OTEyODM.*_ga*MTYyMzMzNjE3MC4xNzU3NjkxMjg3*_ga_65Y4BX4L8M*czE3NjIxOTQwNDckbzI0JGcxJHQxNzYyMTk0MTYyJGo4JGwwJGgw" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Contact Us
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://help.winespectator.com/support/solutions/articles/234691-what-is-the-accessibility-policy-for-wine-spectator-?_gl=1*8m2ret*_gcl_au*NzE1Mzc0ODQyLjE3NTc2OTEyODM.*_ga*MTYyMzMzNjE3MC4xNzU3NjkxMjg3*_ga_65Y4BX4L8M*czE3NjIxOTQwNDckbzI0JGcxJHQxNzYyMTk0MTYyJGo4JGwwJGgw" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Accessibility
                    </a>
                  </li>
                </ul>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Events
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.nywineexperience.com/" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Wine Experience
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://grandtour.winespectator.com/?_gl=1*tcwcvs*_gcl_au*NzE1Mzc0ODQyLjE3NTc2OTEyODM.*_ga*MTYyMzMzNjE3MC4xNzU3NjkxMjg3*_ga_65Y4BX4L8M*czE3NjIxOTQwNDckbzI0JGcxJHQxNzYyMTk0MjExJGozMiRsMCRoMA.." style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Grand Tour
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.shankennewsdaily.com/events/" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      M. Shanken Events Calendar
                    </a>
                  </li>
                </ul>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Services
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://apps.apple.com/us/app/wineratings-by-wine-spectator/id381341648" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Apps
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://giftcenter.winespectator.com/?_gl=1*v61jrh*_gcl_au*NzE1Mzc0ODQyLjE3NTc2OTEyODM.*_ga*MTYyMzMzNjE3MC4xNzU3NjkxMjg3*_ga_65Y4BX4L8M*czE3NjIxOTQwNDckbzI0JGcxJHQxNzYyMTk0MjI1JGoxOCRsMCRoMA.." style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Gift Center
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: About Us & Trade Only */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  About Us
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/articles/about-our-tastings" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      How We Taste
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/pages/job-opportunities" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Job Opportunities
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/pages/terms-of-service" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Terms of Service
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/pages/privacy-policy" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Privacy Policy
                    </a>
                  </li>
                </ul>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Trade Only
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/articles/how-to-submit-wines" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Submit Wines
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.mshanken.com/winespectator/" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Advertise With Us / Media Kit
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/retailerclub" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Sell Wine Spectator / Join the Retailer Club
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/pages/shanken-ratings-network" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Shanken Ratings Network
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.winespectator.com/for-the-trade/trade-news" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Trade News
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="https://www.impactdatabank.com/" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Impact Databank Reports
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: M. Shanken Publications & Follow Us */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  M. Shanken Publications
                </h3>
                <div style={{marginBottom: '28px'}}>
                  <a href="https://www.cigaraficionado.com/" style={{display: 'block', marginBottom: '16px', height: 'auto', maxWidth: '150px', textDecoration: 'none'}}>
                    <Image
                      src="/pub logos /Cigar.png"
                      alt="Cigar Aficionado"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </a>
                  <a href="https://whiskyadvocate.com/" style={{display: 'block', marginBottom: '16px', height: 'auto', maxWidth: '150px', textDecoration: 'none'}}>
                    <Image
                      src="/pub logos /WhiskyAdvocate.png"
                      alt="Whisky Advocate"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </a>
                  <a href="https://www.marketwatchmag.com/" style={{display: 'block', marginBottom: '16px', height: 'auto', maxWidth: '220px', textDecoration: 'none'}}>
                    <Image
                      src="/pub logos /MarketWatch.png"
                      alt="Market Watch"
                      width={220}
                      height={60}
                      style={{width: '220px', height: 'auto', maxWidth: '100%'}}
                    />
                  </a>
                  <a href="https://www.shankennewsdaily.com/" style={{display: 'block', marginBottom: '16px', height: 'auto', maxWidth: '150px', textDecoration: 'none'}}>
                    <Image
                      src="/pub logos /ShankenNewsDaily.png"
                      alt="Shanken News Daily"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </a>
                  <a href="https://msh.dragonforms.com/loading.do?omedasite=MSH2_QVnewStandard" style={{display: 'block', marginBottom: '16px', height: 'auto', maxWidth: '150px', textDecoration: 'none'}}>
                    <Image
                      src="/pub logos /Impact.png"
                      alt="Impact"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </a>
            </div>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Follow Us
                </h3>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/WineSpectator/?rf=100968456611081" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/wine_spectator/?hl=en" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="https://x.com/winespectator?lang=en" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="https://www.youtube.com/WineSpectatorVideo" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  {/* Pinterest */}
                  <a href="https://www.pinterest.com/winespectator/" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c5.084 0 9.426-3.163 11.174-7.637-.15-.813-1.174-4.906-1.174-4.906-.25.485-.787 1.228-1.282 1.678-.494.49-1.682 1.317-2.914 1.317-.77 0-1.413-.237-1.92-.71-.507-.474-.761-1.101-.761-1.882 0-1.97 1.5-4.74 4.262-4.74 2.25 0 3.537 1.686 3.537 3.932 0 2.253-1.423 4.16-3.537 4.16-.692 0-1.343-.361-1.565-.957 0 0-.337 1.28-.419 1.595-.152.584-.562 1.316-1.157 1.678-.348.22-.742.331-1.174.331-1.268 0-2.275-1.314-2.275-3.01 0-2.634 2.017-5.036 5.102-5.036 2.717 0 4.652 1.937 4.652 4.527 0 2.717-1.713 4.904-4.07 4.904-1.133 0-2.197-.588-2.556-1.688 0 0-.561 2.133-.697 2.65-.25.964-1.005 2.17-1.495 2.909C9.956 21.65 10.97 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"/>
                    </svg>
                  </a>
            </div>
              </div>
            </div>

            {/* Copyright */}
            <div style={{paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '40px', textAlign: 'center'}}>
              <p style={{color: '#F4F4F4', fontSize: '12px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', margin: 0}}>
                © Copyright 2025 Wine Spectator. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}