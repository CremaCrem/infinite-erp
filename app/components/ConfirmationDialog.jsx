'use client'
import React from 'react';

const ConfirmationDialog = ({ message, onConfirm, onCancel, onClose, icon }) => {
  return (
    <div className="confirmation-dialog bg-white h-[350px] w-[300px] rounded-[24px] drop-shadow-xl flex flex-col justify-start pt-[60px] pb-[60px] text-center text-LightBlue">
        <div className='mt-2 ml-2 mr-2 absolute top-0 right-0'>
            <img 
                src="/icons/icons8-close.svg" alt='Close Icon' className='w-8 cursor-pointer 
                hover:bg-red-300 hover:rounded-[10px] transition-all duration-200' 
                onClick={onClose}
            />
        </div>
    {icon && (
        <div className='flex justify-center mb-3'>
            <img src={icon} alt='Icon' className='w-20 h-20'/>
        </div>
    )}
      <p className='font-Roboto font-bold text-2xl'>{message}</p>
      <div>
        <button 
            className='ml-2 mr-2 mt-10 w-[100px] rounded-2xl font-Lato font-bold text-xl border-Goldy border  hover:bg-green-200 hover:border-none transition-all duration-200'
            onClick={onConfirm}>Confirm
        </button>
        <button 
            className='ml-2 mr-2 mt-10 w-[100px] rounded-2xl font-Lato font-bold text-xl border-Goldy border  hover:bg-red-200 hover:border-none transition-all duration-200'
            onClick={onCancel}>Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;