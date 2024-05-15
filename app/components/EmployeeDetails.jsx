'use client'
import React, { useState } from 'react';
import EditEmployee from './EditEmployee';
import ConfirmationDialog from './ConfirmationDialog';
import { toast } from 'react-toastify'
import axios from 'axios';

const EmployeeDetails = ({ employee, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false)

  const {
    _id,
    employeeFullName,
    employeeDateofBirth,
    employeeAddress,
    employeeProfession,
    employeeContactInfo,
    dateStarted,
    employeeID,
    employeeImage,
    employeeGender,
    employeeEmail,
    employeeAbsences,
    employeePresents,
    employeeSalary,
    employeeTeam,
    employeeSocialLink1,
    employeeSocialLink2,
    employeeSocialLink3
  } = employee;

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return <EditEmployee employee={employee} onClose={() => setIsEditing(false)} />; 
  }

  const handleDeleteClick = () => {
    setIsDelete(true);
  }

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/employee/${employee._id}`);
      toast.success('Recruit successfully deleted!', {
        position: 'top-center',
        autoClose: 800,
      })
      setTimeout(() => {
        window.location.reload();
      }, 1000)
      } catch (error) {
        console.error('Error deleting recruit:', error)
      }
  }

  if (isDelete) {
    return <ConfirmationDialog
      message="Are you sure you want to delete this recruit?"
      onConfirm={confirmDelete}
      onClose={() => setIsDelete(false)}
      icon="/icons/carbon_trash-can.svg"/> 
  }

  const formattedDate = new Date(employeeDateofBirth).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedStartDate = new Date(dateStarted).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const daysWorked = employeePresents - employeeAbsences;
  const imageUrl = employeeImage;

  return (
    <div>
      <div className='h-[800px] w-[1100px] bg-white rounded-[24px] flex flex-col text-Lightlue' onClick={handleClickInside}>
        <div className='mt-4 ml-6 mr-4 mb-8 flex justify-between'>
          <h1 className='font-Montserrat text-LightBlue text-6xl font-semibold mt-2'>Employee Details</h1>
          <img 
            src="/icons/icons8-close.svg" alt='Close Icon' className='p-1 w-[35px] h-[35px] cursor-pointer border-gray-200 bg-gray-200 rounded-full
            hover:bg-red-300 hover:rounded-full transition-all duration-200' 
            onClick={onClose}
          />
        </div>
        <div className='flex justify-start px-10 h-[600px]'>
          <div className='h-[600px] w-[300px] flex flex-col justify-start text-LightBlue'>
            <div className="w-64 h-64 mb-5 border-4 border-LightBlue rounded-full overflow-hidden">
              <img src={imageUrl} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className='text-center'>
              <h3 className='text-2xl font-Montserrat font-semibold mb-10'>Employee ID: {employeeID}</h3>
              <div className='flex justify-center'>
                <a href={employeeSocialLink1} target="_blank" rel="noopener noreferrer">
                  <img className='w-[45px] h-[64px] mx-4' src='/icons/carbon_logo-facebook-LB.svg'/>
                </a>
                <a href={employeeSocialLink2} target="_blank" rel="noopener noreferrer">
                  <img className='w-[45px] h-[64px] mx-4' src='/icons/carbon_logo-linkedin-OG.svg'/>
                </a>
                <a href={employeeSocialLink3} target="_blank" rel="noopener noreferrer">
                  <img className='w-[45px] h-[64px] mx-4' src='/icons/mdi_github.svg'/>
                </a>
              </div>
            </div>
          </div>
          <div className='px-5 py-5 text-LightBlue'>
            <h1 className='text-5xl font-Montserrat mb-2'>{employeeFullName}</h1>
            <h2 className='text-3xl font-Montserrat mb-2'>{employeeProfession}</h2>
            <div className='flex flex-wrap gap-y-10 justify-between'>
              <div className='w-[350px] p-5 rounded-[24px] drop-shadow-xl bg-slate-100'>
                <h4 className='text-2xl mb-3 font-Montserrat font-semibold'>Personal Information</h4>
                <p className='text-xl font-Roboto'>Birth Date: {formattedDate}</p>
                <p className='text-xl font-Roboto'>Address: {employeeAddress}</p>
                <p className='text-xl font-Roboto'>Sex: {employeeGender}</p>
              </div>
              <div className='w-[350px] p-5 rounded-[24px] drop-shadow-xl bg-slate-100'>
                <h4 className='text-2xl mb-3 font-Montserrat font-semibold'>Contacts</h4>
                <p className='text-xl font-Roboto'>Phone Number: {employeeContactInfo}</p>
                <p className='text-xl font-Roboto'>Email: {employeeEmail}</p>
              </div>
              <div className='w-[740px] h-[250px] p-5 rounded-[24px] drop-shadow-xl bg-slate-100'>
                <h4 className='text-2xl mb-3 font-Montserrat font-semibold'>Work Details</h4>
                <div className='flex flex-wrap gap-y-2 justify-between'>
                  <p className='text-xl font-Roboto'>Started At: {formattedStartDate}</p>
                  <p className='text-xl font-Roboto'>Days Worked: {daysWorked}</p>
                  <p className='text-xl font-Roboto'>Absences: {employeeAbsences}</p>
                </div>
                  <br/>
                  <p className='text-xl font-Roboto'>Salary: ${employeeSalary}</p>
                  <p className='text-xl font-Roboto'>Team: {employeeTeam}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center h-[90px] rounded-b-[20px] py-5'>
          <button
            onClick={handleEditClick}
            className='px-[70px] py-1 mx-6 text-2xl font-Lato text-LightBlue border border-NeonGreen rounded-[30px] w-[200px] h-[40px] 
          hover:bg-NeonGreen hover:text-white hover:border-none transition-all duration-200'>
            EDIT
          </button>
          <button 
            onClick={handleDeleteClick}
            className='mx-6 text-2xl font-Lato text-LightBlue border border-NeonGreen rounded-[30px] w-[200px] h-[40px] hover:bg-red-500 hover:text-white hover:border-none transition-all duration-200'>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
