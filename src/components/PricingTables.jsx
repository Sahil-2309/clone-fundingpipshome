import React from 'react'
import EvaluationStage from './tables/EvaluationStage'
import Pricing from '../components/tables/Pricing'

const PricingTables = () => {
  return (
    <div className='container m-4'>
      <div className='flex'>
        <EvaluationStage />
        <EvaluationStage />
      </div>
      <Pricing />
    </div>
  )
}

export default PricingTables
