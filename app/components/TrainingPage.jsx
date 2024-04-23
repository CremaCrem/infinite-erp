import React from 'react'
import Navbar from './Navbar'

const TrainingPage = () => {
    const pageTitle = 'Employee Training'
    return (
      <div className='w-full flex flex-col h-screen'>
          <Navbar pageTitle={pageTitle}/>
      </div>
    )
  }

export default TrainingPage