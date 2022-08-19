import React from 'react'
import { PropagateLoader } from 'react-spinners'

const GlobalLoading: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black z-50 absolute'>
        <div className='flex text-red-500'>
        <PropagateLoader color='red' size={10} />
        </div>
    </div>
  )
}

export default GlobalLoading
