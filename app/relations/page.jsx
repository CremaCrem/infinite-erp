import React from 'react'
import Sidebar from '../components/Sidebar'
import EmployeeRelationsPage from '../components/EmployeeRelationsPage'

const RelationsPageHero = () => {
    return (
        <div className="flex">
          <EmployeeRelationsPage/>
          <Sidebar/>
        </div>
      )
    }

export default RelationsPageHero