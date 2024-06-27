import React from 'react'
import JobRow from './jobs-row'

const Jobs = () => {
  return (
    <div className='bg-gray-200 py-6 rounded-3xl'>
        <div className="container">
            <h2 className='font-bold mb-4'>Recent Jobs</h2>
            <div className='flex gap-4 flex-col'>

            <JobRow />
            <JobRow />
            <JobRow />
            <JobRow />

            </div>
           
        </div>
    </div>
  )
}

export default Jobs