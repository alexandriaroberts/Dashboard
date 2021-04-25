import React from "react";
import { BiChevronRightCircle } from "react-icons/bi";
import Table from "./Table";

const Middle = ({ data }) => {
  if (!Array.isArray(data)) return null;

  return (
    <div className="w-full mt-8 mb-6  ">
      <div className="flex mt-8 mb-6 justify-between  ">
        <div className="flex space-x-3  ">
          <p className="text-gray-900 text-md font-semibold">
            Your Current pools
          </p>
        </div>
        <div className="flex space-x-4 text-gray-400 mr-3">
          {
            <div className="flex justify-center">
              <div className="px-2 py-2 text-black inline-flex items-center">
                <p className="text-purple-900 text-sm font-medium  pr-1">
                  View exited pools
                </p>
                <BiChevronRightCircle className="text-purple-900 text-tiny font-medium" />
              </div>
            </div>
          }
        </div>
      </div>
      <div className=" w-full border">
        <div className="flex justify-between ">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Middle;
