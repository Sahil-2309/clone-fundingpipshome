import React, { useState } from 'react'
import { useTheme } from './ThemeContext'
const Platform = () => {
  const { isDarkMode } = useTheme()
  const [selectedPlatform, setSelectedPlatform] = useState('Matchtrader')

  const handlePlatformSelection = (platform) => {
    setSelectedPlatform(platform)
  }
  const background = isDarkMode ? '#e5e7eb' : '#303030'

  return (
    <div className='flex flex-wrap flex-col md:flex-row items-center justify-center m-8'>
      <div
        className='flex gap-4 justify-center items-center  rounded-xl p-4'
        style={{ backgroundColor: background }}
      >
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPlatform === 'Matchtrader'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }
          }`}
          onClick={() => handlePlatformSelection('Matchtrader')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          Matchtrader
        </button>
        <button
          className={`rounded-lg px-3 py-2 font-medium ${
            selectedPlatform === 'cTrader'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => handlePlatformSelection('cTrader')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          cTrader
        </button>
      </div>
    </div>
  )
}

export default Platform
