import React, {useContext} from "react";
import "./Whyme.scss";
import {illustration, whyMeSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Whyme() {
  const {isDark} = useContext(StyleContext);
  if (!whyMeSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="whyme">
      <div className="skills-main-div">
        <Fade left duration={500}>
          <div className="skills-image-div">
            {!illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/whyme.gif")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={500}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {whyMeSection.title}{" "}
            </h1>
            <p
              style = {{fontSize:"1.1rem"}}
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {whyMeSection.subTitle}
            </p>
            <div>
              {whyMeSection.skills.map((skills, i) => {
                return (
                  <p
                    style = {{fontSize:"1rem"}}
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
