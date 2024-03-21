import React from 'react'

const Form = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col justify-between gap-4 items-center bg-white bg-opacity-10 backdrop-filter dark:bg-dark-light rounded-3xl px-4 py-7'>
        <div className='md:w-1/2 w-full'>
          <label className='bg-grey dark:text-white text-xl'>
            Newsletter signup
          </label>
        </div>
        <div className='md:w-1/2 w-full'>
          <div className='relative'>
            <input
              type='text'
              name='email'
              className='block w-full p-4 text-sm text-dark border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Enter your email'
              required
              style={{ backgroundColor: '#1e1e1e' }}
            />
            <button className='text-bg-grey-700 absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden='true'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 items-start mt-4 px-2'>
        <div className='flex flex-col items-start'>
          <h2 className='mb-6 mt-4 text-sm font-bold text-blue-600 uppercase'>
            Legal
          </h2>
          <ul className='text-gray-500 dark:text-gray-400 text-left'>
            <li className='mb-4'>
              <a
                target='_blank'
                href=''
                rel='noreferrer'
                className='hover:underline'
              >
                Privacy Policy
              </a>
            </li>
            <li className='mb-4'>
              <a
                target='_blank'
                href=''
                rel='noreferrer'
                className='hover:underline'
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='mb-6 mt-4 text-sm font-bold text-blue-600 uppercase'>
            Useful Links
          </h2>
          <ul className='text-gray-500 dark:text-gray-400 text-left'>
            <li className='mb-4'>
              <a aria-current='page' className='hover:underline' href='/'>
                Home
              </a>
            </li>
            <li className='mb-4'>
              <a className='hover:underline' href=''>
                FAQs
              </a>
            </li>
            <li className='mb-4'>
              <a className='hover:underline' href=''>
                Trading Rules
              </a>
            </li>
            <li className='mb-4'>
              <a className='hover:underline' href=''>
                Affiliate Program
              </a>
            </li>
            <li className='mb-4'>
              <a className='hover:underline' href=''>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Form
