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
    <section className="bg-black py-20 lg:py-32 w-full">
      <div className="w-full px-4 lg:px-8">

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl w-full"
        >
          <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            style={{ width: '100%', height: '100%' }}
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

          {/* Desktop Info Card */}
          <div className="hidden lg:block absolute top-8 right-8 bg-black/90 backdrop-blur-md rounded-lg p-6 max-w-sm">
            <h3 className="text-xl font-neue-haas text-white mb-3">
              Lewis Cellars
            </h3>
            <p className="text-white/90 text-sm mb-2">
              Monday-Sunday, 10:00 a.m.-4:30 p.m.
            </p>
            <p className="text-white/90 text-sm mb-2">
              6320 Silverado Trail, Napa, CA 94558
            </p>
            <p className="text-white/90 text-sm mb-4">
              707.255.3400
            </p>
            <button className="bg-[#D3A737] hover:bg-[#E5C1A0] text-black px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors">
              VISITOR INFORMATION
            </button>
          </div>
        </motion.div>

        {/* Mobile Info Card */}
        <div className="lg:hidden mt-8 bg-black/90 rounded-lg p-6">
          <h3 className="text-xl font-neue-haas text-white mb-3">
            Lewis Cellars
          </h3>
          <p className="text-white/90 text-sm mb-2">
            Monday-Sunday, 10:00 a.m.-4:30 p.m.
          </p>
          <p className="text-white/90 text-sm mb-2">
            6320 Silverado Trail, Napa, CA 94558
          </p>
          <p className="text-white/90 text-sm mb-4">
            707.255.3400
          </p>
          <button className="bg-[#D3A737] hover:bg-[#E5C1A0] text-black px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors">
            VISITOR INFORMATION
          </button>
        </div>
      </div>
    </section>
  )
}
