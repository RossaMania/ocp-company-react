import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const AboutUs = ({ title, content, onViewDetails, isExpanded, }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        <button onClick={onViewDetails}>
          View Details{" "}
          <IoIosArrowDropdown />
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
