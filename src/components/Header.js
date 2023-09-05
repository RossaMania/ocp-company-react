import React from "react";
import FoggyNeonCity from "../backgrounds/foggyneoncity.jpg";
import OCPCompanyLogo from "../images/ocp_company_logo.jpeg";

import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();

  const yHeaderCity = useTransform(scrollY, [0, 400], [0, -50]);

  const opacityHeaderCity = useTransform(
    scrollY,
    [0, 300, 500, 800],
    [1, 0.7, 0.4, 0]
  );

  const yHeaderLogo = useTransform(scrollY, [0, 800], [0, 500]);
  const opacityHeaderLogo = useTransform(
    scrollY,
    [0, 300, 500, 800],
    [1, 0.7, 0.4, 0]
  );

  const yTextRotateRight = useTransform(scrollY, [0, 100], [0, 45]);

  const yTextMoveRight = useTransform(scrollY, [0, 100], [0, 300]);

  const yTextRotateLeft = useTransform(scrollY, [0, 100], [0, -45]);

  const yTextMoveLeft = useTransform(scrollY, [0, 100], [0, -300]);

  const TextOpacity = useTransform(
    scrollY,
    [0, 300, 500, 800],
    [1, 0.7, 0.4, 0]
  );

  return (
    <header>
      <motion.img
        style={{ opacity: opacityHeaderCity, y: yHeaderCity }}
        src={FoggyNeonCity}
        alt="City backdrop"
        id="header-city"
      />
      <motion.img
        style={{ opacity: opacityHeaderLogo, y: yHeaderLogo }}
        src={OCPCompanyLogo}
        alt="OCP company logo"
        id="header-logo"
      />
      <motion.div
        id="header-content-1"
        style={{ rotate: yTextRotateRight, x: yTextMoveRight, opacity: TextOpacity }}
      >
        <h1>It's time we gave something back.</h1>
        <h1>Good business is where you find it.</h1>
      </motion.div>
      <motion.div
        id="header-content-2"
        style={{ rotate: yTextRotateLeft, x: yTextMoveLeft, opacity: TextOpacity }}
      >
        <h1>Every citizen will have a living unit.</h1>
        <h1>Safe, secure, and clean.</h1>
      </motion.div>
      <motion.div
        id="header-content-3"
        style={{ rotate: yTextRotateRight, x: yTextMoveRight, opacity: TextOpacity }}
      >
        <h1>We need 24-hour-a-day police.</h1>
        <h1>Cops who don't eat or sleep.</h1>
      </motion.div>
    </header>
  );
};

export default Header;
