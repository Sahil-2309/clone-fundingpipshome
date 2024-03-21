import React, { useState } from 'react'

const Platform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Matchtrader')

  const handlePlatformSelection = (platform) => {
    setSelectedPlatform(platform)
  }

  return (
    <div className='flex flex-wrap flex-col md:flex-row items-center justify-center mx-6 my-3 mt-5'>
      <div className='flex gap-4 justify-center items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg  rounded-xl p-4'>
        <button
          className={`rounded-lg px-6 py-2 font-medium ${
            selectedPlatform === 'Matchtrader'
              ? 'bg-blue-600 text-white'
              : 'text-white'
          }`}
          onClick={() => handlePlatformSelection('Matchtrader')}
        >
          Matchtrader
        </button>
        <button
          className={`rounded-lg px-3 py-2 font-medium ${
            selectedPlatform === 'cTrader'
              ? 'bg-blue-600 text-white'
              : 'text-white'
          }`}
          onClick={() => handlePlatformSelection('cTrader')}
        >
          cTrader
        </button>
      </div>
    </div>
  )
}

export default Platform
