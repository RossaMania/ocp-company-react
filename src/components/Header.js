import React from "react"
import FoggyNeonCity from "../backgrounds/foggyneoncity.jpg"
import OCPCompanyLogo from "../images/ocp_company_logo.jpeg"

const Header = () => {
  return (
    <header>
      <img src={FoggyNeonCity} alt="City backdrop" />
      <img src={OCPCompanyLogo} alt="OCP company logo" />
    </header>
  );
}

export default Header