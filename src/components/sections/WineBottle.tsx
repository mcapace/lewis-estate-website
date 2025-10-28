'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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

  // For now, we'll use the product showcase image for all bottles
  // In a real implementation, you'd have separate bottle images
  const bottleImage = '/images/wine-bottles/product-showcase.png'

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
        {/* Real Wine Bottle Image */}
        <div className="relative w-32 h-80 md:w-40 md:h-96">
          <Image
            src={bottleImage}
            alt={`${wine.name} ${wine.type}`}
            fill
            className="object-contain drop-shadow-2xl"
            quality={90}
          />
        </div>
      </motion.div>

      {/* Wine Label Below Bottle */}
      <div className="text-center">
        <h3 className="font-playfair text-lg font-semibold text-white mb-1">
          {wine.name}
        </h3>
        <p className="text-sm text-lewis-gold font-medium mb-1">
          {wine.type}
        </p>
        <p className="text-xs text-white/60 uppercase tracking-wider">
          {wine.region}
        </p>
      </div>
    </motion.div>
  )
}

export default WineBottle
