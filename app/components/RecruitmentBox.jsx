'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecruitmentDropdown from './RecruitmentDropdown';
import ResumePDF from './ResumePDF';
import ApplicantInfoBox from './ApplicantInfoBox';

const RecruitmentBox = () => {
  const [recruitmentData, setRecruitmentData] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecruit, setSelectedRecruit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recruit');
        setRecruitmentData(response.data); 
      } catch (error) {
        console.error('Error fetching recruitment data:', error);
      }
    };
 
    fetchData();
  }, []);

  const handleRecruitClick = (index) => {
    setSelectedRecruit(recruitmentData[index]);
  };

  const handleEdit = () => {
    console.log('Edit clicked');
    setIsModalOpen(true)
  };

  const handleDelete = () => {
    console.log('Delete clicked');
  };

  return (
    <div className='flex flex-col'>
      <div className='h-[450px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-[20px]'>
        <h1 className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold'>
          Recruitment Progress
        </h1>
        <div className='pr-5 pl-5'>
          <div className='text-LightBlue font-Montserrat flex justify-between pt-3 mr-[100px]'>
            <div className='text-lg font-bold' style={{ width: '20%' }}>Full Name</div>
            <div className='text-lg font-bold' style={{ width: '10%' }}>Profession</div>
            <div className='text-lg font-bold' style={{ width: '20%' }}>Status</div>
          </div>
          
          {recruitmentData.map((data, index) => (
            <div key={index} className='text-LightBlue font-Montserrat flex justify-between pt-3 mr-[100px]' onMouseLeave={() => setHoverIndex(null)}>
              <div style={{ width: '30%', position: 'relative' }} onClick={() => handleRecruitClick(index)}>
                {data.recruitFullName}
                <img 
                  src="/icons/carbon_overflow-menu-vertical.svg" 
                  alt='Overflow Menu Icon' 
                  className={`inline-block ml-5 ${hoverIndex === index ? 'shift-left' : ''}`}
                  style={{ position: 'absolute', top: '50%', left: '300%', transform: 'translateY(-50%)' }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onClick={handleEdit}
                />
                {hoverIndex === index && (
                  <RecruitmentDropdown
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                )}
              </div>
              <div style={{ width: '20%' }}>{data.desiredProfession}</div>
              <div style={{ width: '20%' }}>{data.recruitmentStatus}</div>
            </div>
          ))}
        </div>
        {/* Modal Screen */}
        {isModalOpen && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-10'>
            <ResumePDF isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        )}
      </div>
      {selectedRecruit && (
        <div className=''>
          <ApplicantInfoBox
            name={selectedRecruit.recruitFullName}
            contactInfo={selectedRecruit.recruitContactInfo}
            picturePath={selectedRecruit.recruitPicture}
            resumePath={selectedRecruit.pdf}
            profession={selectedRecruit.desiredProfession}
          />
        </div>
      )}
    </div>
  );
};

export default RecruitmentBox;
