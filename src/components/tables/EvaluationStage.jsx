import React from 'react'
import AccordionItem from '../AccordionItem'
import tradingRulesData from './TableData/tradingRulesData'
import { useTheme } from '../ThemeContext'
const EvaluationStage = () => {
  const { isDarkMode } = useTheme()
  const colortext = isDarkMode ? 'black' : '#d1d5db'
  const trStyles = {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
    letterSpacing: 'normal',
    border: 'none',
    color: colortext,
    fontweight: '700',
  }
  const colorhead = isDarkMode ? '#6b7280' : '#d1d5db'
  const colorTable = isDarkMode ? '#f9fafb' : '#353535'
  return (
    <div className='col-span-3 px-4 '>
      <div className='flex justify-center items-center gap-4'>
        <hr
          className='border-[1px] w-full'
          style={{ borderColor: colorhead }}
        />
        <h4
          className='text-bold text-3xl font-bold  m-6 text-center'
          style={{ color: colorhead }}
        >
          Evaluation stage
        </h4>
        <hr
          className='border-[1px] w-full '
          style={{ borderColor: colorhead }}
        />
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
          <tbody
            className=' rounded-3xl'
            style={{ backgroundColor: colorTable }}
          >
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
