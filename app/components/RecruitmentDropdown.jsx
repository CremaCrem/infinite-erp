'use client';
import React from 'react';

const RecruitmentDropdown = ({ onEdit, onDelete }) => {
  return (
    <div className="dropdown-box w-[110px]">
      <div className="dropdown-item font-Lato hover:bg-gray-200 hover:rounded-[10px] hover:font-bold transition-all duration-200" onClick={onEdit}>
      <img src="/icons/carbon_edit.svg" alt='Dashboard Icon' className='inline-block mr-2 w-[24px]'></img>
        Edit
    </div>
      <div className="dropdown-item font-Lato hover:bg-gray-200 hover:rounded-[10px] hover:font-bold transition-all duration-200" onClick={onDelete}>
      <img src="/icons/carbon_trash-can.svg" alt='Dashboard Icon' className='inline-block mr-2 w-[24px]'></img>
        Delete
    </div>
    </div>
  );
};

export default RecruitmentDropdown;
