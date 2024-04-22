'use client'
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import ConfirmationDialog from './ConfirmationDialog';

const EditEmployee = ({ onClose, employee }) => {
  const [name, setName] = useState(employee.employeeFullName)
  const [profession, setProfession] = useState(employee.employeeProfession) 
  const [contact, setContact] = useState(employee.employeeContactInfo)
  const [email, setEmail] = useState(employee.employeeEmail)
  const [bday, setBday] = useState(employee.employeeDateofBirth)
  const [address, setAddress] = useState(employee.employeeAddress)
  const [gender, setGender] = useState(employee.employeeGender)
  const [presents, setPresents] = useState(employee.employeePresents)
  const [absences, setAbsences] = useState(employee.employeeAbsences)
  const [team, setTeam] = useState(employee.employeeTeam)
  const [salary, setSalary] = useState(employee.employeeSalary)
  const [picture, setPicture] = useState(null)
  const [showEditConfirmation, setShowEditConfirmation] = useState(false)

  useEffect(() => {
    if (employee) {
      setName(employee.employeeFullName || '')
      setProfession(employee.employeeProfession || '')
      setContact(employee.employeeContactInfo || '')
      setEmail(employee.employeeEmail || '')
      setBday(employee.employeeDateofBirth || '')
      setGender(employee.employeeGender || '')
      setAddress(employee.employeeAddress || '')
      setPresents(employee.employeePresents || '')
      setAbsences(employee.employeeAbsences || '')
      setTeam(employee.employeeTeam || '')
      setSalary(employee.employeeSalary || '')
    }
  }, [employee])

  const handleClickInside = (event) => {
    event.stopPropagation();
  };
  
  const {
    employeeSocialLink1,
    employeeSocialLink2,
    employeeSocialLink3
  } = employee;

  const imageUrl = employee.employeeImage;

  const submitForm = async (e) => {
    e.preventDefault();
    setShowEditConfirmation(true);
  };

  const confirmEdit = async () => {
    setShowEditConfirmation(false);
    const formData = new FormData();
    formData.append('name', name)
    formData.append('profession', profession)
    formData.append('contact', contact)
    formData.append('email', email)
    formData.append('bday', bday)
    formData.append('address', address)
    formData.append('gender', gender)
    formData.append('presents', presents)
    formData.append('absences', absences)
    formData.append('team', team)
    formData.append('salary', salary)
    if (picture) {
        formData.append('picture', picture);
    }
    console.log(picture)
    formData.get('picture')

    try {
        const response = await axios.put(`http://localhost:5000/employee/${employee._id}`, formData);
        console.log('Employee updated:', response.data);
        // Show success toast
        toast.success('Recruit successfully edited!', {
            position: 'top-center',
            autoClose: 900,
        });
        // Reload the page after successful update
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } catch (error) {
        console.error('Error updating recruit:', error);
    }
  };

  const cancelEdit = () => {
    setShowEditConfirmation(false) 
  }

  const formattedDate = new Date(employee.employeeDateofBirth).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedStartDate = new Date(employee.dateStarted).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div 
    onClick={handleClickInside}
    className='h-[800px] w-[1100px] bg-white rounded-[24px] flex flex-col text-Lightlue'>
      <div className='mt-4 ml-6 mr-4 mb-8 flex justify-between'>
        <h1 className='font-Montserrat text-LightBlue text-6xl font-semibold mt-2'>Edit Employee Details</h1>
        <img 
          src="/icons/icons8-close.svg" alt='Close Icon' className='p-1 w-[35px] h-[35px] cursor-pointer border-gray-200 bg-gray-200 rounded-full
          hover:bg-red-300 hover:rounded-full transition-all duration-200' 
          onClick={onClose}
        />
      </div>
      <form onSubmit={submitForm}>
          <div className='flex justify-start px-10 h-[600px]'>
            <div className='h-[600px] w-[300px] flex flex-col justify-start text-LightBlue'>
              <div className="w-64 h-64 mb-5 border-4 border-LightBlue rounded-full overflow-hidden">
                <img src={imageUrl} alt="Employee" className="w-full h-full object-cover" />
              </div>
              <input
                type='file'
                className='border border-black h-[30px] w-[250px] mb-4 rounded-xl font-Montserrat' 
                accept='image/png, image/jpeg'
                onChange={(e) => setPicture(e.target.files[0])}
              />
              <div className='text-center'>
                <h3 className='text-2xl font-Montserrat font-semibold mb-10'>Employee ID: {employee.employeeID}</h3>
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
              <input 
                type='text'
                placeholder={employee.employeeFullName}
                value={name}
                className='text-5xl font-Montserrat mb-2 rounded-[24px] w-[740px] px-2 bg-slate-100 drop-shadow-lg'
                onChange={(e) => setName(e.target.value)}/>
              <input 
                type='text'
                placeholder={employee.employeeProfession}
                value={profession}
                className='text-3xl font-Montserrat mb-2 rounded-[24px] w-[740px] px-2 bg-slate-100 drop-shadow-lg'
                onChange={(e) => setProfession(e.target.value)}/>
              <div className='flex flex-wrap gap-y-6 justify-between'>
                <div className='w-[350px] p-5 rounded-[24px] drop-shadow-xl bg-slate-100'>
                  <h4 className='text-2xl mb-3 font-Montserrat font-semibold'>Personal Information</h4>
                  <input
                    type='date'
                    value={bday}
                    className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-full'
                    onChange={(e) => setBday(e.target.value)}/>
                  <input 
                    type='text'
                    placeholder={employee.employeeAddress}
                    value={address}
                    className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-full'
                    onChange={(e) => setAddress(e.target.value)}/>
                  <input
                    type='text'
                    placeholder={employee.employeeGender}
                    value={gender}
                    className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-full'
                    onChange={(e) => setGender(e.target.value)}/>
                </div>
                <div className='w-[350px] p-5 rounded-[24px] drop-shadow-xl bg-slate-100'>
                  <h4 className='text-2xl mb-3 font-Montserrat font-semibold'>Contacts</h4>
                  <input 
                    type='text'
                    placeholder={employee.employeeContactInfo}
                    value={contact}
                    className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-full'
                    onChange={(e) => setContact(e.target.value)}/>
                  <input 
                    type='text'
                    placeholder={employee.employeeEmail}
                    value={email}
                    className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-full'
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='w-[740px] h-[250px] p-5 rounded-[24px] drop-shadow-xl bg-slate-100'>
                  <h4 className='text-2xl mb-3 font-Montserrat font-semibold'>Work Details</h4>
                  <div className='flex flex-wrap gap-y-2 justify-between'>
                    <div className='flex flex-col'>
                      <p className='text-xl font-Roboto'>Started At: {formattedStartDate}</p>
                      <span className='text-xl'>Salary</span>
                      <input
                        type='number'
                        placeholder={employee.employeeSalary}
                        value={salary}
                        className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-[130px]'
                        onChange={(e) => setSalary(e.target.value)}/>
                      <span className='text-xl'>Team</span>
                      <input
                        type='text'
                        placeholder={employee.employeeTeam}
                        value={team}
                        className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-[150px]'
                        onChange={(e) => setTeam(e.target.value)}/>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-xl font-Roboto'>Days Present</span>
                      <input 
                        type='number'
                        placeholder={employee.employeePresents}
                        value={presents}
                        className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-[130px]' 
                        onChange={(e) => setPresents(e.target.value)}/>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-xl font-Roboto'>Days Absent</span>
                      <input 
                        type='number'
                        placeholder={employee.employeeAbsences}
                        value={absences}
                        className='text-xl font-Roboto rounded-xl my-1 bg-gray-300 px-3 w-[130px]' 
                        onChange={(e) => setAbsences(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showEditConfirmation && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10'>
            <ConfirmationDialog
              message="Are you sure you want to edit this recruit?"
              onConfirm={confirmEdit}
              onCancel={cancelEdit}
              onClose={() => setShowEditConfirmation(false)}
              icon="/icons/carbon_trash-can.svg"
            />
          </div>
          )}
          <div className='flex justify-center h-[90px] rounded-b-[20px] py-5'>
            <button 
                className='px-[20px] py-1 mx-6 text-2xl font-Lato text-LightBlue border border-NeonGreen rounded-[30px] w-[200px] h-[40px] 
                hover:bg-NeonGreen hover:text-white hover:border-none transition-all duration-200' 
                type="submit">
                Submit
            </button>
            <button 
                onClick={onClose}
                className='px-[20px] py-1 mx-6 text-2xl font-Lato text-LightBlue border border-NeonGreen rounded-[30px] w-[200px] h-[40px] 
                hover:bg-NeonGreen hover:text-white hover:border-none transition-all duration-200' 
                type="button">
                Cancel
            </button>
          </div>
        </form>
    </div>
  )
}

export default EditEmployee;
