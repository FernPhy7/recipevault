import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Star, ChefHat, CheckCircle, ListOrdered } from 'lucide-react'
import recipes from '../data/recipes.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Detail({ darkMode, toggleTheme }) {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === parseInt(id))
  
  if (!recipe) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-recipe-dark text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="mb-4">Receta no encontrada</p>
          <Link to="/" className="text-recipe-orange hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    )
  }
  
  const difficultyColors = {
    'Facil': 'bg-green-500',
    'Media': 'bg-yellow-500',
    'Dificil': 'bg-red-500',
  }
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-recipe-dark' : 'bg-gray-100'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className={`inline-flex items-center gap-2 mb-6 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-recipe-card' : 'bg-white shadow-lg'}`}>
          <div className={`h-64 sm:h-96 flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <ChefHat className="text-recipe-orange" size={80} />
          </div>
          
          <div className="p-6 sm:p-8">
            <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {recipe.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium text-white ${difficultyColors[recipe.difficulty] || 'bg-recipe-orange'}`}>
                {recipe.difficulty}
              </span>
              <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Clock size={16} />
                {recipe.time}
              </span>
              <span className="flex items-center gap-1 text-recipe-orange">
                <Star size={16} fill="currentColor" />
                <span className="font-bold">{recipe.rating}</span>
                <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>/ 10</span>
              </span>
            </div>
            
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {recipe.description}
            </p>
            
            <div className={`grid md:grid-cols-2 gap-8 ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'} pt-8`}>
              <div>
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <CheckCircle size={20} className="text-recipe-green" />
                  Ingredientes
                </h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="w-2 h-2 rounded-full bg-recipe-orange" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <ListOrdered size={20} className="text-recipe-orange" />
                  Preparacion
                </h3>
                <ol className="space-y-3">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx} className={`flex gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-recipe-orange text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default Detail