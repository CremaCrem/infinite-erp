import React from 'react'
import Navbar from './Navbar'


const RecruitmentPage = () => {
  const pageTitle = 'Recruitment'
  return (
    <div className='w-full flex flex-col h-screen'>
        <Navbar pageTitle={pageTitle}/>
    </div>
  )
}

export default RecruitmentPage