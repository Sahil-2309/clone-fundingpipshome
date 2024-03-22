import React from 'react'
import cardData from './cardData'

const Cards = () => {
  return (
    <div
      className='mt-20 px-4 w-full container mx-auto py-24'
      style={{ marginTop: 'calc(5px + 4rem)' }}
    >
      <div className='grid md:grid-cols-2 gap-4'>
        {cardData.map((card) => (
          <div
            key={card.id}
            className='bg-grey-700 dark:bg-dark border-[1px] border-gray-200 dark:border-gray-600 text-dark rounded-3xl py-6 px-6 flex flex-col hover:border-blue-500 hover:dark:border-blue-500 hover:shadow-xl'
            style={{
              position: 'sticky',
              top: '110px',
              backgroundColor: '#1e1e1e',
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
              <div className='font-bold text-2xl text-dark dark:text-white'>
                {card.title}
              </div>
            </div>
            <div className='mt-5 font-light text-center text-md text-gray-600 dark:text-gray-300'>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
