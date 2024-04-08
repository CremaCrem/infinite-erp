import React from 'react'
import RecruitmentPage from '../components/RecruitmentPage'
import Sidebar from '../components/Sidebar'

const RecruitmentPageHero = () => {
  return (
    <div className="flex">
      <RecruitmentPage></RecruitmentPage>
      <Sidebar/>
    </div>
  )
}

export default RecruitmentPageHero