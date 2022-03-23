import React from "react";
import { dateConvertor } from "../utils/dateConvertor";

const Card = ({ title, image, date, children, source }) => {
  return (
    <div className="bg-blue border-2 max-w-2xl rounded	">
      <div className="grid sm:grid-cols-4 grid-cols-1 w-full p-4 py-3">
        <div className="grid-1 col-span-3">
          <h3 className="text-sm text-gray-500 font-semibold">{source}</h3>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-400 mt-2 line-clamp-2">{children}</p>
          <p className="mt-2 text-xs text-gray-400 "> {dateConvertor(date)}</p>
        </div>
        <div className="grid-1 flex items-center justify-center sm:mt-0 mt-4">
          <div className="px-2">
            <img
              className="rounded mt-3"
              src={image || "https://via.placeholder.com/130x100?text=No+Image"}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
