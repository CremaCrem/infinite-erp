'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const TrainingChart = ({ trainingPrograms }) => {
    const uniqueProgramNames = Array.from(new Set(trainingPrograms.map(program => program.name)));
    const enrolledEmployeeCounts = uniqueProgramNames.map(name => {
        const programsWithName = trainingPrograms.filter(program => program.name === name);
        const totalEnrolledEmployees = programsWithName.reduce((total, program) => total + program.enrolledEmployees.length, 0);
        return totalEnrolledEmployees;
    });

    const data = {
        labels: uniqueProgramNames,
        datasets: [{
            label: "Training",
            data: enrolledEmployeeCounts,
            backgroundColor: ['#53DD6C', '#FFE66D', '#F7AF9D', '#FF6F61', '#70C1B3', '#B8B8D1'],
            borderColor: ['#53DD6C', '#FFE66D', '#F7AF9D', '#FF6F61', '#70C1B3', '#B8B8D1']
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                align: 'center',
                labels: {
                    font: {
                        size: 12,
                        family: 'Arial',
                    },
                    color: 'black',
                    padding: 10,
                }
            }
        }
    };

    return (
        <div className='relative w-[530px] h-[400px] rounded-[24px] shadow-md ml-5 bg-white'>
            <h1 className='ml-[20px] text-2xl font-Montserrat font-bold'>Courses & Training List</h1>
            <div className='w-[500px] h-[500px] absolute -top-[40px] ml-5'>
                <Doughnut
                    className='drop-shadow-xl'
                    data={data}
                    options={options}>
                </Doughnut>
            </div>
        </div>
    );
};

export default TrainingChart;
