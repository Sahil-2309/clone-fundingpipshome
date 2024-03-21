import React from 'react'
import Dashboard from '../assets/hero2-dashboard.png'

const Dashboard2 = () => {
  return (
    <div className='h-full'>
      <div className='w-full container mx-auto px-4'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 items-center md:mt-0 mt-[3rem]'>
          <div className='hidden md:block'>
            <img
              alt='dashboard2'
              src={Dashboard}
              style={{ filter: 'invert(85%)' }}
              className='w-full'
            />
          </div>
          <div className='md:order-2'>
            <h3 className='font-bold text-[2rem] text-left dark:text-white capitalize'>
              Built by traders for traders.
            </h3>
            <h3 className='font-bold text-[2rem] text-left dark:text-white capitalize'>
              Your trading ideas, our risk.
            </h3>
            <p className='font-light text-[15px] text-left dark:text-gray-400 mt-8'>
              Funding Pips believes that traders go through three main levels in
              their careers, Student - Practitioner - Master, with FP's in
              house-built two phases evaluation (Student - Practitioner) and
              funded (Master), which's built to find trading talents while
              helping them get through their funding problems, by offering them
              the possibility to trade up $300.000.
            </p>
          </div>
          <div className='block md:hidden'>
            <img
              alt='dashboard2'
              src={Dashboard}
              style={{ filter: 'invert(85%)' }}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard2
