import React from 'react'
import SuppliesHero from '../components/SuppliesHero'
import SuppliesSideBar from '../components/SuppliesSideBar'

const SuppliesPageHero = () => {
  const pageTitle = 'Supplies'
  return (
    
    <div className='flex'>
      <SuppliesHero/>
      <SuppliesSideBar/>
    </div>
  )
}

export default SuppliesPageHero