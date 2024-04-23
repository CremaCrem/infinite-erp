import React from 'react'
import Navbar from './Navbar'
import RelationsBox from './RelationsBox'

const EmployeeRelationsPage = () => {
  const pageTitle = 'Relations'
  return (
    <div className='w-full flex flex-col h-screen'>
        <Navbar pageTitle={pageTitle}/>
        <RelationsBox/>
    </div>
  )
}

export default EmployeeRelationsPage