import React from 'react'
import Navbar from './Navbar'
import Calendar from './Calendar'
import TeamAttendanceBox from './TeamAttendanceBox'
import RecruitmentPreviewBox from './RecruitmentPreviewBox';
import EmployeeRelationsPreviewBox from './EmployeeRelationsPreviewBox';
import EmployeeTrainingDevelopmentPreviewBox from './EmployeeTrainingDevelopmentPreviewBox';

const Hero = () => {
  return (
    <div className='w-full flex flex-col h-screen'>
      <Navbar />
      <div className='flex-grow flex'>
        <div className='w-full flex'>
          <div className='flex-grow flex-col ml-[300px] h-[1080px]'>
            <RecruitmentPreviewBox/>
            <EmployeeRelationsPreviewBox/>
            <EmployeeTrainingDevelopmentPreviewBox/>
          </div>
          <div className='flex flex-col justify-start'>
            <Calendar />
            <div className=''>
              <TeamAttendanceBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero