'use client'

import { useState, useEffect } from 'react'
import { Map, Marker, NavigationControl } from 'react-map-gl/mapbox'
import { motion } from 'framer-motion'
import Image from 'next/image'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

export default function MapSection() {
  const [viewState, setViewState] = useState({
    latitude: 38.297778,
    longitude: -122.286111,
    zoom: 15,
    bearing: 0,
    pitch: 0
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!MAPBOX_TOKEN) {
    console.error('Mapbox token not found')
    return null
  }

  return (
    <section style={{width: '100%', padding: '80px 20px', background: '#000000'}}>
      <div style={{width: '100%', padding: '0 20px', maxWidth: '1600px', margin: '0 auto'}}>
        {/* Map Container with Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] md:h-[600px] overflow-hidden shadow-2xl"
        >
          {/* Map - fills entire container */}
          <Map
            initialViewState={{
              latitude: 38.297778,
              longitude: -122.286111,
              zoom: 15,
              bearing: 0,
              pitch: 0
            }}
            onMove={evt => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            attributionControl={false}
            reuseMaps={false}
          >
            {/* Lewis Estate Marker */}
            <Marker 
              latitude={38.297778} 
              longitude={-122.286111}
              anchor="center"
              offset={[0, 0]}
            >
              <Image
                src="/images/logos/lewis-logo.png"
                width={80}
                height={80}
                alt="Lewis Estate"
                style={{ 
                  display: 'block', 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8))',
                  cursor: 'pointer'
                }}
                priority
              />
            </Marker>

            {/* Navigation Controls */}
            <NavigationControl position="top-right" />
          </Map>

          {/* Info Box - Desktop: Right side, vertically centered | Mobile: Bottom, full width */}
          <div 
            className="z-10 transition-all duration-300 hover:bg-[#0D0D0D]/98"
            style={{
              position: 'absolute',
              backgroundColor: '#0D0D0D',
              ...(isMobile ? {
                bottom: '0',
                left: '0',
                right: '0',
                top: 'auto',
                transform: 'none',
                maxWidth: '100%',
                width: '100%',
                minWidth: '100%',
                borderRadius: '12px 12px 0 0',
                padding: '24px 20px'
              } : {
                right: 'clamp(16px, 4vw, 56px)',
                top: '50%',
                transform: 'translateY(-50%)',
                maxWidth: 'clamp(280px, 90vw, 420px)',
                width: 'clamp(280px, 90vw, 420px)',
                minWidth: '280px',
                borderRadius: '8px',
                padding: 'clamp(20px, 4vw, 28px) clamp(20px, 4vw, 32px)'
              })
            }}
          >
            {/* Title */}
            <h3 style={{
              color: '#E5C1A0',
              fontSize: '24px',
              fontFamily: 'Neue Haas Grotesk Display Std',
              fontWeight: '400',
              marginBottom: '24px',
              letterSpacing: '0.5px',
              textAlign: 'left'
            }}>
              Lewis Cellars
            </h3>

            {/* Hours */}
            <p style={{
              color: '#F4F4F4',
              fontSize: '14px',
              fontFamily: 'Neue Haas Grotesk Display Std',
              fontWeight: '300',
              lineHeight: '1.6',
              letterSpacing: '0.3px',
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              Monday–Sunday, 10:00 a.m.–4:30 p.m.
            </p>

            {/* Address */}
            <p style={{
              color: '#F4F4F4',
              fontSize: '14px',
              fontFamily: 'Neue Haas Grotesk Display Std',
              fontWeight: '300',
              lineHeight: '1.6',
              letterSpacing: '0.3px',
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              6320 Silverado Trail<br/>
              Napa, CA 94558
            </p>

            {/* Phone */}
            <p style={{
              color: '#F4F4F4',
              fontSize: '14px',
              fontFamily: 'Neue Haas Grotesk Display Std',
              fontWeight: '300',
              lineHeight: '1.6',
              letterSpacing: '0.3px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              707.255.3400
            </p>

            {/* Button */}
            <a href="https://www.lewiscellars.com/visit?utm_source=winespectator&utm_medium=display&utm_campaign=2025-TROpening-BrandLaunch&utm_content=FooterLink" style={{
              backgroundColor: '#D3A737',
              color: '#0D0D0D',
              padding: '18px 24px',
              fontSize: '16px',
              fontFamily: 'Neue Haas Grotesk Display Std',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.64px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              width: '100%',
              textAlign: 'center',
              borderRadius: '4px',
              display: 'block',
              textDecoration: 'none'
            }}
            className="hover:bg-[#E5C1A0]"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5C1A0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D3A737'}
            >
              VISITOR INFORMATION
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
