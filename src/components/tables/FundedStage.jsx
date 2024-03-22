import React from 'react'
import AccordionItem from '../AccordionItem'
import fundedRulesData from './TableData/fundedRulesData'

const FundedStage = () => {
  const trStyles = {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
    letterSpacing: 'normal',
    border: 'none',
    color: '#d1d5db',
    fontWeight: 'normal',
  }

  return (
    <div>
      <div className='col-span-3 px-4 mr-5 '>
        <div className='flex justify-center items-center gap-4'>
          <hr className='border-[1px] w-full border-gray-400' />
          <h4 className='text-bold text-3xl font-bold text-gray-500 dark:text-gray-300 m-6 text-center'>
            Funded stage
          </h4>
          <hr className='border-[1px] w-full border-gray-400' />
        </div>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr style={{ border: 'none' }}>
                <th></th>
                <th
                  className='px-4 py-2 text-left text-base md:text-lg lg:text-xl'
                  style={{
                    color: '#8560e4',
                  }}
                >
                  Master
                </th>
              </tr>
            </thead>
            <tbody className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl'>
              {fundedRulesData.map((rule, index) => (
                <tr key={index} style={trStyles}>
                  <td>
                    <AccordionItem
                      heading={rule.title}
                      content={rule.description}
                    />
                  </td>
                  <td>{rule.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-5 text-center flex items-end justify-center py-3 col-span-2 text-xl border-2 border-blue-500 rounded-lg m-5'>
        <h3 className='flex justify-center items-center gap-2 text-blue-500 font-medium'>
          <p>Refund + Profit Splits</p>
          <div className='text-blue-600 font-medium flex items-center gap-2'>
            <div className='w-fit'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <div className='absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm transition-opacity duration-300 invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700'>
              <div className='relative z-20'>
                Please check{' '}
                <a className='underline' href='/trading-rules/standard-v2/'>
                  trading rules
                </a>{' '}
                page for detailed info
              </div>
              <div className='absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700'>
                &nbsp;
              </div>
            </div>
          </div>
        </h3>
      </div>
    </div>
  )
}

export default FundedStage
