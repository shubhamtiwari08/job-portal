import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function JobInterviewModal({ onClose }) {
  return (
    <div className="w-[981px] h-[650px] rounded-xl border-2 bg-white py-10 px-4 flex flex-col gap-4">
      <div className="flex w-full justify-between">
        <div></div>
        <h2 className="text-2xl font-semibold">Create A Job</h2>{" "}
        <div
          className="text-white w-6 h-6 flex justify-center items-center rounded-full bg-red-600"
          onClick={() => onClose()}
        >
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
     <div className="flex gap-4 mx-auto" >
     <div className="flex flex-col gap-1" >
        <div className="p-2 border-2 w-[138px] rounded-md border-black">
          Round 1
        </div>
        <div className="p-2 border-2 w-[138px] rounded-md border-black">
          Round 2
        </div>
        <div className="p-2 border-2 w-[138px] rounded-md border-black">
          Round 3
        </div>
        <div className="p-2 border-2 w-[138px] rounded-md border-black">
          Final Round{" "}
        </div>
        <button className="w-32 p-1 mt-1 bg-black text-white rounded-md">Add Round</button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="p-2 border-2 w-[260px] text-[#5956E9] rounded-md border-[#5956E9] relative">
          Skill Assesment   <div
          className="text-white w-6 h-6 flex justify-center items-center rounded-full bg-red-600 absolute top-2 right-[-0.8rem]"
          
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        </div>
        <div className="p-2 border-2 w-[260px] text-[#5956E9] rounded-md border-[#5956E9] relative">
          Technical Interview
          <div
          className="text-white w-6 h-6 flex justify-center items-center rounded-full bg-red-600 absolute top-2 right-[-0.8rem]"
          
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        </div>
        <div className="p-2 border-2 w-[260px] text-[#5956E9] rounded-md border-[#5956E9] relative">
          AI based Video
          <div
          className="text-white w-6 h-6 flex justify-center items-center rounded-full bg-red-600 absolute top-2 right-[-0.8rem]"
          
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        </div>
        <div className="p-2 border-2 w-[260px] text-[#5956E9] rounded-md border-[#5956E9] relative">
         offline - onlinv interview
         <div
          className="text-white w-6 h-6 flex justify-center items-center rounded-full bg-red-600 absolute top-2 right-[-0.8rem]"
          
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        </div>
      </div>
     
     </div>
     <div className='flex flex-col gap-2 mx-auto'>
      <div className="flex gap-2"> <div className="flex flex-col"> <label htmlFor="skills">Kindly check the skills </label>
        <input type="text" placeholder='SEO ' className="bg-[#F5F4F8] p-2 w-[350px]"  /></div>
        <div className="flex flex-col"> <label htmlFor="skills">Any Platform or Any qualificaiton </label>
        <input type="text" placeholder='yes' className="bg-[#F5F4F8] p-2 w-[350px]"  />
        </div></div>
       <div className="flex gap-2">
        <div className="flex flex-col">
        <label htmlFor="skills">Finalise Questionare <span className=' p-1 text-[11px] text-white bg-[#5956E9] rounded-sm'>Edit with AI</span></label>
        <input type="text" placeholder='Intern day-to-day responsibilities include ' className="bg-[#F5F4F8] p-2 w-[350px]"  />
        </div>
        <div className="flex flex-col">
        <label htmlFor="skills">Share Availability <span className=' p-1 text-[11px] text-white bg-[#5956E9] rounded-sm'>Edit with AI</span></label>
        <input type="text" placeholder='Intern day-to-day responsibilities include ' className="bg-[#F5F4F8] p-2 w-[350px]"  />
        </div>
        <div>

        </div>
       </div>
      </div>
    


      <div className="mx-auto">
        <button
          className="w-[232px] bg-black text-white p-1 rounded-md "
          onClick={() => onClose()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default JobInterviewModal;
