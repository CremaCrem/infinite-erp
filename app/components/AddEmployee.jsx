'use client'
import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = ({ onClose }) => {
    const [ID, setID] = useState('')
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [gender, setGender] = useState('');
    const [bday, setBday] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [team, setTeam] = useState('');
    const [absences, setAbsences] = useState(0);
    const [presents, setPresents] = useState(0);
    const [socials1, setSocials1] = useState('');
    const [socials2, setSocials2] = useState('');
    const [employeedSince, setEmployeedSince] = useState('');
    const [salary, setSalary] = useState('');
    const [picture, setPicture] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', id)
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
            const result = await axios.post("http://localhost:5000/employee", formData);
            console.log('Employee added successfully:', result.data);
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div className='flex flex-col bg-white w-[400px] h-[790px] ml-[700px] mt-10 p-7'>
            <form onSubmit={handleSubmit}>
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={ID} onChange={(e) => setID(e.target.value)} placeholder="Employee ID" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="date" value={bday} onChange={(e) => setBday(e.target.value)} placeholder="Date of Birth" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact Info" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="number" value={absences} onChange={(e) => setAbsences(e.target.value)} placeholder="Absences" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="number" value={presents} onChange={(e) => setPresents(e.target.value)} placeholder="Presents" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={socials1} onChange={(e) => setSocials1(e.target.value)} placeholder="Social Links" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="text" value={socials2} onChange={(e) => setSocials2(e.target.value)} placeholder="Social Links 2" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="date" value={employeedSince} onChange={(e) => setEmployeedSince(e.target.value)} placeholder="Employeed Since" />
                <input className='border-black border p-2 rounded-[24px] w-[300px] h-[40px] my-1' type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" />
                <input type="file" onChange={(e) => setPicture(e.target.files[0])} accept="image/*" />
                <button className='w-[300px] my-2 border border-black rounded-[24px] hover:bg-Goldy' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddEmployee;
