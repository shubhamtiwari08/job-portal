import { faCross, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CreateJobModal
({onOpen,onClose}) {

    const handlePost = () =>{
        onOpen()
        onClose()
    }
  return (
    <div className='w-[981px] h-[425px] rounded-xl border-2 bg-white py-10 px-4 flex flex-col gap-4'>
        <div className='flex w-full justify-between'><div></div><h2 className='text-2xl font-semibold'>Create A Job</h2> <div className='text-white w-6 h-6 flex justify-center items-center rounded-full bg-red-600'><FontAwesomeIcon icon={faTimes}/></div></div>
        <div className='w-full bg-[#F6F9FE] h-[252px] flex justify-center items-center rounded-lg'>
            <div className='w-[234px] h-[198px] rounded-lg bg-white flex flex-col items-center justify-center gap-2 cursor-pointer' onClick={handlePost}>
                <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706030723/paste_s6pg20.svg" alt="paste" />
                <p className='text-lg font-semibold text-[#5956E9]'>Post a Job with AI</p>
            </div>
        </div>


    </div>
  )
}

export default CreateJobModal
