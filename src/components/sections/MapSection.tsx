'use client'

import { useState } from 'react'
import { Map, Marker, NavigationControl } from 'react-map-gl/mapbox'
import { motion } from 'framer-motion'
import Image from 'next/image'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

export default function MapSection() {
  const [viewState, setViewState] = useState({
    latitude: 38.2975,
    longitude: -122.2869,
    zoom: 13
  })

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
          className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Map - fills entire container */}
          <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          >
            {/* Lewis Estate Marker */}
            <Marker latitude={38.2975} longitude={-122.2869}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="cursor-pointer"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
              >
                <Image
                  src="/images/logos/lewis-logo.png"
                  width={48}
                  height={48}
                  alt="Lewis Estate"
                />
              </motion.div>
            </Marker>

            {/* Navigation Controls */}
            <NavigationControl position="top-right" />
          </Map>

          {/* Info Box - Desktop: Right side, vertically centered | Mobile: Bottom, full width */}
          <div 
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-black/90 backdrop-blur-sm p-8 md:p-10 max-w-md transition-all duration-300 hover:bg-black/95
                       max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:top-auto max-md:translate-y-0 max-md:max-w-none max-md:rounded-t-xl max-md:rounded-b-none"
          >
            {/* Gold Circle with L - Logo */}
            <div className="mb-6 flex justify-start">
              <Image
                src="/images/logos/lewis-logo.png"
                width={56}
                height={56}
                alt="Lewis Cellars"
                className="rounded-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-white font-playfair text-3xl mb-6">
              Lewis Cellars
            </h3>

            {/* Hours */}
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Monday-Sunday, 10:00 a.m.-4:30 p.m.
            </p>

            {/* Address */}
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              6320 Silverado Trail, Napa, CA 94558
            </p>

            {/* Phone */}
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              707.255.3400
            </p>

            {/* Button */}
            <button className="bg-[#D3A737] hover:bg-[#E5C1A0] text-black px-8 py-3 uppercase tracking-wider transition-all duration-300 font-semibold">
              VISITOR INFORMATION
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
