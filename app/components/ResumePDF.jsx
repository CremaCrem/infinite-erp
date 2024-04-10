'use client';

import React, { useState } from 'react'
import axios from 'axios'

const ResumePDF = () => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [status, setRecruitmentStatus] = useState("")
    const [contact, setContatctInfo] = useState("")
    const [picture, setPicture] = useState("")
    const [file, setFile] = useState("")
    const submitImage = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('position', position)
        formData.append('status', status)
        formData.append('contact', contact)
        formData.append('picture', picture)
        formData.append("file", file)
        console.log(file, name, position, status, contact, picture)
        const result = await axios.post("http://localhost:5000/recruit", formData, {headers: {"Content-Type": "multipart/form-data"}});
    }
  return (
    <div>
        <form className='text-LightBlue h-[590px] w-[500px] bg-white rounded-[20px] mt-1 flex justify-center flex-col items-center' onSubmit={submitImage}>
            <h1 className='text-2xl font-Montserrat font-bold m-5'>Upload PDF</h1>
            <input type="text" className='border border-black h-[50px] rounded-[20px]' placeholder='Full Name' required onChange={(e) => setName(e.target.value)}></input>
            <br></br>
            <input type="text" className='border border-black h-[50px] rounded-[20px]' placeholder='Desired Position' required onChange={(e) => setPosition(e.target.value)}></input>
            <br></br>
            <input type="text" className='border border-black h-[50px] rounded-[20px]' placeholder='Recruitment Status' required onChange={(e) => setRecruitmentStatus(e.target.value)}></input>
            <br></br>
            <input type="text" className='border border-black h-[50px] rounded-[20px]' placeholder='Contact Info' required onChange={(e) => setContatctInfo(e.target.value)}></input>
            <br></br>
            <input type="file" className='border border-black h-[30px] w-[300px] rounded-xl' accept='image/png, image/jpeg' required onChange={(e) => setPicture(e.target.files[0])}></input>
            <br></br>
            <input type="file" className='border border-black h-[30px] w-[300px] rounded-xl' accept='application/pdf' required onChange={(e) => setFile(e.target.files[0])}></input>
            <br></br>
            <button className='text-black border border-black rounded-xl drop-shadow-xl font-Lato flex justify-center w-[100px] hover:bg-Goldy mb-5' type="submit">
                Submit
            </button>
        </form>
        <div></div>
    </div>
  )
}

export default ResumePDF