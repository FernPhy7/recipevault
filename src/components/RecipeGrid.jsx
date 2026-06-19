import RecipeCard from './RecipeCard.jsx'

function RecipeGrid({ recipes, darkMode }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Todas las Recetas
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} darkMode={darkMode} />
        ))}
      </div>
      
      {recipes.length === 0 && (
        <div className="text-center py-16">
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            No se encontraron recetas 😕
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Intenta con otra busqueda o categoria
          </p>
        </div>
      )}
    </section>
  )
}

export default RecipeGrid
