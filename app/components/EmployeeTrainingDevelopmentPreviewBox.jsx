'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeTrainingDevelopmentPreviewBox = () => {
  const [employeesAndPrograms, setEmployeesAndPrograms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/training-programs')
      .then(response => {
        const programs = response.data;
        const promises = programs.map(program => {
          return axios.get(`http://localhost:5000/training-programs/${program._id}/enrolled-employees`)
            .then(response => ({
              programName: program.name,
              enrolledEmployees: response.data
            }))
            .catch(error => {
              console.error(`Error fetching enrolled employees for program ${program._id}:`, error);
              return {
                programName: program.name,
                enrolledEmployees: []
              };
            });
        });
        Promise.all(promises)
          .then(data => {
            setEmployeesAndPrograms(data);
          });
      })
      .catch(error => {
        console.error('Error fetching training programs:', error);
      });
  }, []);

  return (
    <div className='h-[230px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-[20px] rounded-r-none overflow-y-scroll scrollbar'>
      <h1 className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold'>
        Employee Training & Development
      </h1>
      <div className='flex'>
        <h2 className='w-[47%] pr-5 pl-5 pt-3 text-LightBlue text-[20px] font-Montserrat font-bold'>
          Employee
        </h2>
        <h2 className='w-1/2 pr-5 pl-5 pt-3 text-LightBlue text-[20px] font-Montserrat font-bold'>
          Program
        </h2>
      </div>
      <div className="p-5 pl-2 pt-0 h-[130px] font-Roboto ">
        {employeesAndPrograms.map(({ programName, enrolledEmployees }, index) => (
          <div key={index} className="p-[10px]">
            <ul>
              {enrolledEmployees.map((employee, index) => (
                <li key={employee._id} className={`flex items-center mb-1 ${index > 0 ? 'mt-5' : ''}`}>
                  <p className="w-1/2">{employee.employeeFullName}</p>
                  <p className="w-[30%]">{programName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTrainingDevelopmentPreviewBox;
