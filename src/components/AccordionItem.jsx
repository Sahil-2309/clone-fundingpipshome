import React, { useState } from 'react'

function AccordionItem({ heading, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h2 id='accordion-arrow-icon-heading-3'>
        <button
          type='button'
          onClick={toggleAccordion}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls='accordion-arrow-icon-body-3'
        >
          <span>{heading}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${isOpen ? 'rotate' : ''}`}
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
        </button>
      </h2>
      <div
        id='accordion-arrow-icon-body-3'
        className={`p-5 ${isOpen ? 'block' : 'hidden'}`}
        aria-labelledby='accordion-arrow-icon-heading-3'
      >
        <p className='mb-2 text-gray-500 dark:text-gray-400'>{content}</p>
      </div>
    </div>
  )
}

export default AccordionItem
