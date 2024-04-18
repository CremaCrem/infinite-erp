'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MAX_APPLICANTS = 7;

const NewApplicantBox = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchRecentApplicants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recent-applicants');
        setApplicants(response.data.slice(0, MAX_APPLICANTS)); // Limit to MAX_APPLICANTS
      } catch (error) {
        console.error('Error fetching recent applicants:', error);
      }
    };

    fetchRecentApplicants();
  }, []);

  return (
    <div className='text-white h-[260px] w-[500px] bg-white rounded-[20px] mt-1 flex flex-col'>
      <h1 className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold'>
        New Applicants
      </h1>
      <div className='px-5 pt-3 flex flex-col' style={{ overflowY: 'auto' }}>
        {applicants.map((applicant, index) => (
          <div key={index} className='mb-2 flex items-center'>
            <img
              src={applicant.recruitPicture}
              alt='Profile'
              className='h-12 w-12 rounded-full mr-4'
            />
            <div>
              <p className='text-lg font-Montserrat text-LightBlue'>{applicant.recruitFullName}</p>
              <p className='text-sm font-Montserrat text-gray-500'>{applicant.desiredProfession}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewApplicantBox;

