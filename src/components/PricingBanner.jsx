import React, { useState } from 'react'
import { useTheme } from './ThemeContext'
const PricingBanner = () => {
  const [selectedPrice, setSelectedPrice] = useState('$5')

  const handlePriceSelection = (price) => {
    setSelectedPrice(price)
  }
  const { isDarkMode } = useTheme()
  const background = isDarkMode ? '#e5e7eb' : '#303030'
  return (
    <div className='flex flex-col items-center justify-center m-6'>
      <div
        className='flex flex-wrap justify-center items-center rounded-xl p-4'
        style={{ backgroundColor: background }}
      >
        <button
          className={`rounded-lg px-4 py-2 font-medium  ${
            selectedPrice === '$5'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$5')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          $5
        </button>
        <button
          className={`rounded-lg px-4 py-2 font-medium  ${
            selectedPrice === '$10'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$10')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          $10
        </button>
        <button
          className={`rounded-lg px-4 py-2 font-medium ${
            selectedPrice === '$25'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$25')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          $25
        </button>
        <button
          className={`rounded-lg px-4 py-2 font-medium  ${
            selectedPrice === '$50'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$50')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          $50
        </button>
        <button
          className={`rounded-lg px-4 py-2 font-medium  ${
            selectedPrice === '$75'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$75')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          $75
        </button>
        <button
          className={`rounded-lg px-4 py-2 font-medium  ${
            selectedPrice === '$100'
              ? 'bg-blue-600 text-white'
              : isDarkMode
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$100')}
          style={{ transition: 'background-color 0.3s ease' }}
        >
          $100
        </button>
      </div>
    </div>
  )
}

export default PricingBanner
