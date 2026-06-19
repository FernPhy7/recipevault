import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { ChefHat } from 'lucide-react'

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      darkMode ? 'bg-recipe-card/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <ChefHat className="text-recipe-orange group-hover:scale-110 transition-transform" size={28} />
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              RecipeVault
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`hover:text-recipe-orange transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Inicio
            </Link>
            <span className={`hover:text-recipe-orange transition-colors cursor-pointer ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Recetas
            </span>
            <span className={`hover:text-recipe-orange transition-colors cursor-pointer ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Destacadas
            </span>
          </div>

          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
