import React from 'react';

const ConcernBox = ({ concern }) => {
  return (
    <div className='mt-4 ml-[17%] rounded-[24px] h-[330px] w-[855px] bg-white pr-5 pl-5 pt-3'>
      {concern ? (
        <>
          <h2 className='text-LightBlue text-2xl font-Montserrat font-bold'>{concern.subject}</h2>
          <div className='font-Roboto text-lg'>Status: {concern.status}</div>
          <div className='font-Roboto text-lg'>Date: {new Date(concern.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          <div className='font-Roboto text-lg'>Reporter: {concern.reporter}</div>
          <div className='mt-2 selection:font-Roboto text-md overflow-y-auto'>{concern.description}</div> 
        </>
      ) : (
        <div className="text-LightBlue text-2xl font-Montserrat font-bold">Select a concern</div>
      )}
    </div>
  );
};

export default ConcernBox;
