import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Star, ChefHat } from 'lucide-react'

function RecipeCard({ recipe, darkMode }) {
  const difficultyColors = {
    'Facil': 'bg-green-500',
    'Media': 'bg-yellow-500',
    'Dificil': 'bg-red-500',
  }
  
  const badgeColor = difficultyColors[recipe.difficulty] || 'bg-recipe-orange'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`rounded-xl overflow-hidden transition-shadow ${
        darkMode 
          ? 'bg-recipe-card hover:shadow-xl hover:shadow-orange-500/10' 
          : 'bg-white hover:shadow-xl border border-gray-100'
      }`}
    >
      <Link to={`/recipe/${recipe.id}`}>
        <div className={`h-48 flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <ChefHat className="text-recipe-orange" size={48} />
        </div>
        
        <div className="p-4">
          <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {recipe.shortTitle}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${badgeColor}`}>
              {recipe.difficulty}
            </span>
            <span className={`flex items-center gap-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Clock size={12} />
              {recipe.time}
            </span>
          </div>
          
          <div className={`flex items-center justify-between text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <span>{recipe.category}</span>
            <span className="flex items-center gap-1 text-recipe-orange">
              <Star size={14} fill="currentColor" />
              {recipe.rating}
            </span>
          </div>
          
          <p className="mt-3 text-recipe-orange text-sm font-medium">
            Ver receta →
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default RecipeCard
