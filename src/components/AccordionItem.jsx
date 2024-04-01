import React, { useState } from 'react'

const AccordionItem = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h2>
        <button
          type='button'
          onClick={toggleAccordion}
          aria-expanded={isOpen ? 'true' : 'false'}
          className='flex gap-2'
        >
          <svg
            className={`w-3 h-3 transition-transform transform ${
              isOpen ? '' : 'rotate-180'
            }`}
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5 5 1 1 5'
            />
          </svg>
          <span> {heading}</span>
        </button>
      </h2>
      <div className={`p-5 ${isOpen ? 'block' : 'hidden'}`}>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>{content}</p>
      </div>
    </div>
  )
}

export default AccordionItem
