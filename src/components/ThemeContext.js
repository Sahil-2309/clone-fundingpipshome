import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
    console.log(isDarkMode)
  }

  const theme = {
    backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
    backdropFilter: isDarkMode ? 'backdrop-blur-lg' : 'e5e7eb',
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
