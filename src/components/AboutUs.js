import React from "react";
import DickJonesOCPLogo from "../images/DickJonesOCPLogo.jpg"

import { AnimatePresence, motion } from "framer-motion";


const AboutUs = ({ title, content, onViewDetails, isExpanded, }) => {
  return (
    <div className="whole-card">
      <div className="card-title">
        <h2>{title}</h2>
        <p>
          <button onClick={onViewDetails}>
            View Details{" "}
            <motion.span
              className="button-icon"
              animate={{ rotate: isExpanded ? 180 : 0 }}
            >
              &#9651;
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
            className="card-body about-body"
          >
            <img
              src={DickJonesOCPLogo}
              alt="Dick Jones of OCP"
              className="publicity-image"
            />
            <p className="content-text">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs;
