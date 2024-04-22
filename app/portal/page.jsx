import Link from 'next/link'
import React from 'react'

const Portal = () => {
  return (
    <div className='w-full flex flex-col h-screen justify-center items-center portalBackground'>
        <div className='h-[500px] w-[900px] bg-white rounded-[24px] flex justify-start'>
          <div className='h-[500px] w-[500px] bg-gradient-to-tr from-DarkBlue to-LightBlue flex justify-center items-center rounded-l-[20px]'>
            <div className='h-[400px] w-[400px] bg-white rounded-full'>
              <img src='/images/infinitelogo.jpg' className='h-[400px] w-[400px]'/>
            </div>
          </div>
            <div className='flex flex-col justify-start m-10 w-[350px]'>
              <h1 className='text-[35px] font-Montserrat font-bold text-NeonGreen'>INFINITE ERP</h1>
              <div className='flex flex-col items-center gap-y-10 mt-11'>
                <Link href="" className='h-[50px] rounded-[24px] w-[250px] font-Lato text-LightBlue text-center text-2xl pt-2 shadow-xl hover:bg-Goldy hover:text-white hover:h-[60px] hover:w-[270px] hover:pt-3 hover:rounded-[30px] transition-all  duration-300' >Logistics</Link>
                <Link href="/dashboard" className='h-[50px] rounded-[24px] w-[250px] font-Lato text-LightBlue text-center text-2xl pt-2 shadow-xl hover:bg-Goldy hover:text-white hover:h-[60px] hover:w-[270px] hover:pt-3 hover:rounded-[30px] transition-all  duration-300'>Human Resources</Link>
                <Link href="" className='h-[50px] rounded-[24px] w-[250px] font-Lato text-LightBlue text-center text-2xl pt-2 shadow-xl hover:bg-Goldy hover:text-white hover:h-[60px] hover:w-[270px] hover:pt-3 hover:rounded-[30px] transition-all  duration-300'>Supply</Link>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Portal