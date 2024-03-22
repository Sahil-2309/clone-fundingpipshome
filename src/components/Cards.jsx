import React from 'react'

const Cards = () => {
  return (
    <div className='mt-20 px-4 w-full container mx-auto py-24'>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='bg-grey-700 dark:bg-dark border-[1px] border-gray-200 dark:border-gray-600 text-dark rounded-3xl py-6 px-6 flex flex-col hover:border-blue-500 hover:border-blue-500 hover:shadow-xl'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='w-24'>
              <img
                src='https://fundingpips.com/static/f65768512c0f4558e370ff39f71634a1/5f169/notradingrestrictions.webp'
                alt='No Trading restrictions'
                width='500'
                height='500'
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className='font-bold text-2xl text-dark dark:text-white'>
              Trade the way you want
            </div>
          </div>
          <div className='mt-5 font-light text-center text-md text-gray-600 dark:text-gray-300'>
            <p>
              Use an "EA", hold during news, hold trades over the weekend and
              trade lot sizes as big as the leverage allows for.
            </p>
          </div>
        </div>
        <div className='bg-grey-700 dark:bg-dark border-[1px] border-gray-200 dark:border-gray-600 text-dark rounded-3xl py-6 px-6 flex flex-col hover:border-blue-500 hover:dark:border-blue-500 hover:shadow-xl'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='w-24'>
              <img
                src='https://fundingpips.com/static/ac558df791d8a820f9aa706fcbe4a868/ceedb/freeretry.webp'
                alt='Free Retry & Extension'
                width='168'
                height='193'
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className='font-bold text-2xl text-dark dark:text-white'>
              Unlimited Trading Days
            </div>
          </div>
          <div className='mt-5 font-light text-center text-md text-gray-600 dark:text-gray-300'>
            <p>
              We understand that putting a time limit creates a stressful
              environment, therefore we have no minimum or maximum limit on
              trading days. Take all the time you need.
            </p>
          </div>
        </div>
        <div className='bg-grey-700 dark:bg-dark border-[1px] border-gray-200 dark:border-gray-600 text-dark rounded-3xl py-6 px-6 flex flex-col hover:border-blue-500 hover:dark:border-blue-500 hover:shadow-xl'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='w-24'>
              <img
                src='https://fundingpips.com/static/583e1bee03eb070c8b953483981e04ef/53b9b/scalingplan.webp'
                alt='Scaling Plan'
                width='392'
                height='329'
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className='font-bold text-2xl text-dark dark:text-white'>
              Scaling Plan
            </div>
          </div>
          <div className='mt-5 font-light text-center text-md text-gray-600 dark:text-gray-300'>
            <p>
              Scale your way up with us. We increase the account size, Maximum
              Loss, and Maximum Daily Loss to a 14% Maximum Loss and a 7% Daily
              Loss limit. Once the trader receives a 'Hot Seat' at the firm,
              they can trade up to $2 million with on-demand payouts and a
              monthly bonus. Read more about our{' '}
              <a className='underline text-blue-600' href=''>
                Scaling Plan.
              </a>
            </p>
          </div>
        </div>
        <div className='bg-grey-700 dark:bg-dark border-[1px] border-gray-200 dark:border-gray-600 text-dark rounded-3xl py-6 px-6 flex flex-col hover:border-blue-500 hover:dark:border-blue-500 hover:shadow-xl'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='w-24'>
              <img
                src='https://fundingpips.com/static/eb2761374f918d59625938a6336cde82/5f169/payoutsystem.webp'
                alt='Payout System'
                width='500'
                height='500'
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className='font-bold text-2xl text-dark dark:text-white'>
              Payout System
            </div>
          </div>
          <div className='mt-5 font-light text-center text-md text-gray-600 dark:text-gray-300'>
            <p>
              Request your payouts on a 5 trading days basis with a 80% profit
              split. Once a trader earns a Hot Seat in our firm, the trader
              receives on-demand payouts with a 90% profit split.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
