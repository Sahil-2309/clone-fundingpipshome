import React from 'react'
import EvaluationStage from './tables/EvaluationStage'
import Pricing from '../components/tables/Pricing'
import FundedStage from './tables/FundedStage'

const PricingTables = () => {
  return (
    <div className='container m-4 overflow-x-hidden'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-2/3 pr-4'>
          <EvaluationStage />
        </div>
        <div className='w-full md:w-1/3'>
          <FundedStage />
        </div>
      </div>
      <Pricing />
    </div>
  )
}

export default PricingTables
