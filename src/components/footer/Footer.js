import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-135618960-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const handleClick = (category,action,label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  }
  return (
    <Fade bottom duration={50} distance="5px">
      <div className="footer-div">
        <p style={{fontSize:"1rem", margin: 0}} className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Akshay Narkhede ")} @ {new Date().getFullYear()}
        </p>
        <p style={{fontSize:"0.4rem"}} className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio"
             onClick={()=>handleClick("buttonClick","footer-original-link-visit","footer-original-link-visit-buttonClick")}>
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
