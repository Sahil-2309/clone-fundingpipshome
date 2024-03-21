import React from 'react'
import Policy from './Policy'
import Form from './Form'

const Tail = () => {
  return (
    <div className='flex flex-col md:flex-row m-7'>
      <div className='flex-1'>
        <Policy />
      </div>
      <div className='flex-1'>
        <Form />
      </div>
    </div>
  )
}

export default Tail
