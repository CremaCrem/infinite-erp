'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeRelationsPreviewBox = () => {
  const [employeeRelationsData, setEmployeeRelationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/relations');
        setEmployeeRelationsData(response.data);
      } catch (error) {
        console.error('Error fetching employee relations data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-[230px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-l-[20px] overflow-y-scroll scrollbar'>
      <h1 className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold'>
        Employee Relations
      </h1>
      <div className='text-LightBlue font-Montserrat flex justify-between px-5 pt-3'>
        <div className='text-lg font-semibold' style={{ width: '20%' }}>Concern</div>
        <div className='text-lg font-semibold' style={{ width: '20%' }}>Date</div>
        <div className='text-lg font-semibold' style={{ width: '20%' }}>Status</div>
      </div>
      <div className='pr-5 pl-5'>
        {employeeRelationsData.map((data, index) => (
          <div key={index} className='text-LightBlue font-Roboto flex justify-between pt-3'>
            <div style={{ width: '20%' }}>{data.subject}</div>
            <div style={{ width: '20%' }}>{new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <div style={{ width: '20%' }}>{data.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeRelationsPreviewBox;
