'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { IMAGE_PATHS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function SalonPrivePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_PATHS.salonPrive.couple}
            alt="Lewis Estate Salon Privé"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h2 className="section-subtitle mb-6">ENTER A SECLUDED WORLD</h2>
            <h1 className="hero-title text-white mb-8">
              Salon Privé
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Luxuriate in the intimacy of your own private enclave for two. Experience 
              white glove service, customizable menus, and exclusive access to our private cellar.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RESERVE YOUR EXPERIENCE
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-subtitle mb-6">EXCLUSIVE AMENITIES</h2>
            <h1 className="section-title text-white mb-8">
              Unparalleled Service
            </h1>
            <p className="section-description max-w-3xl mx-auto">
              Every detail is crafted to provide an unforgettable experience in our 
              most intimate and luxurious setting.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "White Glove Service",
                description: "Dedicated concierge service available throughout your experience."
              },
              {
                title: "Customizable Menus",
                description: "Personalized culinary experiences tailored to your preferences."
              },
              {
                title: "Private Cellar Access",
                description: "Exclusive access to our most rare and exceptional wines."
              },
              {
                title: "Indoor & Outdoor Salons",
                description: "Choose between our elegant indoor space or scenic outdoor terrace."
              },
              {
                title: "Private Car Service",
                description: "Complimentary transportation to and from your accommodation."
              },
              {
                title: "Personal Sommelier",
                description: "Expert guidance from our master sommelier throughout your visit."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="bg-lewis-gray/50 p-8 rounded-lg border border-gray-800 hover:border-lewis-gold/50 transition-colors"
              >
                <h3 className="font-playfair text-xl font-semibold mb-4 text-lewis-gold">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-20 md:py-32 bg-lewis-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-subtitle mb-6">THE EXPERIENCE</h2>
              <h1 className="section-title text-white mb-8">
                Intimate Luxury
              </h1>
              <div className="space-y-6 text-gray-300">
                <p>
                  The Salon Privé at Lewis Estate offers an unparalleled level of intimacy 
                  and luxury. Designed for just two guests, this exclusive experience 
                  provides complete privacy and personalized attention.
                </p>
                <p>
                  Your dedicated concierge will ensure every detail is perfect, from 
                  the moment you arrive until your departure. Enjoy access to our 
                  private cellar, featuring rare vintages and limited releases not 
                  available in our main tasting room.
                </p>
                <p>
                  The experience includes a multi-course tasting menu, expertly paired 
                  wines, and the undivided attention of our master sommelier and chef.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/50 p-8 rounded-lg"
            >
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-lewis-gold">
                Experience Includes
              </h3>
              <ul className="space-y-4">
                {[
                  "Private tasting for two guests",
                  "Access to exclusive wine collection",
                  "Multi-course culinary experience",
                  "Personal sommelier guidance",
                  "Private car service",
                  "Commemorative gift"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-lewis-gold rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-2xl font-semibold text-lewis-gold mb-2">
                  $1,200 per couple
                </p>
                <p className="text-sm text-gray-400">
                  3-hour experience • Advanced booking required
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
