import { Search } from 'lucide-react'

function SearchBar({ searchTerm, setSearchTerm, darkMode }) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
        <input
          type="text"
          placeholder="Busca por receta o ingrediente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-12 pr-4 py-3 rounded-xl outline-none transition-all ${
            darkMode 
              ? 'bg-recipe-card text-white placeholder-gray-500 focus:ring-2 focus:ring-recipe-orange' 
              : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:ring-2 focus:ring-recipe-orange shadow-sm'
          }`}
        />
      </div>
    </div>
  )
}

export default SearchBar
