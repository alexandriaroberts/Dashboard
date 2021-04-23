import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Icon from "../assets/btnIcon.svg";

const Header = ({ data }) => {
  return (
    <div className="flex mt-8 mb-6 justify-between  ">
      <div className="flex space-x-3  ">
        <p className="text-gray-900 text-lg font-semibold">
          Your liquidity pool positions:{" "}
        </p>
      </div>
      <div className="flex space-x-4 text-gray-400 rounded-full bg-blue-500 mr-3">
        {
          <div className="flex justify-center">
            <button className="px-2 py-2 text-white inline-flex items-center">
              <img src={Icon} alt="Icon" className="px-1"></img>
              {data.address ? data.address.slice(0, 9) : ""}
              <RiArrowDownSLine className="text-white" />
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
