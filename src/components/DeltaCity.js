import React from "react";
import { IoIosArrowDropup } from "react-icons/io";
import DeltaCityPresentation from "../images/DeltaCityPresentation.png";

import { AnimatePresence, motion } from "framer-motion";

const DeltaCity = ({ title, content, onViewDetails, isExpanded }) => {
  return (
    <div className="whole-card">
      <div className="card-title">
        <h2>{title}</h2>
        <p>
          <button onClick={onViewDetails}>
            View Details{" "}
            <motion.span animate={{ rotate: isExpanded && 180 }}>
              <IoIosArrowDropup className="button-icon" />
            </motion.span>
          </button>
        </p>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="card-body deltacity-body"
          >
            <p className="content-text">{content}</p>
            <img
              src={DeltaCityPresentation}
              alt="Delta City"
              className="publicity-image"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeltaCity;
