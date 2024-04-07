import React from 'react'
import SearchBtn from './SearchBtn'
import MailBtn from './MailBtn'
import NotificationBtn from './NotificationBtn'

const Navbar = () => {
  return (
    <nav className='px-4 py-3 flex justify-between items-center ml-[300px] mt-[65px] mr-[150px]'>
        <div className='flex itmes-center text-3xl text-white font-Montserrat font-bold '>
            Dashboard
        </div>
        <div className='flex items-center'>
                <SearchBtn/>
                <MailBtn/>
                <NotificationBtn/>
        </div>
    </nav>
  )
}

export default Navbar