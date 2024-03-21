import React from 'react'
import BuyButton from './Buybutton'
import DiscordButton from './Discordbutton'
const Cta = () => {
  return (
    <div
      className='rounded-[2rem] p-8 m-5 mt-8'
      style={{
        background:
          'radial-gradient(91.37% 598.89% at 96.69% 9.66%, #2e3bef 0, rgba(128, 134, 229, .79) .01%, #2e3bef 54.69%, rgba(129, 136, 228, .8) 100%), #2e3bef',
      }}
    >
      <h4 className='text-white font-bold text-3xl'>
        Join A Team Of Skillful Traders
      </h4>
      <p className='text-gray-300 font-light mt-4'>
        When it comes to trading we believe in consistency and risk management,
        which are the discipline indicator, the rest of the skills can be
        developed. Please keep that in mind! We are seeking real traders not
        bounty hunters.
      </p>
      <div className='flex flex-wrap md:justify-start justify-center items-center md:gap-2 gap-0 m-2'>
        <BuyButton />
        <DiscordButton />
      </div>
    </div>
  )
}

export default Cta
