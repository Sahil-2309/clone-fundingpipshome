import React from 'react'

const BuyButton = () => {
  return (
    <button className='dark dark:bg-blue-600 md:mr-0 text-white font-medium text-sm text-center py-4 px-3 bg-blue-700 rounded-lg gap-2 items-center flex mr-3 hover:bg-blue-700'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
        className='w-4 h-4 text-white'
      >
        <path
          fillRule='evenodd'
          d='M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z'
          clipRule='evenodd'
        ></path>
      </svg>
      Buy Challenge
    </button>
  )
}

export default BuyButton
