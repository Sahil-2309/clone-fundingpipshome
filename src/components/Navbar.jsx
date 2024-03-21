import React from 'react'
import { useEffect } from 'react'
import Themebutton from './Themebutton'
import logo from '../assets/logo.png'
import Buybutton from './Buybutton'
const Navbar = () => {
  return (
    <div
      className={`navbar bg-opacity-20 backdrop-filter backdrop-blur-lg bg-base-200 p-4 pl-3 fixed top-0 z-50`}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div className='navbar-start'>
        <a className='font-sans font-poppins text-4xl font-bold flex items-center ml-3'>
          <img
            src={logo}
            alt='logo'
            className='w-10 h-10 filter brightness-0'
            style={{ filter: 'invert(100%)' }}
          />
          <span className='text-white ml-2'>FUNDING PIPS</span>
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul
          className='menu menu-horizontal px-1'
          style={{ lineHeight: '24px' }}
        >
          <li
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              letterSpacing: 'normal',
            }}
          >
            <a className='text-blue-500'>Home</a>
          </li>

          <li
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              letterSpacing: 'normal',
            }}
          >
            <a className='text-gray-400'>Trading Rules</a>
          </li>
          <li
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              letterSpacing: 'normal',
            }}
          >
            <a className='text-gray-400'>FAQ</a>
          </li>
          <li
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              letterSpacing: 'normal',
            }}
          >
            <a className='text-gray-400'>Contact Us</a>
          </li>
          <li>
            <Buybutton />
          </li>
          <li>
            <a className='text-blue-500'>
              Dashboard
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='#3b82f6'
                aria-hidden='true'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z'
                  clipRule='evenodd'
                ></path>
                <path
                  fillRule='evenodd'
                  d='M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Themebutton />
      </div>
    </div>
  )
}

export default Navbar
