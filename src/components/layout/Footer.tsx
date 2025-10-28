'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

export default function Footer() {
  return (
    <footer className="bg-black py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Column 1: Lewis Cellars Info */}
          <div>
            <h3 className="text-xl font-heading text-white mb-4">Lewis Cellars</h3>
            <p className="text-white/70 mb-4">
              Napa Valley, California
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              A family-owned winery dedicated to crafting exceptional, small-lot wines from Napa Valley's finest vineyards.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-lewis-gold mb-6 font-inter">
              QUICK LINKS
            </h4>
            <nav className="space-y-3">
              <a href="#wine-tastings" className="block text-white/70 hover:text-lewis-gold transition-colors">
                Wine Tastings
              </a>
              <a href="#culinary" className="block text-white/70 hover:text-lewis-gold transition-colors">
                Culinary Experiences
              </a>
              <a href="#salon-prive" className="block text-white/70 hover:text-lewis-gold transition-colors">
                Salon Privé
              </a>
              <a href="#wines" className="block text-white/70 hover:text-lewis-gold transition-colors">
                Wines
              </a>
              <a href="#contact" className="block text-white/70 hover:text-lewis-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-lewis-gold mb-6 font-inter">
              CONNECT
            </h4>
            <div className="space-y-3 text-white/70">
              <p>Phone: +1 (707) 265-8700</p>
              <p>Email: info@lewiscellars.com</p>
              <p>Address: 1200 Dowdell Lane, Napa Valley, CA 94558</p>
              <p>Hours: Daily 10 AM - 4 PM</p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-lewis-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-lewis-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-lewis-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 mt-12 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/40">
            © 2025 Lewis Cellars. All rights reserved.
          </p>
          <p className="text-xs text-white/30 mt-2">
            Powered by Wine Spectator
          </p>
        </motion.div>
      </div>
    </footer>
  )
}