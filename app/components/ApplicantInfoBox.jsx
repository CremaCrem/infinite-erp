'use client';
import React from 'react';

const ApplicantInfoBox = ({ name, contactInfo, picturePath, resumePath }) => {
  return (
    <div className='h-[260px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-[20px]'>
      <h1 className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-semibold'>
        Applicant Information
        <div className='flex justify-start'>
          <img src={picturePath} alt='Applicant Pic' className='w-[175px] h-[175px] ml-5 mr-5 mb-5 mt-2 rounded-xl'></img>
          <div>
            <h1 className='text-[20px] mt-2 font-normal'>
              {name}
            </h1>
            <h2 className='text-[20px] flex gap-x-5 font-normal'>
              Contact Info: {contactInfo}
            </h2>
            <h2 className='text-[20px] flex gap-x-5 font-normal'>
              Resume: 
              <a href={resumePath} target="_blank" rel="noopener noreferrer">
                <img src='/icons/mdi_resume.svg' alt="Resume" className='w-7 cursor-pointer' />
              </a>
            </h2>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default ApplicantInfoBox;
