import React from 'react'
import Sidebar from '../components/Sidebar'
import TrainingPage from '../components/TrainingPage'

const TrainingPageHero = () => {
  return (
    <div className='flex'>
        <TrainingPage/>
        <Sidebar/>
    </div>
  )
}

export default TrainingPageHero