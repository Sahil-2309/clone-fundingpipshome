import React from 'react'
import yahoo from '../assets/yahoo_finance.png'

const Brand = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-[16px] mb-8'>
      <div className='flex justify-center'>
        <div
          style={{
            maxWidth: '250px',
            display: 'block',
          }}
        >
          <img
            alt='Yahoo Finance article'
            role='presentation'
            aria-hidden='true'
            src='https://fundingpips.com/static/ddace0a8b1229ff285ad23a4e7beef96/c2927/insider.webp'
            style={{
              maxWidth: '100%',
              display: 'block',
              position: 'static',
              filter: 'invert(50%)',
              opacity: 0.5,
            }}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <div
          style={{
            maxWidth: '250px',
            display: 'block',
          }}
        >
          <img
            alt='Yahoo Finance article'
            role='presentation'
            aria-hidden='true'
            src='https://fundingpips.com/static/4230a564d3577d13e0a5c1397b931228/c4f8d/bloomberg.webp'
            style={{
              maxWidth: '100%',
              display: 'block',
              position: 'static',
              filter: 'invert(50%)',
              opacity: 0.5,
            }}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <div
          style={{
            maxWidth: '250px',
            display: 'block',
          }}
        >
          <img
            alt='Yahoo Finance article'
            role='presentation'
            aria-hidden='true'
            src={yahoo}
            style={{
              maxWidth: '100%',
              display: 'block',
              position: 'static',
              filter: 'invert(50%)',
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Brand
