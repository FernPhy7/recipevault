import { motion } from 'framer-motion'
import { ChevronRight, Utensils } from 'lucide-react'

function HeroSection({ darkMode }) {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Descubre recetas{' '}
            <span className="text-recipe-orange">deliciosas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-6 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Explora recetas faciles y deliciosas para cada momento del dia. Desde desayunos rapidos hasta cenas especiales.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 flex items-center gap-2 bg-recipe-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Explorar Recetas
            <ChevronRight size={20} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`hidden md:flex items-center justify-center h-80 rounded-2xl ${darkMode ? 'bg-recipe-card' : 'bg-white shadow-lg'}`}
        >
          <Utensils className="text-recipe-orange" size={80} />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
