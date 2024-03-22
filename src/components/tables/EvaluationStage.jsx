import React from 'react'
import AccordionItem from '../AccordionItem'
import tradingRulesData from './TableData/tradingRulesData'

const EvaluationStage = () => {
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
          Evaluation stage
        </h4>
        <hr className='border-[1px] w-full border-gray-400' />
      </div>
      <div className='overflow-x-auto'>
        <table className='table w-full' style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ border: 'none' }}>
              <th></th>
              <th
                className='px-4 py-2 text-left text-base md:text-lg lg:text-xl'
                style={{
                  color: '#f5cd7c',
                }}
              >
                Student
              </th>
              <th
                className='px-4 py-2 text-left text-base md:text-lg lg:text-xl'
                style={{
                  color: '#52b696',
                }}
              >
                Practitioner
              </th>
            </tr>
          </thead>
          <tbody className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl'>
            {tradingRulesData.map((rule, index) => (
              <tr key={index} style={trStyles}>
                <td>
                  <AccordionItem
                    heading={rule.title}
                    content={rule.description}
                  />
                </td>
                <td>{rule.student}</td>
                <td>{rule.practitioner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EvaluationStage
