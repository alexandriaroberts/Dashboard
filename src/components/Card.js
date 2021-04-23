import React from "react";
import { ImInfo } from "react-icons/im";

const Card = ({ balance, title }) => {
  return (
    <div
      className={`transform hover:scale-110 cursor-pointer transition delay-100 w-3/12  p-2 py-4  border rounded-xl bg-gray-100 `}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-black-200 text-xs  ">{title}</p>
        </div>
        <div className=" flex text-gray-400 items-center justify-center bg-opacity-30">
          <ImInfo className="text-tiny" />
        </div>
      </div>

      <p className="text-purple-900 text-lg font-medium  ">
        ${Math.round(balance * 100) / 100}
      </p>
    </div>
  );
};

export default Card;
