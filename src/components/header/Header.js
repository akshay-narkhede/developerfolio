import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  aboutInfo
} from "../../portfolio";
import ReactGA from 'react-ga';


const TRACKING_ID = "UA-135618960-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewAbout = aboutInfo.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  
  const handleClick = (category,action,label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  }
  

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          {/* <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span> */}
          {isDark ? 
            <img
                  alt="Akshay Narkhede"
                  style = {{height:"50px",marginLeft:"1.5rem"}}
                  // src={require("../../assets/images/ANLogo.png")}
                  src={require("../../assets/images/an-white-logo-no-background.png")}
            ></img>
            :
            <img
                  alt="Akshay Narkhede"
                  style = {{height:"50px",marginLeft:"1.5rem"}}
                  // src={require("../../assets/images/ANLogo_white.png")}
                  src={require("../../assets/images/an-black-logo-no-background.png")}
            ></img>
          }
          
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#whyme">Why me?</a>
            </li>
          )}
          {viewAbout && (
            <li>
              <a href="#about">About</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewBlog && (
            <li>  
              <a href="#blogs">Why me?</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#Projects">Projects</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="./game/pong.html?utm_source=game&utm_medium=header&utm_campaign=pong" target="_blank">Play Pong <img
                  style = {{height:"20px"}}
                  src={require("../../assets/images/pong.png")}
            ></img>
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={()=>handleClick("buttonClick","toggleTheme","toggleTheme-buttonClick")}>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
