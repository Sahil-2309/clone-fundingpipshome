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
const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App
