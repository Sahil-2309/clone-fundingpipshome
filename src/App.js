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
import Cards from './components/Cards'
import { useTheme } from './components/ThemeContext'
const App = () => {
  const { isDarkMode } = useTheme()
  return (
    <div
      className='main overflow-x-hidden'
      style={isDarkMode ? {} : { background: '#1e1e1e' }}
    >
      <Navbar />
      <Hero />
      <Brand />
      <Dashboard2 />
      <Cards />
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
