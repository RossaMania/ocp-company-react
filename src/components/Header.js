import React from "react"
import FoggyNeonCity from "../backgrounds/foggyneoncity.jpg"
import OCPCompanyLogo from "../images/ocp_company_logo.jpeg"

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <motion.img src={FoggyNeonCity} alt="City backdrop" id="header-city" />
      <motion.img src={OCPCompanyLogo} alt="OCP company logo" id="header-logo" />
      <motion.div id="header-content-1">
        <h1>
          It's time we gave something back. Good business is where you find it.
        </h1>
      </motion.div>
      <motion.div id="header-content-2">
        <h1>Every citizen will have a living unit. Safe, secure, and clean.</h1>
      </motion.div>
      <motion.div id="header-content-3">
        <h1>We need 24-hour-a-day police. Cops who don't eat or sleep.</h1>
      </motion.div>
    </header>
  );
}

export default Header