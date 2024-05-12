'use client';
import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import RecruitmentDropdown from './RecruitmentDropdown'
import EditRecruitModal from './EditRecruitModal'
import ApplicantInfoBox from './ApplicantInfoBox'
import ConfirmationDialog from './ConfirmationDialog'
import ResumePDF from './ResumePDF'

const RecruitmentBox = () => {
  const [recruitmentData, setRecruitmentData] = useState([])
  const [hoverIndex, setHoverIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRecruit, setSelectedRecruit] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showEditConfirmation, setShowEditConfirmation] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recruit')
        setRecruitmentData(response.data); 
      } catch (error) {
        console.error('Error fetching recruitment data:', error)
      }
    }
 
    fetchData();
  }, []);

  const handleRecruitClick = (index) => {
    setSelectedRecruit(recruitmentData[index])
  }

  const handleEdit = async (index) => {
    console.log('Edit clicked')
    setSelectedRecruit(recruitmentData[index])
    setShowEditConfirmation(true)
  }

  const confirmEdit = async () => {
    setIsModalOpen(true)
    setShowEditConfirmation(false) 
  }

  const cancelEdit = () => {
    setShowEditConfirmation(false) 
  }
  
  const handleDelete = async () => {
    if (!selectedRecruit) return
    setShowConfirmation(true);
  }

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/recruit/${selectedRecruit._id}`)
      console.log('Recruit deleted successfully:', response.data)
      toast.success('Recruit successfully deleted!', {
        position: 'top-center',
        autoClose: 800,
      })
      setTimeout(() => {
        window.location.reload();
    }, 1000)
    } catch (error) {
      console.error('Error deleting recruit:', error)
    }
  }
  const cancelDelete = () => {
    setShowConfirmation(false);
  }

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal)
  }

  return (
    <div className='flex flex-col'>
      <div className='h-[450px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-[20px] overflow-y-auto'>
        <h1 className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold'>
          Recruitment Progress
        </h1>
        <div className="absolute top-[145px] right-[625px]">
          <button className="bg-NeonGreen hover:bg-Goldy transition-all duration-100 w-[80px] text-white font-Lato font-bold py-2 px-4 rounded-[24px] mt-3" onClick={toggleAddModal}>Add</button>
        </div>
        <div className='pr-5 pl-5'>
          <div className='text-LightBlue font-Montserrat flex justify-between pt-3 mr-[100px]'>
            <div className='text-lg font-bold' style={{ width: '20%' }}>Full Name</div>
            <div className='text-lg font-bold' style={{ width: '10%' }}>Profession</div>
            <div className='text-lg font-bold' style={{ width: '20%' }}>Status</div>
          </div>
          {recruitmentData.map((data, index) => (
            <div key={index} className='text-LightBlue font-Montserrat flex justify-between pt-3 mr-[100px] cursor-pointer hover:text-Goldy hover:font-bold transition-all ease-in' onMouseLeave={() => setHoverIndex(null)}>
              <div style={{ width: '30%', position: 'relative' }} onClick={() => handleRecruitClick(index)}>
                {data.recruitFullName}
                <img 
                  src="/icons/carbon_overflow-menu-vertical.svg" 
                  alt='Overflow Menu Icon' 
                  className={`inline-block ml-5 ${hoverIndex === index ? 'shift-left' : ''}`}
                  style={{ position: 'absolute', top: '50%', left: '305%', transform: 'translateY(-50%)' }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onClick={() => handleEdit(index)}
                />
                {hoverIndex === index && (
                  <RecruitmentDropdown
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                )}
              </div>
              <div style={{ width: '20%' }}>{data.desiredProfession}</div>
              <div style={{ width: '20%' }}>{data.recruitmentStatus}</div>
            </div>
          ))}
        </div>
        {/* Confirmation Dialog for Edit */}
        {showEditConfirmation && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10'>
            <ConfirmationDialog
              message="Are you sure you want to edit this recruit?"
              onConfirm={confirmEdit}
              onCancel={cancelEdit}
              onClose={() => setShowEditConfirmation(false)}
              icon="/icons/carbon_edit.svg"
            />
          </div>
        )}
        {/* Confirmation Dialog for Delete */}
        {showConfirmation && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10'>
            <ConfirmationDialog
              message="Are you sure you want to delete this recruit?"
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
              onClose={() => setShowConfirmation(false)}
              icon="/icons/carbon_trash-can.svg"
            />
          </div>
        )}
        {/* Toast Container */}
        <ToastContainer />
        {/* Modal Screen */}
        {isModalOpen && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10'>
            <EditRecruitModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              recruit={selectedRecruit}
              recruitId={selectedRecruit._id}
            />
          </div>
        )}
        {/* Add Modal */}
        {showAddModal && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10'>
            <ResumePDF onClose={toggleAddModal} />
          </div>
        )}
        <br/>
        <br/>
      </div>
      {selectedRecruit && (
        <div className=''>
          <ApplicantInfoBox
            name={selectedRecruit.recruitFullName}
            contactInfo={selectedRecruit.recruitContactInfo}
            picturePath={selectedRecruit.recruitPicture}
            resumePath={selectedRecruit.pdf}
            profession={selectedRecruit.desiredProfession}
          />
        </div>
      )}
    </div>
  );
};

export default RecruitmentBox;
