import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi , I am <span className="font-semibold">Bharath</span>👋
      <br />A Software Engineer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="An avid software developer, persistently expanding my skill set and embracing the ever-evolving landscape of technology."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Built multiple projects over time. Curious about their impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or lookingfor a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
