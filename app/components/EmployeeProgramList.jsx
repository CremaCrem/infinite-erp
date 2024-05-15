'use client'
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

const EmployeeProgramList = ({ program, enrolledEmployees }) => {
  const hasEnrolledEmployees = enrolledEmployees && enrolledEmployees.length > 0;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const confirmDeleteProgram = () => {
    toggleModal();
  };

  const handleConfirmDelete = async () => {
    try {
      console.log(program._id);
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/training-programs-id/${program._id}`);
      toast.success('Employee successfully deleted!', {
        position: 'top-center',
        autoClose: 800,
      })
      setTimeout(() => {
        window.location.reload();
      }, 1000)
      toggleModal();
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return hasEnrolledEmployees ? (
    <div className='p-[10px] font-Roboto text-[18px]'>
      <div>
        <ul>
          {enrolledEmployees.map((employee, index) => (
            <li key={employee._id} className={`flex items-center mb-1 ${index > 0 ? 'mt-5' : ''}`}>
              <p className="w-1/2">{employee.employeeFullName}</p>
              <p className="w-[30%]">{program.name}</p>
              <div className="relative" ref={dropdownRef}>
                <button onClick={toggleDropdown}>
                  <img src="/icons/carbon_overflow-menu-vertical.svg" alt="Options" className="h-5 w-5" />
                </button>
                {showDropdown && (
                  <ul className="absolute font-Lato top-[-20px] right-[-100px] mt-2 py-1 w-24 bg-white border rounded shadow-md pl-[5px]">
                    <li>
                      <button onClick={confirmDeleteProgram}>
                        <img src="/icons/carbon_trash-can.svg" alt='Delete' className='inline-block mr-2 w-[24px]'></img>Delete
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 font-Lato">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>Are you sure you want to delete this program?</p>
            <div className="flex justify-end mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleConfirmDelete}>Confirm</button>
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default EmployeeProgramList;
