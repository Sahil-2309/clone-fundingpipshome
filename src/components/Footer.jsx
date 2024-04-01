import React from 'react'
import { useTheme } from './ThemeContext'

const Footer = () => {
  const { isDarkMode } = useTheme()
  const color = isDarkMode ? '#f3f4f6' : '#303030'
  const textcolor = isDarkMode ? '#6b7280' : '#d1d5db'
  return (
    <div className='px-4 py-6 ' style={{ backgroundColor: color }}>
      <div className='container mx-auto md:flex md:items-center md:justify-center'>
        <span className='text-sm  sm:text-center' style={{ color: textcolor }}>
          © 2024 <a href='https://fundingpips.com/'>Funding Pips</a>. All Rights
          Reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer
