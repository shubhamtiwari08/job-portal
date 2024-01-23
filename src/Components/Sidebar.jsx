import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClose,
  faDashboard,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="py-[16px] px-6  text-custom-gray-300 h-screen flex flex-col justify-between bg-[#1C212D] text-white ">
     
      <>
        <div className="flex flex-col gap-y-[24px]  ">
          <div>
            <div
              className=" w-[192px] flex items-center gap-x-[12px] 
           
          box-border px-[6px] h-[42px] 
           "
            >
              <div>
                <img
                  className="w-[43px] h-[39px] rounded"
                  src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706019938/logo_bpfvnl.svg"
                  alt="logo-enterprise"
                />
              </div>
              <h2 className=" text-[26px] font-semibold ">
                Logo
              </h2>

              

               
            </div>
          </div>

          <div className="flex flex-col gap-4 text-[14px] font-inter text-[#FFF]">
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
                  <img
                    src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015735/dashboard-svgrepo-com_2_z7h9qc.svg"
                    alt="home"
                    className="inline-block mr-2"
                  />{" "}
                  Home
                </div>{" "}
                <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015925/chat_irw7jn.svg"
                    alt="chat"
                    className="inline-block mr-2"
                  />{" "}
                  Chat{" "}
                </div>{" "}
                <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015925/activity_vaazog.svg"
                alt="activities"
                className="inline-block mr-2"
              />{" "}
              Activities{" "}

              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>

            <p className="text-[#666E85]">RECRUITMENT</p>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center text-black bg-yellow-400 p-2 rounded-md">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015925/job_tt2ny0.svg"
                alt="jobs"
                className="inline-block mr-2"
              />{" "}
              Jobs{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015924/interview_zbd0yr.svg"
                alt="Interviews"
                className="inline-block mr-2"
              />{" "}
              Interviews{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015923/hires_dbwbmg.svg"
                alt="newhires"
                className="inline-block mr-2"
              />{" "}
              New Hires{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <p className="text-[#666E85]">ORGANISATION</p>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015923/company_ue1eh1.svg"
                alt="Company Profile"
                className="inline-block mr-2"
              />{" "}
              Company Profile{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015923/community_i6m92w.svg"
                alt="Community"
                className="inline-block mr-2"
              />{" "}
              Community{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015923/hrtool_mdbdi5.svg"
                alt="Team"
                className="inline-block mr-2"
              />{" "}
              Team{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015923/team_oustio.svg"
                alt="hrtoolbox"
                className="inline-block mr-2"
              />{" "}
              HR Tool Box{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015922/reports_soqrwj.svg"
                alt="Reports"
                className="inline-block mr-2"
              />{" "}
              Reports{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <div className="w-full flex justify-between items-center">
                {" "}
                <div>
              <img
                src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706015922/settings_krkgaq.svg"
                alt="Settings"
                className="inline-block mr-2"
              />{" "}
              Settings{" "}
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
              </div>{" "}
            </NavLink>
          </div>
        </div>
      </>
    </div>
  );
}

export default Sidebar;
