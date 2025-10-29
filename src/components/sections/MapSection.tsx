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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
            VISIT US
          </p>
          <h2 className="text-5xl lg:text-6xl font-heading text-white">
            Find Us in Napa Valley
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden h-[800px] lg:h-[1000px] xl:h-[1200px] shadow-2xl w-full"
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
          <div className="hidden lg:block absolute top-8 right-8 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-8 max-w-sm">
            <h3 className="text-2xl font-heading text-white mb-4">
              Lewis Estate
            </h3>
            <p className="text-white/90 mb-2">
              Napa Valley, California
            </p>
            <p className="text-white/70 text-sm mb-6">
              Award-winning wines and MICHELIN-Starred dining
            </p>
            <a
              href="https://maps.google.com/?q=38.2975,-122.2869"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lewis-gold hover:bg-lewis-gold-hover text-black px-6 py-3 font-semibold uppercase tracking-wider transition-colors inline-block"
            >
              GET DIRECTIONS
            </a>
          </div>
        </motion.div>

        {/* Mobile Info Card */}
        <div className="lg:hidden mt-8 bg-lewis-gray border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-heading text-white mb-4">
            Lewis Estate
          </h3>
          <p className="text-white/90 mb-2">
            Napa Valley, California
          </p>
          <p className="text-white/70 text-sm mb-6">
            Award-winning wines and MICHELIN-Starred dining
          </p>
          <a
            href="https://maps.google.com/?q=38.2975,-122.2869"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lewis-gold hover:bg-lewis-gold-hover text-black px-6 py-3 font-semibold uppercase tracking-wider transition-colors inline-block"
          >
            GET DIRECTIONS
          </a>
        </div>
      </div>
    </section>
  )
}
