'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { IMAGE_PATHS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function TastingsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_PATHS.tastings.couple}
            alt="Lewis Estate wine tasting experience"
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
            <h2 className="section-subtitle mb-6">A SENSORY EXPERIENCE</h2>
            <h1 className="hero-title text-white mb-8">
              Wine Tastings
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Explore the passion and craftsmanship of Lewis' winemaking with unique 
              experiences designed to delight your every sense and deepen your appreciation for fine wine.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK A TASTING
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Tasting Experiences */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-subtitle mb-6">TASTING EXPERIENCES</h2>
            <h1 className="section-title text-white mb-8">
              Choose Your Journey
            </h1>
            <p className="section-description max-w-3xl mx-auto">
              From intimate private tastings to group experiences, we offer a range 
              of options to suit every wine lover's preferences.
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
                title: "Classic Tasting",
                duration: "1.5 hours",
                price: "$75 per person",
                wines: "5 wines",
                description: "A guided introduction to Lewis Estate's signature wines with expert commentary.",
                features: ["Wine education", "Tasting notes", "Light snacks", "Souvenir glass"]
              },
              {
                title: "Reserve Tasting",
                duration: "2 hours",
                price: "$125 per person",
                wines: "6 wines",
                description: "An elevated experience featuring our reserve wines and limited releases.",
                features: ["Reserve wines", "Cheese pairing", "Private room", "Sommelier guidance"]
              },
              {
                title: "Private Tasting",
                duration: "2.5 hours",
                price: "$200 per person",
                wines: "8 wines",
                description: "An exclusive experience with personalized attention and rare vintages.",
                features: ["Private sommelier", "Rare vintages", "Food pairing", "Cellar tour"]
              }
            ].map((tasting, index) => (
              <motion.div
                key={tasting.title}
                variants={staggerItem}
                className="bg-lewis-gray/50 p-8 rounded-lg border border-gray-800 hover:border-lewis-gold/50 transition-colors"
              >
                <h3 className="font-playfair text-xl font-semibold mb-4 text-lewis-gold">
                  {tasting.title}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Duration</p>
                  <p className="text-white font-medium">{tasting.duration}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Wines</p>
                  <p className="text-white font-medium">{tasting.wines}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">Price</p>
                  <p className="text-lewis-gold font-semibold text-lg">{tasting.price}</p>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {tasting.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tasting.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-lewis-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  BOOK NOW
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tasting Process */}
      <section className="py-20 md:py-32 bg-lewis-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-subtitle mb-6">THE TASTING PROCESS</h2>
            <h1 className="section-title text-white mb-8">
              How We Taste
            </h1>
            <p className="section-description max-w-3xl mx-auto">
              Our structured approach to wine tasting helps you develop your palate 
              and discover the unique characteristics of each wine.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Look",
                description: "Examine the wine's color, clarity, and viscosity to understand its character."
              },
              {
                step: "02",
                title: "Smell",
                description: "Identify the wine's aromas, from primary fruit notes to complex secondary characteristics."
              },
              {
                step: "03",
                title: "Taste",
                description: "Experience the wine's flavors, texture, and structure on your palate."
              },
              {
                step: "04",
                title: "Savor",
                description: "Notice the wine's finish and how the flavors evolve after swallowing."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="text-center"
              >
                <div className="w-16 h-16 bg-lewis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-lewis-gold">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Group Tastings */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-subtitle mb-6">GROUP EXPERIENCES</h2>
              <h1 className="section-title text-white mb-8">
                Perfect for Groups
              </h1>
              <div className="space-y-6 text-gray-300">
                <p>
                  Whether you're celebrating a special occasion or planning a corporate 
                  event, our group tasting experiences are designed to create lasting memories.
                </p>
                <p>
                  We accommodate groups of 6-20 people in our elegant tasting room, 
                  with options for private spaces and customized experiences.
                </p>
                <p>
                  Our experienced staff will guide your group through the tasting process, 
                  ensuring everyone feels comfortable and engaged throughout the experience.
                </p>
              </div>
              <motion.button
                className="btn-primary mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                PLAN GROUP EVENT
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-lewis-gray/50 p-8 rounded-lg"
            >
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-lewis-gold">
                Group Options
              </h3>
              <ul className="space-y-4">
                {[
                  "Private tasting room for up to 20 guests",
                  "Customized wine selection",
                  "Food pairing options available",
                  "Professional sommelier guidance",
                  "Flexible scheduling",
                  "Special pricing for groups of 8+"
                ].map((option, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-lewis-gold rounded-full mr-3"></div>
                    {option}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">
                  Group pricing starts at
                </p>
                <p className="text-2xl font-semibold text-lewis-gold">
                  $60 per person
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Minimum 6 guests • Advanced booking required
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
