import React, { useState } from 'react'
import JobCard from '../Components/JobCard'
import CreateJobModal from '../Components/Modals/CreateJobModal';



const Modal = ({ id, content, onClose }) => {
    return (
      <div id={id} className="modal hidden fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50">
        <div className="modal-content mx-auto my-8 p-6 bg-white w-1/2">
          {content}
          <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 mt-4">Close Modal</button>
        </div>
      </div>
    );
  };


function Dashboard() {
    const jobData = [{designation:"Senior Product Designer",location:"Indore,Mp,India",salary:"10,000,00 - 15,000,00",experience:"2 Year Experience"}, { designation: "Frontend Developer", location: "Bangalore, Karnataka, India", salary: "8,000,00 - 12,000,00", experience: "3 Year Experience" },
    { designation: "Marketing Manager", location: "Mumbai, Maharashtra, India", salary: "12,000,00 - 18,000,00", experience: "5 Year Experience" },
    { designation: "Data Scientist", location: "Pune, Maharashtra, India", salary: "15,000,00 - 20,000,00", experience: "4 Year Experience" },
    // Add more job objects as needed
    { designation: "Software Engineer", location: "Hyderabad, Telangana, India", salary: "9,000,00 - 14,000,00", experience: "2 Year Experience" },
    { designation: "UX/UI Designer", location: "Chennai, Tamil Nadu, India", salary: "11,000,00 - 16,000,00", experience: "3 Year Experience" },
    { designation: "HR Specialist", location: "Delhi, India", salary: "13,000,00 - 17,000,00", experience: "6 Year Experience" },
    { designation: "Backend Developer", location: "Kolkata, West Bengal, India", salary: "10,000,00 - 15,000,00", experience: "4 Year Experience" },
    { designation: "Sales Executive", location: "Ahmedabad, Gujarat, India", salary: "8,000,00 - 12,000,00", experience: "2 Year Experience" },
    { designation: "Product Manager", location: "Jaipur, Rajasthan, India", salary: "14,000,00 - 20,000,00", experience: "5 Year Experience" },
    { designation: "Full Stack Developer", location: "Noida, Uttar Pradesh, India", salary: "12,000,00 - 16,000,00", experience: "3 Year Experience" },
    { designation: "Full Stack Developer", location: "Noida, Uttar Pradesh, India", salary: "12,000,00 - 16,000,00", experience: "3 Year Experience" },]
 
       

      const [modal1Visible, setModal1Visible] = useState(false);
      const [modal2Visible, setModal2Visible] = useState(false);
    
      const openModal = (modalId) => {
        if (modalId === 'modal1') {
          setModal1Visible(true);
        } else if (modalId === 'modal2') {
          setModal2Visible(true);
        }
      };
    
      const closeModal = (modalId) => {
        if (modalId === 'modal1') {
          setModal1Visible(false);
        } else if (modalId === 'modal2') {
          setModal2Visible(false);
        }
      };

  return (
    <div className='ml-2 '>
      <div className='w-full flex justify-between my-4 mr-2'> <h2 className='text-xl text-black font-semibold'>Active Jobs</h2> <div>Active<button></button></div> <button className='w-[167px] bg-black text-white py-[14px] px-38px rounded-lg mr-2'>Create Job</button></div>
       <div className=' flex gap-4 flex-wrap'>
       {jobData.map(item => <JobCard data={item}/>)}
       </div>
       <button onClick={() => openModal('modal1')} className="bg-blue-500 text-white py-2 px-4 mt-4">Open Modal 1</button>
      {modal1Visible && (
         <CreateJobModal />
      )}

      {modal1Visible && (
        <button onClick={() => openModal('modal2')} className="bg-green-500 text-white py-2 px-4 mt-4">Open Modal 2 from Modal 1</button>
      )}
      {modal2Visible && (
        <Modal id="modal2" content={<p>Modal 2 Content</p>} onClose={() => closeModal('modal2')} />
      )}
    </div>
  )
}

export default Dashboard