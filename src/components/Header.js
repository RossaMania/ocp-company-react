import React from "react"
import FoggyNeonCity from "../backgrounds/foggyneoncity.jpg"
import OCPCompanyLogo from "../images/ocp_company_logo.jpeg"

const Header = () => {
  return (
    <header>
      <img src={FoggyNeonCity} alt="City backdrop" id="header-city" />
      <img src={OCPCompanyLogo} alt="OCP company logo" id="header-logo" />
      <div id="header-content">
        <h1>
          It's time we gave something back.
          <strong>Good business is where you find it.</strong>
        </h1>
        <h2>
          Every citizen will have a living unit.
          <strong>Safe, secure, and clean.</strong>
        </h2>
        <h2>
          We need 24-hour-a-day police.
          <strong>Cops who don't eat or sleep.</strong>
        </h2>
      </div>
    </header>
  );
}

export default Header