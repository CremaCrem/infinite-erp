import React from 'react'
import EmployeeRecordPage from '../components/EmployeeRecordPage'
import Sidebar from '../components/Sidebar'

const EmployeeRecordHero = () => {
  return (
    <div className='flex'>
        <EmployeeRecordPage/>
        <Sidebar/>
    </div>
  )
}

export default EmployeeRecordHero