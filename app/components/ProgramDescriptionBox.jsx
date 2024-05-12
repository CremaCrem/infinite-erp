'use client'
import React, { useState } from 'react';

const ProgramDescriptionBox = ({ programs }) => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [programDescription, setProgramDescription] = useState('');

  // Filter out duplicate program names
  const uniquePrograms = programs.filter((program, index) => {
    return programs.findIndex(p => p.name === program.name) === index;
  });

  const handleChange = (event) => {
    const selectedProgramName = event.target.value;
    setSelectedProgram(selectedProgramName);
    const selectedProgram = programs.find(program => program.name === selectedProgramName);
    if (selectedProgram) {
      setProgramDescription(selectedProgram.description);
    } else {
      setProgramDescription('');
    }
  };

  return (
    <div className='p-3 pl-4'>
      <h2 className='font-Montserrat font-bold text-[20px]'>Program Description</h2>
      <select 
        className='appearance-none outline-none cursor-pointer p-2 font-Lato font-bold text-[18px] hover:text-NeonGreen transition-all ease-in'
        value={selectedProgram} 
        onChange={handleChange}>
        <option value="">Select a program</option>
        {uniquePrograms.map(program => (
          <option key={program._id} value={program.name}>{program.name}</option>
        ))}
      </select>
      {programDescription && (
        <div className='pl-2 font-Roboto'>
          <p>{programDescription}</p>
        </div>
      )}
    </div>
  );
};

export default ProgramDescriptionBox;
