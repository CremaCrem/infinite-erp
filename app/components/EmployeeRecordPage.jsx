import React from 'react'
import Navbar from './Navbar'
import ResumePDF from './ResumePDF'


const EmployeeRecordPage = () => {
  const pageTitle = 'Employee Record'
  return (
    <div className='w-full flex flex-col h-screen'>
        <Navbar pageTitle={pageTitle}/>
        <div className='flex justify-center'>
            <ResumePDF/>
        </div>
        
    </div>
  )
}

export default EmployeeRecordPage