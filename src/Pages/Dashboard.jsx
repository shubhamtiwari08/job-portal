import React, { useState } from "react";
import JobCard from "../Components/JobCard";
import CreateJobModal from "../Components/Modals/CreateJobModal";
import JobApplicationModal from "../Components/Modals/JobApplicationModal";
import JobDescriptionModal from "../Components/Modals/JobDescriptionModal";
import JobInterviewModal from "../Components/Modals/JobInterviewModal";

const Modal = ({ id, content, onClose }) => {
  return (
    <div
      id={id}
      className="modal hidden fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50"
    >
      <div className="modal-content mx-auto my-8 p-6 bg-white w-1/2">
        {content}
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 mt-4"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

function Dashboard() {
  const jobData = [
    {
      designation: "Senior Product Designer",
      location: "Indore,Mp,India",
      salary: "10,000,00 - 15,000,00",
      experience: "2 Year Experience",
    },
    {
      designation: "Frontend Developer",
      location: "Bangalore, Karnataka, India",
      salary: "8,000,00 - 12,000,00",
      experience: "3 Year Experience",
    },
    {
      designation: "Marketing Manager",
      location: "Mumbai, Maharashtra, India",
      salary: "12,000,00 - 18,000,00",
      experience: "5 Year Experience",
    },
    {
      designation: "Data Scientist",
      location: "Pune, Maharashtra, India",
      salary: "15,000,00 - 20,000,00",
      experience: "4 Year Experience",
    },
    // Add more job objects as needed
    {
      designation: "Software Engineer",
      location: "Hyderabad, Telangana, India",
      salary: "9,000,00 - 14,000,00",
      experience: "2 Year Experience",
    },
    {
      designation: "UX/UI Designer",
      location: "Chennai, Tamil Nadu, India",
      salary: "11,000,00 - 16,000,00",
      experience: "3 Year Experience",
    },
    {
      designation: "HR Specialist",
      location: "Delhi, India",
      salary: "13,000,00 - 17,000,00",
      experience: "6 Year Experience",
    },
    {
      designation: "Backend Developer",
      location: "Kolkata, West Bengal, India",
      salary: "10,000,00 - 15,000,00",
      experience: "4 Year Experience",
    },
    {
      designation: "Sales Executive",
      location: "Ahmedabad, Gujarat, India",
      salary: "8,000,00 - 12,000,00",
      experience: "2 Year Experience",
    },
    {
      designation: "Product Manager",
      location: "Jaipur, Rajasthan, India",
      salary: "14,000,00 - 20,000,00",
      experience: "5 Year Experience",
    },
    {
      designation: "Full Stack Developer",
      location: "Noida, Uttar Pradesh, India",
      salary: "12,000,00 - 16,000,00",
      experience: "3 Year Experience",
    },
    {
      designation: "Full Stack Developer",
      location: "Noida, Uttar Pradesh, India",
      salary: "12,000,00 - 16,000,00",
      experience: "3 Year Experience",
    },
  ];

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);

  const openModal = (modalId) => {
    if (modalId === "modal1") {
      setModal1Visible(true);
    } else if (modalId === "modal2") {
      setModal2Visible(true);
    } else if (modalId === "modal3") {
      setModal3Visible(true);
    } else if (modalId === "modal4") {
      setModal4Visible(true);
    }
  };

  const closeModal = (modalId) => {
    if (modalId === "modal1") {
      setModal1Visible(false);
    } else if (modalId === "modal2") {
      setModal2Visible(false);
    } else if (modalId === "modal3") {
      setModal3Visible(false);
    } else if (modalId === "modal4") {
      setModal4Visible(false);
    }
  };

  return (
    <div className="ml-2 ">
      <div className="w-full flex justify-between my-4 mr-2">
        {" "}
        <h2 className="text-xl text-black font-semibold">Active Jobs</h2>{" "}
        <div className="relative flex items-center gap-2 text-bold bg-white rounded-lg">
          <p>Active{" "}</p>
          <div className="bg-gray-300 w-12 h-6 rounded-full shadow-inner"></div>{" "}
          <div
            className={`dot bg-white w-5 h-5 rounded-full shadow-md absolute top-[1rem] left-14
        }`}
          ></div>
           <button
          className="w-[167px] bg-black text-white py-[14px] px-38px rounded-lg mr-2"
          onClick={() => openModal("modal1")}
        >
          Create Job
        </button>
        </div>{" "}
       
      </div>
      <div className=" flex gap-4 flex-wrap">
        {jobData.map((item) => (
          <JobCard data={item} />
        ))}
      </div>

      {modal1Visible && (
        <div
          className="absolute z-10 bg-slate-600/60 w-full top-0 right-0 h-screen p-4 flex items-center justify-center"
          onClick={() => closeModal("modal1")}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CreateJobModal
              onOpen={() => openModal("modal2")}
              onClose={() => closeModal("modal1")}
            />
          </div>
        </div>
      )}
      {modal2Visible && (
        <div
          className="absolute z-10 bg-slate-600/60 w-full top-0 right-0 h-screen p-4 flex items-center justify-center"
          onClick={() => closeModal("modal2")}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <JobApplicationModal
              onOpen={() => openModal("modal3")}
              onClose={() => closeModal("modal2")}
            />
          </div>
        </div>
      )}
      {modal3Visible && (
        <div
          className="absolute z-10 bg-slate-600/60 w-full top-0 right-0 h-screen p-4 flex items-center justify-center"
          onClick={() => closeModal("modal3")}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <JobDescriptionModal
              onOpen={() => openModal("modal4")}
              onClose={() => closeModal("modal3")}
            />
          </div>
        </div>
      )}
      {modal4Visible && (
        <div
          className="absolute z-10 bg-slate-600/60 w-full top-0 right-0 h-screen p-4 flex items-center justify-center"
          onClick={() => closeModal("modal4")}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <JobInterviewModal onClose={() => closeModal("modal4")} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
