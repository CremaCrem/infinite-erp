'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import TrainingChart from './TrainingChart';
import EmployeeProgramList from './EmployeeProgramList';
import ProgramDescriptionBox from './ProgramDescriptionBox';
import EnrollEmployeeModal from './EnrollEmployeeModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'

const TrainingBox = () => {
  const [trainingPrograms, setTrainingPrograms] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [employees, setEmployees] = useState([]);
  const [programToDelete, setProgramToDelete] = useState(null); // Track program to delete
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false); // Track delete confirmation modal
  const [selectedProgram, setSelectedProgram] = useState(''); // Track selected program to delete
  const [enrolledEmployees, setEnrolledEmployees] = useState({});
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/training-programs')
      .then(response => {
        setTrainingPrograms(response.data);
      })
      .catch(error => {
        console.error('Error fetching training programs:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/employee')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);
  
  // Fetch Employee and Program
  useEffect(() => {
    axios.get('http://localhost:5000/training-programs')
      .then(response => {
        setTrainingPrograms(response.data);
        response.data.forEach(program => {
          axios.get(`http://localhost:5000/training-programs/${program._id}/enrolled-employees`)
            .then(response => {
              setEnrolledEmployees(prevState => ({
                ...prevState,
                [program._id]: response.data
              }));
            })
            .catch(error => {
              console.error(`Error fetching enrolled employees for program ${program._id}:`, error);
            });
        });
      })
      .catch(error => {
        console.error('Error fetching training programs:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/training-programs', formData);
      setTrainingPrograms([...trainingPrograms, response.data]);
      setModalOpen(false);
      setFormData({ name: '', description: '' });
      toast.success('Program successfully added!', {
        position: 'top-center',
        autoClose: 800,
      })
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch (error) {
      console.error('Error adding training program:', error);
    }
  };

  const handleDeleteConfirmation = async () => {
    if (selectedProgram) {
      try {
        const encodedProgramName = encodeURIComponent(selectedProgram);
        await axios.delete(`http://localhost:5000/training-programs/${encodedProgramName}`);
        setTrainingPrograms(trainingPrograms.filter(program => program.name !== selectedProgram));
        toast.success('Program successfully added!', {
          position: 'top-center',
          autoClose: 800,
        })
        setTimeout(() => {
          window.location.reload();
        }, 1000)
        setModalOpen(false);
        setProgramToDelete(null);
        setDeleteConfirmationOpen(false);
      } catch (error) {
        console.error('Error deleting training program:', error);
      }
    }
  };

  const openEnrollModal = () => {
    setEnrollModalOpen(true);
  };


  const closeEnrollModal = () => {
    setEnrollModalOpen(false);
  };

  const uniqueProgramNames = Array.from(new Set(trainingPrograms.map(program => program.name)));

  return (
    <div className='flex flex-wrap gap-x-4'>
      <div className='ml-[17%] mt-5 w-[900px] h-[452px] rounded-[24px] bg-white flex pt-5'>
        <TrainingChart trainingPrograms={trainingPrograms} />
        <div className='ml-[1.5rem] font-Montserrat font-bold w-[18.5rem] h-[25rem]'>
          <h1 className='flex flex-wrap gap-x-[5px] justify-start mt-[1rem] text-[20px]'>
            Provided Training Modules
            <button
              className='mt-[10px] w-[5rem] bg-NeonGreen text-white text-medium text-lg font-Lato px-2 rounded-lg 
                hover:bg-Goldy transition-all duration-200 hover:rounded-xl'
              onClick={() => setModalOpen(true)}>
              Add
            </button>
            <button
              className='mt-[10px] w-[5rem] bg-NeonGreen text-white text-medium text-lg font-Lato px-2 rounded-lg 
                hover:bg-red-500 transition-all duration-200 hover:rounded-xl'
              onClick={() => setDeleteConfirmationOpen(true)}> 
              Delete
            </button>
          </h1>
          <div className='w-[20.3rem] h-[19.5rem] mt-[10px] overflow-y-scroll scrollbar flex flex-col pl-[5px] '>
          {uniqueProgramNames.map((name, index) => (
            <span className='text-black text-[15px] font-medium' key={index}>{name}</span>
          ))}
          </div>
        </div>
      </div>
      <Calendar />
      <div className='ml-[17%] w-[900px] h-[270px] rounded-[24px] bg-white pr-[4px]'>
          <div className='flex items-center mb-1 p-[10px] text-[20px] font-bold'>
            <h1 className="w-[49%]">Employee</h1>
            <h2 className="w-[40%]">Program</h2>
            <button
              className='mt-[10px] w-[5rem] bg-NeonGreen text-[18px] text-white text-medium font-Lato px-2 rounded-lg 
                hover:bg-Goldy transition-all duration-200 hover:rounded-xl'
              onClick={openEnrollModal}>
              Add
            </button>
          </div>
          <div className='overflow-y-scroll scrollbar h-[200px]'>
            {trainingPrograms.map(program => (
                <div key={program._id}>
                  <EmployeeProgramList program={program} enrolledEmployees={enrolledEmployees[program._id] || []} />
                </div>
              ))}
          </div>
      </div>
      <div className='w-[500px] h-[270px] rounded-[24px] bg-white'>
        <ProgramDescriptionBox programs={trainingPrograms}/>
      </div>
      {/* Add Training Program Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center" onClick={() => setModalOpen(false)}>
          <div className="bg-white p-8 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Add Training Program</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows="3" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-NeonGreen text-white px-4 py-2 rounded-md font-Lato font-bold hover:text-black hover:rounded-[24px] hover:bg-Goldy transition-all ease-in">Add</button>
                <button type="button" className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-Lato font-bold hover:text-black hover:rounded-[24px] hover:bg-Goldy transition-all ease-in" onClick={() => setModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {deleteConfirmationOpen && (
        <div className="fixed inset-0 z-50 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center" onClick={() => setDeleteConfirmationOpen(false)}>
          <div className="bg-white p-8 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="mb-4 block w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="">Select a program to delete</option>
              {uniqueProgramNames.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            <div className="flex justify-end">
              <button type="button" className="bg-NeonGreen font-bold font-Lato text-white px-4 py-2 rounded-md mr-2 hover:bg-red-500 hover:rounded-[24px] transition-all ease-in" onClick={handleDeleteConfirmation}>Delete</button>
              <button type="button" className="bg-gray-300 font-bold font-Lato text-gray-700 px-4 py-2 rounded-md hover:rounded-[24px] transition-all ease-in" onClick={() => setDeleteConfirmationOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Add Enroll Employee Modal */}
      <EnrollEmployeeModal 
        programs={trainingPrograms} 
        employees={employees} 
        isOpen={enrollModalOpen} 
        onClose={closeEnrollModal} 
      />
      <ToastContainer />
    </div>
  );
};

export default TrainingBox;