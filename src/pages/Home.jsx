import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import SearchBar from '../components/SearchBar.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'
import RecipeGrid from '../components/RecipeGrid.jsx'
import Footer from '../components/Footer.jsx'
import recipes from '../data/recipes.js'

function Home({ darkMode, toggleTheme }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todas')
  
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesCategory = activeCategory === 'Todas' || recipe.category === activeCategory
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [searchTerm, activeCategory])
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <HeroSection darkMode={darkMode} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkMode={darkMode} />
        <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} darkMode={darkMode} />
        <RecipeGrid recipes={filteredRecipes} darkMode={darkMode} />
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default Home