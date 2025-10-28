'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface WineBottleProps {
  wine: {
    name: string
    type: string
    region: string
    bottleType: 'chardonnay' | 'cabernet' | 'big-blend'
    emblemColor: 'gold' | 'bronze'
  }
  index: number
}

const WineBottle = ({ wine, index }: WineBottleProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wine Bottle Container */}
      <motion.div
        className="relative mb-6"
        whileHover={{ 
          scale: 1.05,
          y: -10,
          transition: { duration: 0.3 }
        }}
        animate={{
          boxShadow: isHovered 
            ? '0 25px 50px rgba(212, 175, 55, 0.3)' 
            : '0 20px 40px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Main Bottle Body - Proper wine bottle shape */}
        <div className={`wine-bottle ${
          wine.bottleType === 'chardonnay' 
            ? 'bottle-chardonnay' 
            : wine.bottleType === 'cabernet' 
            ? 'bottle-cabernet' 
            : 'bottle-big-blend'
        }`}>
          
          {/* Bottle Neck */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-8 bg-gray-800 rounded-t-full"></div>
          
          {/* Bottle Cap/Foil */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-black rounded-t-full"></div>
          
          {/* Wine Level (for Chardonnay) */}
          {wine.bottleType === 'chardonnay' && (
            <div className="absolute bottom-8 left-3 right-3 h-1 bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent rounded-full"></div>
          )}
          
          {/* Label Area - Positioned like in Figma */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            {/* Circular Emblem */}
            <motion.div
              className={`label-emblem ${
                wine.emblemColor === 'gold' ? 'emblem-gold' : 'emblem-bronze'
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              L
            </motion.div>
            
            {/* Label Text */}
            <div className="label-text">
              <div className="font-semibold tracking-wide">{wine.name}</div>
              <div className="font-medium mt-1">{wine.type}</div>
              <div className="text-gray-300 mt-1 text-xs">{wine.region}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WineBottle
