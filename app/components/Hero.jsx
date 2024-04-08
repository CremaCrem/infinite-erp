import React from 'react'
import Navbar from './Navbar'
import Calendar from './Calendar'

const Hero = () => {
  return (
    <div 
      style={{
      height:'100vh' 
      }}
      className='w-full'
    >
      <div
        
      >
        <Navbar></Navbar>
        
      </div>
      <div className=''>
        <Calendar></Calendar>
      </div>
    </div>
    
    
  )
}

export default Hero