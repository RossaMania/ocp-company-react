import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

const AboutUs = ({ title, content, onViewDetails, isExpanded, }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        <button onClick={onViewDetails}>
          View Details{" "}
          <IoIosArrowDropup />
        </button>
      </p>
      {isExpanded && (
        <div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
