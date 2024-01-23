import {
  faDollar,
  faEllipsis,
  faEllipsisV,
  faLocation,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function JobCard({data}) {



  

  return (
    <div className="w-[256px] h-[241px] border-2 p-2 rounded-lg flex flex-col justify-between bg-white">
      <div className="flex w-full justify-between ">
        <div className="w-[47px] h-[47px] flex justify-center items-center rounded-full mt-3 bg-[#F6F9FE]">
          <img
            src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706023802/figma_rcmnep.png"
            alt="jd-icon"
          />
        </div>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>

      <h2 className="font-semibold text-[14px]">{data.designation}</h2>
      <ul className="text-[12px] flex flex-col gap-1">
        <li className="text-[#747474]">
          <img
            src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706025294/location_xn86k9.svg"
            alt="location"
            className="inline mr-2"
          />{" "}
          {data.location}
        </li>
        <li className="text-[#747474]">
          <img
            src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706025267/dollar_frgjcv.svg"
            alt="dollar"
            className="inline mr-2"
          />
         {data.salary}
        </li>
        <li className="text-[#747474]">
          {" "}
          <img
            src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706025266/experience_bldokw.svg"
            alt="experience"
            className="inline mr-2"
          />
         {data.experience}
        </li>
      </ul>
      <div className="flex gap-2">
        <div className=" bg-[#FF8600] py-[5px] px-2 rounded-lg text-[9px] text-white"><p>14 Application</p></div>
        <div className=" bg-[#5956E9] p-[5px] px-2 rounded-lg text-[9px] text-white"><p>12 In Process</p></div>
        <div className=" bg-[#3CD856] p-[5px] px-2 rounded-lg text-[9px] text-white"><p>14 Selected </p></div>
      </div>
    </div>
  );
}

export default JobCard;
