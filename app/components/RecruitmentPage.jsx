import React from 'react'
import Navbar from './Navbar'
import Calendar from './Calendar'
import RecruitmentBox from './RecruitmentBox'
import NewApplicantBox from './NewApplicantBox'

const RecruitmentPage = () => {
  const pageTitle = 'Recruitment'
  return (
    <div className='w-full flex flex-col h-screen'>
        <Navbar pageTitle={pageTitle}/>
        <div className='flex-grow flex ml-[300px]'>
          <div className='w-full flex'>
            <div>
              <RecruitmentBox/>
            </div>
            <div  className='flex flex-col justify-start'>
              <Calendar/>
              <div>
                <NewApplicantBox/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RecruitmentPage