import React from 'react'
import Navbar from './Navbar'
import EmployeeBox from './EmployeeBox'


const EmployeeRecordPage = () => {
  const pageTitle = 'Employee Record'
  return (
    <div className='w-full flex flex-col h-screen'>
        <Navbar pageTitle={pageTitle}/>
        <div className='flex ml-[315px]'>
          <EmployeeBox/>
        </div>
        
    </div>
  )
}

export default EmployeeRecordPage