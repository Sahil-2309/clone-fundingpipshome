import React from 'react'
import heroImage from '../assets/hero-dashboard.png'
import Buybutton from './Buybutton'
import DiscordButton from './Discordbutton'
import Competition from './Competition'
import { useTheme } from './ThemeContext'
const Hero = () => {
  const { isDarkMode } = useTheme()
  const textColor = isDarkMode ? 'black' : 'white'
  return (
    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 h-[50rem] md:mt-0 pt-[6rem] items-center'>
      <div className='p-4'>
        <h1 className='flex flex-col'>
          <span
            className='text-4xl md:text-5xl lg:text-[80px] font-bold leading-none'
            style={{ color: textColor }}
          >
            Your Skill Is
          </span>

          <span className='text-4xl md:text-5xl lg:text-[80px] text-blue-600 font-bold leading-none'>
            Our Capital.
          </span>
        </h1>

        <p className='mt-6 font-light text-md' style={{ color: textColor }}>
          We risk while you receive up to 90% of the Profit.
        </p>
        <div className='flex flex-wrap justify-start items-center gap-2 mt-5'>
          <Buybutton />
          <DiscordButton />
          <Competition />
        </div>
      </div>
      <div className='p-4'>
        <img
          src={heroImage}
          alt='Dashboard for Funding Pips'
          className='object-cover w-full h-full'
          style={isDarkMode ? {} : { filter: 'invert(85%)' }}
        />
      </div>
    </div>
  )
}

export default Hero
