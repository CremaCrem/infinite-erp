'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios'

const EditRecruitModal = ({ recruit, onClose, recruitId }) => {
    const [name, setName] = useState(recruit.recruitFullName || '');
    const [position, setPosition] = useState(recruit.desiredProfession || '');
    const [status, setStatus] = useState(recruit.recruitmentStatus || '');
    const [contact, setContact] = useState(recruit.recruitContactInfo || '');
    const [picture, setPicture] = useState(null);
    const [file, setFile] = useState(null);
  
    useEffect(() => {
      setName(recruit.recruitFullName || '');
      setPosition(recruit.desiredProfession || '');
      setStatus(recruit.recruitmentStatus || '');
      setContact(recruit.recruitContactInfo || '');
    }, [recruit]);
  
    const submitForm = async (e) => {
        e.preventDefault();
    
        console.log('Submitting form...');
        
        console.log('Name:', name);
        console.log('Position:', position);
        console.log('Status:', status);
        console.log('Contact:', contact);
        console.log('Picture:', picture);
        console.log('File:', file);
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('position', position);
        formData.append('status', status);
        formData.append('contact', contact);
        if (picture) {
            formData.append('picture', picture);
        }
        if (file) {
            formData.append('file', file);
        }
        console.log( name, position, status, contact)
    
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        
        
        try {
            const response = await axios.put(`http://localhost:5000/recruit/${recruitId}`, formData);
            console.log('Recruit updated:', response.data);
            onClose();
        } catch (error) {
            console.error('Error updating recruit:', error);
        }
        
    }
    

  return (
    <div className='h-[590px] w-[500px] bg-white rounded-[20px]'>
        <div className='mt-2 ml-2 mr-2 flex justify-end'>
            <img 
                src="/icons/icons8-close.svg" alt='Close Icon' className='w-8 cursor-pointer 
                hover:bg-red-300 hover:rounded-[10px] transition-all duration-200' 
                onClick={onClose}
            />
        </div>
        <form className='text-LightBlue  mt-1 flex justify-center flex-col items-center' onSubmit={submitForm}>
            <h1 className='text-2xl font-Montserrat font-bold m-5'>Edit Info</h1>
            <input 
                type="text" 
                className='border border-black h-[50px] rounded-[20px] placeholder-top-5 placeholder-left-10' 
                placeholder='Full Name' onChange={(e) => setName(e.target.value)}>
            </input>
            <br></br>
            <input 
                type="text" 
                className='border border-black h-[50px] rounded-[20px] placeholder-top-5 placeholder-left-10' 
                placeholder='Desired Position' 
                onChange={(e) => setPosition(e.target.value)}>
            </input>
            <br></br>
            <input 
                type="text" 
                className='border border-black h-[50px] rounded-[20px] placeholder-top-5 placeholder-left-10' 
                placeholder='Recruitment Status' 
                onChange={(e) => setStatus(e.target.value)}>
            </input>
            <br></br>
            <input 
                type="text" 
                className='border border-black h-[50px] rounded-[20px] placeholder-top-5 placeholder-left-10' 
                placeholder='Contact Info' 
                onChange={(e) => setContact(e.target.value)}>
            </input>
            <br></br>
            <input 
                type="file" 
                className='border border-black h-[30px] w-[300px] rounded-xl' 
                accept='image/png, image/jpeg' 
                onChange={(e) => setPicture(e.target.files[0])}>
            </input>
            <br></br>
            <input 
                type="file" 
                className='border border-black h-[30px] w-[300px] rounded-xl' 
                accept='application/pdf' 
                onChange={(e) => setFile(e.target.files[0])}>
            </input>
            <br></br>
            <button 
                className='text-black border border-black rounded-xl drop-shadow-xl font-Lato flex justify-center w-[100px] 
                hover:bg-Goldy hover:text-white hover:border-none transition-all duration-300 mb-5' 
                type="submit">
                Submit
            </button>
        </form>
        <div></div>
    </div>
  )
}

export default EditRecruitModal