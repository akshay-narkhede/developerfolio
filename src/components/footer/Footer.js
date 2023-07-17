import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={500} distance="5px">
      <div className="footer-div">
        <p style={{fontSize:"0.8rem"}} className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("modified by Akshay Narkhede")}
        </p>
        <p style={{fontSize:"0.6rem"}} className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
