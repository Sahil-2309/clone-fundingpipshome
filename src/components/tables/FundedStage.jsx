import React from 'react'
import AccordionItem from '../AccordionItem'
import tradingRulesData from './TableData/tradingRulesData'

const FundedStage = () => {
  const trStyles = {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
    letterSpacing: 'normal',
    border: 'none',
    color: '#d1d5db',
    fontweight: 'normal',
  }

  return (
    <div className='col-span-3 px-4 '>
      <div className='flex justify-center items-center gap-4'>
        <hr className='border-[1px] w-full border-gray-400' />
        <h4 className='text-bold text-3xl font-bold text-gray-500 dark:text-gray-300 m-6 text-center'>
          Funded stage
        </h4>
        <hr className='border-[1px] w-full border-gray-400' />
      </div>
      <div className='overflow-x-auto'>
        <table
          className='table bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl '
          style={{ borderCollapse: 'collapse' }}
        >
          <thead>
            <tr style={{ border: 'none' }}>
              <th></th>
              <th
                style={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  textAlign: 'start',
                  letterSpacing: 'normal',
                  color: '8560e4',
                }}
              >
                Master
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

export default FundedStage
