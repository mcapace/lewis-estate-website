'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

export default function QuoteSection() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Large Pull Quote */}
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white text-center max-w-4xl mx-auto mb-6 leading-relaxed">
            "A record of excellence that few California wineries can rival."
          </blockquote>
          
          {/* Attribution */}
          <cite className="text-sm uppercase tracking-widest text-lewis-gold text-center font-inter">
            - JAMES LAUBE, WINE SPECTATOR
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
