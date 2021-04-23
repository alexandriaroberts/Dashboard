import React from "react";
import Logo from "../assets/APYvisionLogo.png";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="md:w-3/12 w-6/12 h-screen mr-8 xl:block lg:hidden md:hidden sm:hidden">
      <div className=" px-10 mt-7 mb-7 flex justify-around ">
        <img src={Logo} alt="Logo of APY Vision"></img>
      </div>
      <div className="pl-12">
        <div className="space-y-4">
          <div className="flex py-3 ">
            <IoMdArrowForward className="flex text-purple-700 text-base" />
            <h1 className=" flex text-purple-700 text-tiny pl-2">Dashboard</h1>
          </div>
          <h2 className="text-grey-800 pb-8 font-medium">Pools</h2>

          <div className="">
            <div className="flex  mt-7 space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <p className="text-grey-800 text-xs">FAQ</p>
            </div>
          </div>
          <div className="">
            <div className="flex  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <p className="text-grey-800 text-xs">Blog</p>
            </div>
          </div>
          <div className="">
            <div className="flex  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <p className="text-grey-800  text-xs">Support us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
