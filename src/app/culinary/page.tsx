'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { IMAGE_PATHS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function CulinaryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_PATHS.culinary.platedDish}
            alt="Lewis Estate culinary experience"
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
            <h2 className="section-subtitle mb-6">MICHELIN-STARRED EXCELLENCE</h2>
            <h1 className="hero-title text-white mb-8">
              Culinary Experiences
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Indulge in extraordinary culinary experiences crafted by our MICHELIN-Starred chef, 
              where each dish is a masterpiece designed to complement our exceptional wines.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MAKE A RESERVATION
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-subtitle mb-6">MEET OUR CHEF</h2>
              <h1 className="section-title text-white mb-8">
                Culinary Artistry
              </h1>
              <div className="space-y-6 text-gray-300">
                <p>
                  Our MICHELIN-Starred chef brings decades of experience from the world's 
                  most prestigious kitchens to Lewis Estate. Each dish is crafted with 
                  precision and passion, using only the finest local ingredients.
                </p>
                <p>
                  The culinary program at Lewis Estate is designed to create perfect 
                  harmony between food and wine. Every course is thoughtfully paired 
                  with our exceptional wines, creating an unforgettable dining experience.
                </p>
                <p>
                  From intimate tastings to grand celebrations, our chef creates 
                  personalized menus that reflect the season, the occasion, and your 
                  personal preferences.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={IMAGE_PATHS.culinary.diningRoom}
                  alt="Elegant dining room at Lewis Estate"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 md:py-32 bg-lewis-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-subtitle mb-6">SIGNATURE DISHES</h2>
            <h1 className="section-title text-white mb-8">
              Menu Highlights
            </h1>
            <p className="section-description max-w-3xl mx-auto">
              Discover our signature dishes, each carefully crafted to showcase 
              the finest ingredients and complement our exceptional wines.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Truffle Risotto",
                description: "Creamy Arborio rice with black truffle shavings and aged Parmigiano-Reggiano",
                pairing: "Paired with Lewis Chardonnay"
              },
              {
                title: "Wagyu Beef Tenderloin",
                description: "Perfectly seared A5 Wagyu with seasonal vegetables and red wine reduction",
                pairing: "Paired with Lewis Cabernet Sauvignon"
              },
              {
                title: "Lobster Thermidor",
                description: "Fresh Maine lobster in a rich cognac cream sauce with gruyère cheese",
                pairing: "Paired with Lewis Chardonnay"
              },
              {
                title: "Chocolate Soufflé",
                description: "Warm chocolate soufflé with vanilla bean ice cream and berry compote",
                pairing: "Paired with Lewis Late Harvest"
              }
            ].map((dish, index) => (
              <motion.div
                key={dish.title}
                variants={staggerItem}
                className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-lewis-gold/50 transition-colors"
              >
                <h3 className="font-playfair text-xl font-semibold mb-3 text-lewis-gold">
                  {dish.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <p className="text-sm text-lewis-gold font-medium">
                  {dish.pairing}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Types */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-subtitle mb-6">CULINARY EXPERIENCES</h2>
            <h1 className="section-title text-white mb-8">
              Choose Your Journey
            </h1>
            <p className="section-description max-w-3xl mx-auto">
              From intimate wine pairings to grand celebrations, we offer a range 
              of culinary experiences to suit every occasion.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Wine & Food Pairing",
                duration: "2 hours",
                price: "$150 per person",
                description: "A guided tasting experience featuring five wines paired with artisanal small plates."
              },
              {
                title: "Chef's Table",
                duration: "3 hours",
                price: "$250 per person",
                description: "An exclusive dining experience with the chef, featuring a multi-course tasting menu."
              },
              {
                title: "Private Dining",
                duration: "4 hours",
                price: "Custom pricing",
                description: "A completely personalized dining experience for your special occasion or celebration."
              }
            ].map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={staggerItem}
                className="bg-lewis-gray/50 p-8 rounded-lg border border-gray-800 text-center"
              >
                <h3 className="font-playfair text-xl font-semibold mb-4 text-lewis-gold">
                  {experience.title}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Duration</p>
                  <p className="text-white font-medium">{experience.duration}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">Price</p>
                  <p className="text-lewis-gold font-semibold text-lg">{experience.price}</p>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {experience.description}
                </p>
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

      <Footer />
    </main>
  )
}
