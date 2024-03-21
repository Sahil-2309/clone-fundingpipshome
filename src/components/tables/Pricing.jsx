import React from 'react'

const Pricing = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 justify-center items-center m-8'>
      <div className='text-center col-span-2'>
        <h3 className='flex justify-center text-blue-600 font-bold mt-2'>
          <div className='text-lg'>$</div>
          <div className='font-extrabold text-5xl'>399</div>
        </h3>
        <div>
          <p className='font-light text-blue-600'>For 100K account</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <a
          href=''
          rel='noreferrer'
          className='md:w-60 w-48 text-white flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-10 py-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
              clipRule='evenodd'
            ></path>
          </svg>
          Buy challenge
        </a>
      </div>
    </div>
  )
}

export default Pricing
