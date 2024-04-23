'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConcernBox from './ConcernBox';
import DoughnutChart from './DoughnutChart';

const RelationsBox = () => {
  const [complaints, setComplaints] = useState([]);
  const [editStatusId, setEditStatusId] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [selectedConcern, setSelectedConcern] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:5000/relations');
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  const handleEditStatus = async (id) => {
    setEditStatusId(id);
  };

  const handleConcernClick = (concern) => {
    setSelectedConcern(concern);
  };

  const handleStatusChange = async (id) => {
    try {
      if (newStatus !== '') {
        await axios.put(`http://localhost:5000/relations/${id}`, { status: newStatus });
        const response = await axios.get('http://localhost:5000/relations');
        setComplaints(response.data);
      }
      setEditStatusId(null);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
        <div className='h-[350px] w-[1480px] bg-white mr-5 mt-[23px] ml-[17%] rounded-[20px] overflow-y-auto'>
            <div className='pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold'>
                <h1>Complaints and Feedback</h1>
            </div>
            <div className='text-LightBlue font-Montserrat flex justify-between pt-3 mr-[10px] pl-5'>
                <div className='text-lg font-bold' style={{ width: '20.5%' }}>Concern</div>
                <div className='text-lg font-bold' style={{ width: '20%' }}>Status</div>
                <div className='text-lg font-bold' style={{ width: '20%' }}>Reporter</div>
                <div className='text-lg font-bold' style={{ width: '20%' }}>Date</div>
            </div>
            {complaints.map((complaint, index) => (
                <div key={index} className='text-LightBlue font-Roboto text-lg flex justify-between pt-3 mr-[10px] pl-5'>
                    <div
                        className='hover:font-bold'
                        style={{ width: '20.5%', cursor: 'pointer' }}
                        onClick={() => handleConcernClick(complaint)}
                    >
                        {complaint.subject}
                    </div>
                    <div className='hover:font-bold cursor-pointer duration-100' style={{ width: '20%' }}>
                        {editStatusId === complaint._id ? (
                        <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            onBlur={() => handleStatusChange(complaint._id)}
                        >
                            <option value='Open'>Open</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Closed'>Closed</option>
                        </select>
                        ) : (
                        <span onClick={() => handleEditStatus(complaint._id)}>{complaint.status}</span>
                        )}
                    </div>
                    <div style={{ width: '20%' }}>{complaint.reporter}</div>
                    <div style={{ width: '20%' }}>{new Date(complaint.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
            ))}
            
        </div>
        <div className='flex'>
            <ConcernBox 
                concern={selectedConcern} 
                onClose={() => setSelectedConcern(null)} 
            />
            <div className='flex flex-wrap'>
                <DoughnutChart 
                    totalConcerns={complaints.length} // Total number of complaints
                    numberOfConcerns={complaints.filter(complaint => complaint.subject === 'Employee Concern').length}
                    concernName="Employee Concerns" // Name of the specific concern
                />
                <DoughnutChart 
                    totalConcerns={complaints.length} // Total number of complaints
                    numberOfConcerns={complaints.filter(complaint => complaint.subject === 'Work Environment').length}
                    concernName="Work Environment" // Name of the specific concern
                />
                <DoughnutChart 
                    totalConcerns={complaints.length} // Total number of complaints
                    numberOfConcerns={complaints.filter(complaint => complaint.subject === 'Project').length}
                    concernName="Project" // Name of the specific concern
                />
                <DoughnutChart 
                    totalConcerns={complaints.length} // Total number of complaints
                    numberOfConcerns={complaints.filter(complaint => complaint.subject === 'Welfare').length}
                    concernName="Welfare" // Name of the specific concern
                />
                <DoughnutChart 
                    totalConcerns={complaints.length} // Total number of complaints
                    numberOfConcerns={complaints.filter(complaint => complaint.subject === 'Miscellaneous').length}
                    concernName="Miscellaneous" // Name of the specific concern
                />
                <DoughnutChart 
                    totalConcerns={complaints.length} // Total number of complaints
                    numberOfConcerns={complaints.filter(complaint => complaint.subject === 'Company').length}
                    concernName="Company" // Name of the specific concern
                />
            </div>
        </div>
    </div>
  );
};

export default RelationsBox;

