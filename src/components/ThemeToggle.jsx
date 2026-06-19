import { Sun, Moon } from 'lucide-react'

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${
        darkMode 
          ? 'bg-recipe-card text-recipe-orange hover:bg-gray-800' 
          : 'bg-white text-recipe-orange hover:bg-gray-100 shadow-md'
      }`}
      aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle
