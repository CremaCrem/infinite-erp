'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeDetails from './EmployeeDetails';
import AddEmployee from './AddEmployee';

const EmployeeBox = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [isAdding, setIsAdding] = useState(false)

  const modalRef = useRef(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employee');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`${type} copied to clipboard`,{
          position: 'top-center',
          autoClose: 1000,
        });
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

  const toggleEmployeeDetails = (employee) => {
    setSelectedEmployee(employee);
    setShowEmployeeDetails(!showEmployeeDetails);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null); 
    setShowEmployeeDetails(false); 
  };

  const handleAddClick = () => {
    setIsAdding(true)
  }
  const handleCloseAddModal = () => {
    setIsAdding(false)
  }

  return (
    <div className='h-[750px] w-[1480px] bg-white mr-5 mt-[23px] rounded-[20px] overflow-y-auto' onClick={handleCloseModal}>
      <div className='pr-5 pl-6' ref={modalRef}>
        <div className='text-LightBlue font-Montserrat flex justify-between pt-3 mr-[10px]'>
          <div className='text-lg font-bold' style={{ width: '20.5%' }}>Full Name</div>
          <div className='text-lg font-bold' style={{ width: '20%' }}>Profession</div>
          <div className='text-lg font-bold' style={{ width: '20%' }}>Contact Info</div>
        </div>
        {/* Display employee data */}
        {employees.map((employee, index) => (
          <div key={index} className='flex justify-between pt-2 text-lg font-Montserrat'>
            <div style={{ width: '20%' }}>{employee.employeeFullName}</div>
            <div style={{ width: '20%' }}>{employee.employeeProfession}</div>
            <div className='flex h-10' style={{ width: '20%' }}>
              {/* Email logo */}
              <span onClick={() => copyToClipboard(employee.employeeEmail, 'Email')}>
                <img className='w-[32px] h-[32px] mr-3' src="/icons/mail.svg" alt="Email Logo" style={{ cursor: 'pointer' }} />
              </span>
              {/* LinkedIn logo */}
              <a href={employee.employeeSocialLink1}>
                <img className='w-[32px] h-[32px] mr-3' src="/icons/carbon_logo-linkedin-LB.svg" alt="LinkedIn Logo" style={{ cursor: 'pointer', marginLeft: '10px' }} />
              </a>
              {/* Phone logo */}
              <span onClick={() => copyToClipboard(employee.employeeContactInfo, 'Contact')}>
                <img className='w-[32px] h-[32px] mr-3' src="/icons/carbon_phone-filledLB.svg" alt="Phone Logo" style={{ cursor: 'pointer', marginLeft: '10px' }} />
              </span>
              {/* See All button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleEmployeeDetails({ ...employee, _id: employee._id });
                }}
                className="ml-3 bg-NeonGreen text-white text-medium text-lg h-[80%] w-[30%] font-Lato px-2 rounded-lg 
                hover:bg-Goldy transition-all duration-200 hover:rounded-xl">
                See All
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Employee Details Modal Screen */}
      {showEmployeeDetails && 
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10' onClick={handleCloseModal}>
          <EmployeeDetails employee={selectedEmployee} onClose={handleCloseModal} />
        </div>
      }
      <ToastContainer/>
      <div className='flex justify-end mr-[3.9%] mt-[10px]'>
          <button
            onClick={handleAddClick}
            className="ml-3 bg-NeonGreen text-white text-medium text-lg h-[80%] w-[6%] font-Lato px-2 rounded-lg 
                hover:bg-Goldy transition-all duration-200 hover:rounded-xl">
            Add
          </button>
      </div>
       {/* AddEmployee Modal */}
       {isAdding &&
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-20' onClick={handleCloseAddModal}>
          <AddEmployee onClose={() => handleCloseAddModal} />
        </div>
      }
    </div>
  );
};

export default EmployeeBox;