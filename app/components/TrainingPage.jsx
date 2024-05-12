import React from 'react'
import Navbar from './Navbar'
import TrainingBox from './TrainingBox'

const TrainingPage = () => {
    const pageTitle = 'Employee Training'
    return (
      <div className='w-full flex flex-col h-screen'>
          <Navbar pageTitle={pageTitle}/>
          <TrainingBox/>
      </div>
    )
  }

export default TrainingPage