import React, { useState } from 'react'

const Pricing = () => {
  const [selectedPrice, setSelectedPrice] = useState('$5')

  const handlePriceSelection = (price) => {
    setSelectedPrice(price)
  }

  return (
    <div className='flex flex-wrap flex-col md:flex-row items-center justify-center mx-6 mb-4'>
      <div className='flex gap-4 justify-center items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4'>
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPrice === '$5' ? 'bg-blue-600 text-white' : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$5')}
        >
          $5
        </button>
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPrice === '$10' ? 'bg-blue-600 text-white' : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$10')}
        >
          $10
        </button>
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPrice === '$25' ? 'bg-blue-600 text-white' : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$25')}
        >
          $25
        </button>
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPrice === '$50' ? 'bg-blue-600 text-white' : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$50')}
        >
          $50
        </button>
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPrice === '$75' ? 'bg-blue-600 text-white' : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$75')}
        >
          $75
        </button>
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPrice === '$100' ? 'bg-blue-600 text-white' : 'text-white'
          }`}
          onClick={() => handlePriceSelection('$100')}
        >
          $100
        </button>
      </div>
    </div>
  )
}

export default Pricing
