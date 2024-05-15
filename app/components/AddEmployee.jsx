'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

const AddEmployee = ({ onClose }) => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const [ID, setID] = useState('')
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [gender, setGender] = useState('');
    const [bday, setBday] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [team, setTeam] = useState('New Hire');
    const [absences, setAbsences] = useState(0);
    const [presents, setPresents] = useState(0);
    const [socials1, setSocials1] = useState('');
    const [socials2, setSocials2] = useState('');
    const [employeedSince, setEmployeedSince] = useState(currentDate);
    const [salary, setSalary] = useState('10000');
    const [imagePreview, setImagePreview] = useState(null);
    const [picture, setPicture] = useState('');

    const handleClickInside = (event) => {
        event.stopPropagation();
      };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setPicture(selectedImage);
            setImagePreview(URL.createObjectURL(selectedImage));
        } else {
            setPicture(null);
            setImagePreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('ID', ID)
        formData.append('name', name);
        formData.append('position', position);
        formData.append('gender', gender);
        formData.append('bday', bday);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('contact', contact);
        formData.append('team', team);
        formData.append('absences', absences);
        formData.append('presents', presents);
        formData.append('socials1', socials1);
        formData.append('socials2', socials2);
        formData.append('employeedSince', employeedSince);
        formData.append('salary', salary);
        formData.append('picture', picture);

        try {
            const result = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/employee`, formData);
            console.log('Employee added successfully:', result.data);
            toast.success('Recruit successfully added!',{
                position: 'top-center',
                autoClose: 800,
            });
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };
    return (
        <div className='flex bg-white rounded-[24px] w-[1230px] h-[800px] ml-[10%] px-7 py-1' >
            <div className='mt-4 ml-6 mr-4 mb-8 absolute right-[13%]'>
                <img 
                    src="/icons/icons8-close.svg" alt='Close Icon' className='p-1 w-[35px] h-[35px] cursor-pointer border-gray-200 bg-gray-200 rounded-full
                    hover:bg-red-300 hover:rounded-full transition-all duration-200' 
                    onClick={onClose}
                />
            </div>
            <form 
                onClick={handleClickInside}
                className='flex flex-col items-center'
                onSubmit={handleSubmit}>
                <h1 className='text-5xl font-Montserrat font-medium mt-4'>Add Employee</h1>
                <div className='flex flex-col items-center'>
                    {imagePreview && (
                        <img src={imagePreview} alt="Employee" className="rounded-full bg-slate-200 w-[170px] h-[170px] drop-shadow-2xl mt-4" />
                    )}
                    <input 
                        className='my-6 font-Lato border-black bg-slate-200 rounded-md p-2 w-[300px]' 
                        type="file" 
                        onChange={handleImageChange} 
                        accept="image/*" 
                    />
                    <input 
                        className='border-black border p-2 rounded-lg w-[300px] h-[40px] my-1' 
                        type="text" 
                        value={ID} 
                        onChange={(e) => setID(e.target.value)} 
                        placeholder="Employee ID" />
                </div>
                <div className='p-5 flex w-full'>
                    <div className='w-[550px] h-[300px] bg-slate-100 rounded-[24px] p-3 drop-shadow-xl mr-7'>
                        <h1 className='font-Montserrat text-xl text-LightBlue font-medium'>Personal Information</h1>
                        <div className='flex flex-wrap gap-y-3 justify-between p-1'>
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="date" value={bday} onChange={(e) => setBday(e.target.value)} placeholder="Date of Birth" />
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                        </div>
                    </div>
                    <div className='w-[550px] h-[300px] bg-slate-100 rounded-lg p-3 drop-shadow-xl'>
                        <h1 className='font-Montserrat text-xl text-LightBlue font-medium'>Contact Info</h1>
                        <div className='flex flex-wrap gap-y-3 justify-between p-1'>
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact Info" />
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="text" value={socials1} onChange={(e) => setSocials1(e.target.value)} placeholder="Linkedin" />
                            <input 
                                className='border-black border p-2 rounded-lg w-full h-[40px] my-1 font-Roboto' 
                                type="text" value={socials2} onChange={(e) => setSocials2(e.target.value)} placeholder="GitHub" />
                        </div>
                    </div>
                </div>
                <button className='w-[20%] h-[5%] font-Lato text-2xl my-2 border border-DarkBlue rounded-[24px] 
                    hover:bg-Goldy hover:border-none hover:text-white transition-all duration-200' 
                    type="submit">Submit
                </button>
            </form>
        </div>
    );
};

export default AddEmployee;
