import { ChefHat, GitBranch } from 'lucide-react'

function Footer({ darkMode }) {
  return (
    <footer className={`mt-auto py-8 ${darkMode ? 'bg-recipe-card border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ChefHat className="text-recipe-orange" size={24} />
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                RecipeVault
              </span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Desarrollado por Kevin | Grado Decimo
            </p>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Navegacion
            </h4>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <li>Inicio</li>
              <li>Recetas</li>
              <li>Destacadas</li>
            </ul>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tecnologias
            </h4>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
            </ul>
            <a href="https://github.com/FernPhy7/recipevault" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-recipe-green hover:text-green-400 transition-colors">
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </div>
        
        <div className={`mt-8 pt-6 text-center text-sm ${darkMode ? 'text-gray-500 border-t border-gray-800' : 'text-gray-400 border-t border-gray-100'}`}>
          © 2025 RecipeVault. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
