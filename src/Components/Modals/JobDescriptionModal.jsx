import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function JobDescriptionModal({onClose,onOpen}) {
    const handleSave =() =>{
        onOpen()
        onClose()
    }
  return (
    <div className="w-[981px] h-[600px] rounded-xl border-2 bg-white py-10 px-4 flex flex-col gap-4">
         <div className="flex w-full justify-between">
        <div></div>
        <h2 className="text-2xl font-semibold">Create A Job</h2>{" "}
        <div className="text-white w-6 h-6 flex justify-center items-center rounded-full bg-red-600" onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <div className="flex mx-auto gap-6 text-[12px] ">
        <span className="w-5 h-5 rounded-full border-[1px] inline-block flex justify-center items-center">
          1
        </span>
        <p>job Application</p>
        <span className="w-5 h-5 rounded-full border-[1px] inline-block flex justify-center items-center">
          2
        </span>{" "}
        <p>Job Description</p>
        <span className="w-5 h-5 rounded-full border-[1px] inline-block flex justify-center items-center">
          3
        </span>
        <p>Interview Process</p>
      </div>
      <div className="w-[787px] bg-[#F6F9FE] h-[105px] flex text-[#7E7E7E] text-[16px] text-center p-2 justify-center items-center rounded-lg mx-auto">
        <p>
          A job represents a new opening, an open position or a vacancy listing.
          Creating a job will allow you to add candidates to that job and
          advertise it on your career page and job boards.
        </p>
      </div>
      <div className='flex flex-col gap-2 mx-auto'>
        <label htmlFor="skills">Skills Required <span className=' p-1 text-[11px] text-white bg-[#5956E9] rounded-sm'>Suggest with AI</span></label>
        <input type="text" placeholder='software engineer' className="bg-[#F5F4F8] p-2 w-[732px]"  />
        <label htmlFor="skills">Inter's Responsibilities <span className=' p-1 text-[11px] text-white bg-[#5956E9] rounded-sm'>Edit with AI</span></label>
        <input type="text" placeholder='Intern day-to-day responsibilities include ' className="bg-[#F5F4F8] p-2 w-[732px]"  />
      </div>
      <div className="mx-auto"><button className="w-[232px] bg-black text-white p-1 rounded-md " onClick={handleSave}>save & next</button></div>

    </div>
  )
}

export default JobDescriptionModal