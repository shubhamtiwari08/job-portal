import React from "react";
import {
  faBars,
  faBell,
  faComment,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="flex border-2 rounded-xl m-2 justify-between items-center pr-2 bg-white">
     <div className="flex items-center relative ">
     <div className="p-2 bg-[#F5F8FE] m-2 rounded-lg">
        <p className="text-[#9B9B9B] text-[9px]">Your Organisation</p>
        <p className="text-[#000] text-[12px] font-semibold">Skill Genics</p>
      </div>
      <div className=" bg-[#F5F8FE] rounded-lg pl-2 ">
        <FontAwesomeIcon icon={faSearch} className="text-[#7E7E7E]"/>
        <input type="text" className="w-[216px]  bg-[#F5F8FE] outline-none  rounded-md p-2" placeholder="Search" />
      </div>
     </div>
      <div className="flex items-center gap-2">
        <div className="bg-yellow-100 px-4 py-3 rounded-lg text-orange-400"><FontAwesomeIcon icon={faBell} /></div>{" "}
        <img
          src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706022065/profile_l0hspg.jpg"
          alt="profile"
        />
      </div>
    </header>
  );
}

export default Header;
