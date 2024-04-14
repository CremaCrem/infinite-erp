import React from 'react'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Hero/>
        <Sidebar/>
    </div>
  )
}

export default Dashboard