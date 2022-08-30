import React from "react";
import { locale } from "../../core/i18n";

const About = () => {
  return (
    <>
      <div className="about mb-3">
        <h2>{locale.label.aboutUs}</h2>
        <p>{locale.label.aboutUsText1}</p>
        <p>{locale.label.forMoreDetailContactUs}</p>
        <p>{locale.label.contactNumber}</p>
      </div>
    </>
  );
};

export default About;
