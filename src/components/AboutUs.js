import React from "react";
import { IoIosArrowDropup } from "react-icons/io";
import DickJonesOCPLogo from "../images/DickJonesOCPLogo.jpg"


const AboutUs = ({ title, content, onViewDetails, isExpanded, }) => {
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
        <div className="card-body about-body">
          <img src={DickJonesOCPLogo} alt="Dick Jones of OCP" />
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
