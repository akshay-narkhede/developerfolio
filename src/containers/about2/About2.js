import React, {useContext} from "react";
import "./About.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo, aboutInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={300} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{aboutInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode about-subtitle"
                  : "subTitle about-subtitle"
              }
            >
              {aboutInfo.para1}
            </p>

          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
