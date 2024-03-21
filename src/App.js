import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Dashboard2 from './components/Dashboard2'
import Platform from './components/Platform'
import TradingRules from './components/TradingRules'
import PricingBanner from './components/PricingBanner'
import PricingTables from './components/PricingTables'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Tail from './components/Tail'
import logo from './assets/logo.png'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Brand />
      <Dashboard2 />
      <Platform />
      <PricingBanner />
      <PricingTables />
      <TradingRules />
      <Cta />
      <Tail />
      <Footer />
      {/* <img
        src={logo}
        alt=''
        className='fixed bottom-4 left-4 text-blue-500 text-xl z-10'
      /> */}
    </div>
  )
}

export default App
