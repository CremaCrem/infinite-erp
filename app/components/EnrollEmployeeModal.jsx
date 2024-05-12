'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

const EnrollEmployeeModal = ({ programs, employees, isOpen, onClose }) => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  // Filter out duplicate program names
  const uniquePrograms = programs.filter((program, index) => {
    return programs.findIndex(p => p.name === program.name) === index;
  });

  const handleEnroll = async () => {
    try {
      await axios.post('http://localhost:5000/training-programs/enroll', {
        program: selectedProgram,
        employee: selectedEmployee
      });
      toast.success('Employee successfully enrolled!', {
        position: 'top-center',
        autoClose: 800,
      })
      setTimeout(() => {
        window.location.reload();
      }, 1000)
      onClose();
    } catch (error) {
      console.error('Error enrolling employee:', error);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center" onClick={onClose}>
        <div className="bg-white p-8 rounded-lg" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl font-bold mb-4 font-Montserrat">Enroll Employee to Program</h2>
          <div className="mb-4">
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">Select a program:</label>
            <select 
              id="program" 
              name="program" 
              value={selectedProgram} 
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select a program</option>
              {uniquePrograms.map(program => (
                <option key={program._id} value={program.name}>{program.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4 font-Lato">
            <label htmlFor="employee" className="block text-sm font-medium text-gray-700">Select an employee:</label>
            {employees.length > 0 && (
              <select 
                id="employee" 
                name="employee" 
                value={selectedEmployee} 
                onChange={(e) => setSelectedEmployee(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select an employee</option>
                {employees.map(employee => (
                  <option key={employee._id} value={employee._id}>{employee.employeeFullName}</option>
                ))}
              </select>
            )}
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-NeonGreen font-Lato text-white font-bold hover:bg-Goldy hover:text-black hover:rounded-[24px] transition-all ease-in px-4 py-2 rounded-md" onClick={handleEnroll}>Enroll</button>
            <button type="button" className="ml-2 bg-gray-300 font-Lato text-gray-700 font-bold hover:bg-Goldy hover:text-black hover:rounded-[24px] transition-all ease-in px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    )
  );
};

export default EnrollEmployeeModal;
