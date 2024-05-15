import React from 'react'
import Navbar from './Navbar'
import SuppliesBox from './SuppliesBox'

const SuppliesHero = () => {
    const pageTitle = 'Supplies'
  return (
    <div className='w-full flex flex-col h-screen'>
        <Navbar pageTitle={pageTitle} />
        <div className='ml-[300px]'>
          <SuppliesBox/>
        </div>
    </div>
  )
}

export default SuppliesHero