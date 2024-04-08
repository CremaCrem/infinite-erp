import React from 'react'
import SettingsBtn from './SettingsBtn'
import SignOutBtn from './SignOutBtn'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='w-[285px] bg-MediumBlue fixed h-full px-4 py-2'>
        <div>
            <h1 className='text-2x text-NeonGreen text-4xl font-bold font-Montserrat mb-[50px] mt-[65px] ml-8 flex justify-center'>INFINITE ERP</h1>
        </div>
        <ul className='mt-8'>
            <li className='mb-2 py-2'>
                <Link href='/' className='mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato'>
                    <img src="/icons/carbon_notebook.svg" alt='Dashboard Icon' className='inline-block mr-2'></img>
                    Dashboard
                </Link>
                <Link href='/recruitment' className='mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato'>
                    <img src="/icons/carbon_category.svg" alt='Recruitment Icon' className='inline-block mr-2'></img>
                    Recruitment
                </Link>
                <a href='' className='mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato'>
                    <img src="/icons/carbon_user-profile.svg" alt='Employee Record Icon' className='inline-block mr-2'></img>
                    Employee Record
                </a>
                <a href='' className='mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato'>
                    <img src="/icons/carbon_airline-passenger-care.svg" alt='Relations Icon' className='inline-block mr-2'></img>
                    Relations
                </a>
                <a href='' className='mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato'>
                    <img src="/icons/carbon_carbon-for-ibm-product.svg" alt='Training Icon' className='inline-block mr-2'></img>
                    Training
                </a>
            </li>
        </ul>
        <hr className='border-Goldy'/>
        <ul className='mt-5'>
            <li className='mb-2 py-2'>
                <SettingsBtn></SettingsBtn>
                <SignOutBtn></SignOutBtn>
            </li>
        </ul>
        <div className='flex justify-center mt-[100px] mb-5 drop-shadow-[1px_9px_12px_rgba(0,0,0,0.75)]'>
            <img src="/images/1712197531125.jpg" alt='Profile Pic' className='w-16 h-16 rounded-full'></img>
        </div>
        <div className='flex justify-center text-Goldy font-Playfair'>
            j3remyz1on@gmail.com
        </div>
    </div>
  )
}

export default Sidebar