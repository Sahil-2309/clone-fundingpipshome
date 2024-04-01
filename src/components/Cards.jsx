import React from 'react'
import cardData from './cardData'
import { useTheme } from './ThemeContext'
const Cards = () => {
  const { isDarkMode } = useTheme()
  const backgroundcolor = isDarkMode ? 'white' : '#1e1e1e'
  const textColor = isDarkMode ? 'black' : 'white'
  const detailColor = isDarkMode ? '#4b5563' : '#d1d5db'
  return (
    <div
      className='mt-20 px-4 w-full container mx-auto py-24'
      style={{ marginTop: 'calc(5px + 4rem)' }}
    >
      <div className='grid md:grid-cols-2 gap-4'>
        {cardData.map((card) => (
          <div
            key={card.id}
            className=' dark:bg-dark border-[1px] border-gray-200 dark:border-gray-600 text-dark rounded-3xl py-6 px-6 flex flex-col hover:border-blue-500 hover:dark:border-blue-500 hover:shadow-xl'
            style={{
              position: 'sticky',
              top: '110px',
              backgroundColor: backgroundcolor,
              zIndex: '900',
            }}
          >
            <div className='flex flex-col justify-center items-center gap-4'>
              <div className='w-24'>
                <img
                  src={card.imageUrl}
                  alt={card.alt}
                  loading='lazy'
                  decoding='async'
                />
              </div>
              <div
                className='font-bold text-2xl text-dark'
                style={{ color: textColor }}
              >
                {card.title}
              </div>
            </div>
            <div
              className='mt-5 font-light text-center text-md '
              style={{ color: detailColor }}
            >
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
