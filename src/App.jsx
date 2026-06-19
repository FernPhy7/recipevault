import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('recipevault-theme')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('recipevault-theme', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-recipe-dark text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route path="/recipe/:id" element={<Detail darkMode={darkMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App