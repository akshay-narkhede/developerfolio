import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="contact">
      <div className="contact-main-div">
      <Fade right duration={300}>
        <div className="contact-image-div">
            {!illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="meh"
                src={require("../../assets/images/coding_cat.jpeg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade left duration={300}>
          <div className="contact-text-div">
            <h1
              className={isDark ? "dark-mode contact-heading" : "contact-heading"}
            >
              {contactInfo.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
          </div>
          <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
        </Fade>
        
      </div>
    </div>
  );
}
