const categories = ['Todas', 'Desayuno', 'Almuerzo', 'Cena', 'Postre']

function CategoryFilter({ activeCategory, setActiveCategory, darkMode }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-recipe-orange text-white shadow-lg shadow-orange-500/30'
              : darkMode
                ? 'bg-recipe-card text-gray-300 hover:bg-gray-800'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
