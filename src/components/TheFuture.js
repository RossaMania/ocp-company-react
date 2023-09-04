import React from "react"
import { IoIosArrowDropup } from "react-icons/io";

const TheFuture = ({ title, content, onViewDetails, isExpanded }) => {
  return (
    <div className="whole-card">
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
          <p className="card-body thefuture-body">{content}</p>
        </div>
      )}
    </div>
  );
};

export default TheFuture