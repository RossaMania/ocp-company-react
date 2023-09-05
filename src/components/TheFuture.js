import React from "react";
import { IoIosArrowDropup } from "react-icons/io";
import RoboCopDeltaCityCropped from "../images/RoboCopDeltaCityCropped.jpg";

const TheFuture = ({ title, content, onViewDetails, isExpanded }) => {
  return (
    <div className="whole-card">
      <div className="card-title">
        <h2>{title}</h2>
        <p>
          <button onClick={onViewDetails}>
            View Details
            <IoIosArrowDropup className="button-icon" />
          </button>
        </p>
      </div>
      {isExpanded && (
        <div className="card-body thefuture-body">
          <img
            src={RoboCopDeltaCityCropped}
            alt="RoboCop"
            className="publicity-image"
          />
          <p className="content-text">{content}</p>
        </div>
      )}
    </div>
  );
};

export default TheFuture;
