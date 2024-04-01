import React from 'react'
import { useTheme } from './ThemeContext'
const TradingRules = () => {
  const { isDarkMode } = useTheme()
  return (
    <div
      className='rounded-2xl px-3 py-5  m-5 mt-8'
      style={{
        background:
          'radial-gradient(91.37% 598.89% at 96.69% 9.66%, #2e3bef 0, rgba(128, 134, 229, .79) .01%, #2e3bef 54.69%, rgba(129, 136, 228, .8) 100%), #2e3bef',
      }}
    >
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 py-10 items-center'>
        <div>
          <h4 className='font-bold text-3xl text-white'>
            Stay updated with our in depth trading rules.
          </h4>
          <p className='font-light mt-[2rem] text-gray-300'>
            Trading Objectives are a key element to evaluate a trader's skills,
            meeting the trading objectives proves that the trader is disciplined
            and consistent.
          </p>
          <div className='mt-6'>
            <a
              className='text-black py-4 px-5 text-dark inline-flex item-center gap-2 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm text-center mr-3 md:mr-0'
              href=''
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden='true'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  fill='black'
                  d='M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Trading Rules
            </a>
          </div>
        </div>
        <div className='gap-4 flex md:flex-col justify-center items-center md:mt-0 mt-10'>
          <img
            src='https://fundingpips.com/static/ce9b9780ecf4c36b8bf6d0c858e5ee13/c1096/tradingobjectives.webp'
            alt=''
            style={isDarkMode ? {} : { filter: 'invert(85%)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default TradingRules
