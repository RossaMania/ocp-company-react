import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

const DeltaCity = ({ title, content, onViewDetails, isExpanded }) => {
  return (
    <div>
      <div className="card-title">
        <h2>{title}</h2>
        <p>
          <button onClick={onViewDetails}>
            View Details
            <IoIosArrowDropup />
          </button>
        </p>
      </div>
      {isExpanded && (
        <div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default DeltaCity;
