'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecruitmentPreviewBox = () => {
  const [recruitmentData, setRecruitmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/recruit`);
        console.log(response.data)
        setRecruitmentData(response.data);
      } catch (error) {
        console.error('Error fetching recruitment data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-[230px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-l-[20px] overflow-y-scroll scrollbar'>
      <h1 className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold'>
        Recruitment Progress 
      </h1>
      <div className='text-LightBlue font-Montserrat flex justify-between px-5 pt-3'>
        <div className='text-lg font-semibold' style={{ width: '20%' }}>Full Name</div>
        <div className='text-lg font-semibold' style={{ width: '25%' }}>Profession</div>
        <div className='text-lg font-semibold' style={{ width: '20%' }}>Status</div>
      </div>
      <div className='pr-5 pl-5'>
        {recruitmentData.map((data, index) => (
          <div key={index} className='text-LightBlue font-Roboto flex justify-between pt-3'>
            <div style={{ width: '20%' }}>{data.recruitFullName}</div>
            <div style={{ width: '25%' }}>{data.desiredProfession}</div>
            <div style={{ width: '20%' }}>{data.recruitmentStatus}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentPreviewBox;
