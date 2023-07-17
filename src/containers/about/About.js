import React, {useContext} from "react";
import "./about.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection, aboutInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const {isDark} = useContext(StyleContext);
  if (!aboutInfo.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="about">
      <div className="about-main-div">
        
        <Fade left duration={300}>
          <div className="about-text-div">
            <h1
              className={isDark ? "dark-mode about-heading" : "about-heading"}
            >
              {aboutInfo.title}{" "}
            </h1>
            <p
              style = {{fontSize:"1.1rem"}}
              className={
                isDark
                  ? "dark-mode subTitle about-text-subtitle"
                  : "subTitle about-text-subtitle"
              }
            >
              {aboutInfo.para1}
            </p>
            <p
              style = {{fontSize:"1.1rem"}}
              className={
                isDark
                  ? "dark-mode subTitle about-text-subtitle"
                  : "subTitle about-text-subtitle"
              }
            >
              {aboutInfo.para2}
            </p>
          </div>
        </Fade>
        <Fade right duration={300}>
          <div className="about-image-div">
            {!illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/about-coding.jpg")}
              ></img>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}
