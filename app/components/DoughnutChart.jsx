'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const DoughnutChart = ({ totalConcerns, numberOfConcerns, concernName }) => {
    const data = {
        datasets: [{
            label: "Concerns",
            data: [numberOfConcerns, totalConcerns - numberOfConcerns],
            backgroundColor: ['#53DD6C', '#cbd5e1'],
            borderColor: ['#53DD6C', '#cbd5e1']
        }]
    }
    const options = {}

  return (
    <div className='ml-3 mt-5'>
        <div className='bg-white w-[320px] h-[150px] px-3 pb-3 rounded-[24px] flex items-center'>
                <Doughnut 
                    className='drop-shadow-lg'
                    data = {data}
                    options = {options}>
                </Doughnut>
            <h1 className='ml-4 text-2xl flex flex-col'>
                {concernName}
            </h1>
        </div>
    </div>
  )
}

export default DoughnutChart