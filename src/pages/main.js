import * as React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { HiExternalLink } from "react-icons/hi"

import scrollTo from "gatsby-plugin-smoothscroll";
import testImg from "../images/icon.png"
import ivyVines from "../images/ivy-vines.jpg"

import "../css/main.css"

const pageStyle = {
  display: "flex",
  alignitems: "center",
  justifyContent: "start",
  backgroundColor: "#121212",
  width: "100vw",
  height: "100vh",
  margin: "0",
  padding: "0",
  fontFamily: "Verdana, sans-serif",
  lineHeight: "1.5"
};

/**
 * LEFT SIDE (INFO AND HERO SECTION)
 */

const sideHeader = {
  position: "fixed",
  display: "flex",
  backgroundColor: "#121212",
  height: "100vh",
  width: "50vw",
  alignSelf: "self-start",
  justifyContent: "start",
  flexDirection: "column",
};

const sideHeaderBringRight = {
  height: "100vh",
  width: "500px",
  // border: "1px solid black",
  alignSelf: "end",
  flexDirection: "row",
};

const titleContainer = {
  fontSize: "3em",
  alignSelf: "start",
  height: "10vh",
  width: "60%",
  // border: "1px solid black",
  margin: "5vh 5vh 0 5vh",
};

const titleStyle = {
  alignSelf: "start",
  fontSize: "3rem",
  // border: "1px solid black",
  fontFamily: "Segoe UI, Arial, sans-serif",
  fontWeight: "bold",
  margin: "5px",
  color: "#FFFFFF",
};

const subTitleStyle = {
  alignSelf: "start",
  fontSize: "1.2rem",
  // border: "1px solid black",
  margin: "-10px 0px 0px 7px",
  fontFamily: "Verdana, sans-serif",
  fontWeight: "bold",
  color: "#FFFFFF",
};

const descriptionTitleStyle = {
  alignSelf: "start",
  fontSize: "1rem",
  // border: "1px solid black",
  fontFamily: "Verdana, sans-serif",
  margin: "15px 0px 0px 7px",
  color: "#ADADAD",
  lineHeight: "1.3"
};

const linkContainer = {
  fontSize: "2.5em",
  flexDirection: "row",
  justifyContent: "space-between",
  alignSelf: "start",
  height: "12vh",
  width: "60%",
  margin: "10vh 5vh 0 5vh",
  color: "#ADADAD"
};

const linkStyle = {
  fontSize: "12px",
  fontWeight: "bold",
  margin: "15px 10px",
  cursor: "pointer"
};

const socialsContainer = {
  top: "40vh",
  position: "relative",
  display: "flex",
  fontSize: "2.5em",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "start",
  height: "40px",
  width: "65%",
  // border: "1px solid black",
  margin: "10vh 5vh 0 5vh",
  color: "#FFFFFF"
};

const socialStyle = {
  alignSelf: "start",
  height: "2.5rem",
  width: "2.5rem",
  margin: "0px 10px 0px 0px",
};

/**
 * RIGHT SIDE (PROJECTS)
 */

const scrollSection = {
  position: "absolute",
  display: "flex",
  backgroundColor: "#121212",
  height: "600vh",
  width: "50vw",
  alignSelf: "end",
  right: "-25px",
};

const scrollSectionBringLeft = {
  position: "relative",
  height: "100vh",
  // border: "1px solid white",
  alignSelf: "end",
  flexDirection: "row",
  left: "0px",
};

const originStyle = {
  // border: "1px solid white",
  width: "450px",
  height: "450px",
  margin: "5vh 0 0 25px",
  color: "#999999",
  fontSize: "14px",
  fontWeight: "400",
  fontFamily: "Verdana, sans-serif",
  lineHeight: "1.5"
};

const experienceListContainer = {
  display: "flex",
  flexDirection: "column",
//   border: "1px solid black",
  width: "450px",
  height: "1000px",
  margin: "10vh 0 0 25px",
};

const experienceStyle = {
  display: "flex",
  width: "550px",
  height: "auto",
  color: "black",
  margin: "1rem 0 1rem 0",
  padding: "25px 10px 25px 10px",
//   border: "1px solid black"
};

const experienceDateHeader = {
  position: "relative",
  height: "100%",
  width: "30%",
  fontSize: ".8rem",
  left: "-10px",
  top: "3px",
  fontWeight: "500",
  color: "#B8B8B8",
//   border: "1px solid white",
};

const experienceCard = {
  position: "relative",
  left: "0px",
  width: "95%",
  borderRadius: "10%"
};

const experienceTitle = {
  position: "relative",
  fontSize: ".9rem",
  fontWeight: "500",
  color: "#EBEBEB"
};

const experienceTeam = {
  position: "relative",
  fontSize: "14px",
  color: "#B8B8B8"
};

const experienceDescription = {
  position: "relative",
  fontSize: "14px",
  width: "80%",
  color: "#999999"
};

const projectListContainer = {
  display: "flex",
  flexDirection: "column",
//   border: "1px solid white",
  width: "450px",
  height: "1000px",
  margin: "10vh 0 0 25px",
};

const projectStyle = {
  display: "flex",
  width: "450px",
  height: "300px",
  border: "1px solid white",
  color: "black",
  margin: "1rem 0 0 0",
};

const projectPhotoHeader = {
  position: "relative",
  height: "30%",
  width: "30%",
  fontSize: ".8rem",
  top: "5px",
  border: "1px solid black",
  margin: "-5px 10px 10px 0px"
};

const projectCard = {
  position: "relative",
  width: "100%",
};

const projectTitle = {
  position: "relative",
  fontSize: "1rem",
};

const teamTitle = {
  position: "relative",
  fontSize: "14px",
};

const projectDescription = {
  position: "relative",
  fontSize: "14px",
};

const tagContainer = {
  display: "flex",
  flexWrap: "wrap",
  position: "relative",
  border: "1px black solid border",
  height: "10%",
};

const tagStyle = {
  position: "relative",
  width: "auto",
  height: "20%",
  border: "1.5px #688B58 solid",
  padding: "8px",
  borderRadius: "5%",
  margin: "15px 10px 0px 0px",
  fontSize: ".8rem",
};

const resumeLinkStyle = {
    fontWeight: "14px",
    color: "white"
}

const boldTextStyle = {
    color: "#EBEBEB",
    fontWeight: "550"
}

const MainPage = () => {
  return (
    <main style={pageStyle}>
      <div style={sideHeader}>
        <div style={sideHeaderBringRight}>
          <div style={titleContainer}>
            <div style={titleStyle}> Daniel Im </div>
            <div style={subTitleStyle}> Software Engineer </div>
            <div style={descriptionTitleStyle}>
              {" "}
              I build engaging and thoughtful digital experiences for the web.{" "}
            </div>
          </div>
          <div style={linkContainer}>
            <div onClick={() => scrollTo("#scroll-about")} style={linkStyle}>
              {" "}
              ABOUT
            </div>
            <div
              onClick={() => scrollTo("#scroll-experience")}
              style={linkStyle}
            >
              {" "}
              EXPERIENCE
            </div>
            <div onClick={() => scrollTo("#scroll-projects")} style={linkStyle}>
              {" "}
              PROJECTS
            </div>
          </div>
          <div style={socialsContainer}>
            <div style={socialStyle}>
              {" "}
              <AiFillGithub />{" "}
            </div>
            <div style={socialStyle}>
              {" "}
              <AiFillLinkedin />{" "}
            </div>
            <div style={socialStyle}>
              {" "}
              <BiLogoGmail />{" "}
            </div>
          </div>
        </div>
      </div>
      <div id="scroll-about" style={scrollSection}>
        <div style={scrollSectionBringLeft}>
          <div style={originStyle}>
            Back in 2017, I tried my hand at creating a game in Adobe Flash and
            fell headfirst into the world of programming and web development. Over the next few years, I dedicated myself to learn programming by completing a <b style={boldTextStyle}>fullstack
            bootcamp</b> in San Francisco, finishing my <b style={boldTextStyle}>bachelors at UC Berkeley</b>, and working at <b style={boldTextStyle}>Amazon as a
            software engineer</b> for two years.
            <br></br>
            <br></br>
            Now, I am searching for my next professional opportunity, specifically
            for <b style={boldTextStyle}>fullstack development roles</b> based in Seattle.
            <br></br>
            <br></br>
            My main focus these days is building products that meld my passion
            for games and web development. In my freetime, I've released a
            <b style={boldTextStyle}> Discord Bot</b> that been downloaded in 1000+ servers, 
            a <b style={boldTextStyle}>browser application</b> for graphing album charts,
            and a website that <b style={boldTextStyle}> guesses which Magic the Gathering</b> card you're thinking of.
            <br></br>
            <br></br>
            When I'm not on my computer, I'm lifting rocks at the gym, hosting
            hot-pot at my apartment, or releasing music on <b style={boldTextStyle} >my Soundcloud</b> (this is definitely a plug).
            <br></br>
            <br></br>I am actively seeking work opportunities. Here is my email:
            <br></br>
            <br></br>
            imdanieljae@gmail.com
            <br></br>
            <br></br>
            <HiExternalLink/>
            <a target="_blank" style={resumeLinkStyle} href="https://drive.google.com/file/d/1a3-2168ndwbbACzztowBK85TLkevTGpa/view?usp=sharing">Link to my resume</a>
          </div>
          <div id="scroll-experience" style={experienceListContainer}>
            <div className="experienceCard" style={experienceStyle}>
              <div style={experienceDateHeader}>
                2022 - 2023
                <br></br>
                <br></br>
                2021 <i> Summer Intern</i>
              </div>
              <div style={experienceCard}>
                <div style={experienceTitle}> Software Engineer 1 • Amazon </div>
                <div style={experienceTeam}> AWS Security </div>
                <div style={experienceDescription}>
                  <br></br>
                  Deliver high quality, robust production code for Amazon's
                  access-control management team. Lead design meetings to create
                  scalable APIs for managing millions of internal resources.
                  Provide deliverables within engineering department through
                  close collaboration.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>System Design</span>
                    <span style={tagStyle}>CI/CD</span>
                    <span style={tagStyle}>AmazonCDK</span>
                    <span style={tagStyle}>Spring</span>
                    <span style={tagStyle}>PSQL</span>
                    <span style={tagStyle}>Java</span>
                    <span style={tagStyle}>Ruby</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="experienceCard" style={experienceStyle}>
              <div style={experienceDateHeader}>
                2020 - 2021
                <br></br>
              </div>
              <div style={experienceCard}>
                <div style={experienceTitle}>
                  {" "}
                  Fullstack Instructor • theCoderSchool{" "}
                </div>
                <div style={experienceTeam}> Berkeley Externship </div>
                <div style={experienceDescription}>
                  <br></br>
                  Develop an interactive web app for Desmos that creates,
                  imports, and saves sharable GIFS of graphs. Implement frontend
                  layout in code, and developed efficient multi-capture mode.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>React</span>
                    <span style={tagStyle}>Redux.js</span>
                    <span style={tagStyle}>JavaScript</span>
                    <span style={tagStyle}>HTML</span>
                    <span style={tagStyle}>CSS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="experienceCard" style={experienceStyle}>
              <div style={experienceDateHeader}>
                May - Aug. 2019
                <br></br>
              </div>
              <div style={experienceCard}>
                <div style={experienceTitle}>
                  Software Engineer Co-Op • Desmos
                </div>
                <div style={experienceDescription}>
                  <br></br>
                  Develop an interactive web app for Desmos that creates,
                  imports, and saves sharable GIFS of graphs. Implement frontend
                  layout in code, and developed efficient multi-capture mode.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>React</span>
                    <span style={tagStyle}>Redux.js</span>
                    <span style={tagStyle}>JavaScript</span>
                    <span style={tagStyle}>HTML</span>
                    <span style={tagStyle}>CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scroll-projects" style={projectListContainer}>
            <div style={projectStyle}>
              <img src={testImg} style={projectPhotoHeader}/>
              <div style={projectCard}>
                <div style={projectTitle}> Software Engineer • Amazon </div>
                <div style={teamTitle}> AWS Security </div>
                <div style={projectDescription}>
                  <br></br>
                  Deliver high quality, robust production code for Amazon's
                  access-control systems team. Lead design meetings to create
                  scalable APIs for managing millions of internal resources.
                  Provide deliverables within engineering department through
                  close collaboration.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>System Design</span>
                    <span style={tagStyle}>CI/CD</span>
                    <span style={tagStyle}>AmazonCDK</span>
                    <span style={tagStyle}>Spring</span>
                    <span style={tagStyle}>PSQL</span>
                    <span style={tagStyle}>Java</span>
                    <span style={tagStyle}>Ruby</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={projectStyle}>
              <img src={testImg} style={projectPhotoHeader}/>
              <div style={projectCard}>
                <div style={projectTitle}>
                  {" "}
                  Software Engineer Co-Op • Desmos{" "}
                </div>
                <div style={teamTitle}> AWS Security </div>
                <div style={projectDescription}>
                  <br></br>
                  Develop an interactive web app for Desmos that creates,
                  imports, and saves sharable GIFS of graphs. Implement frontend
                  layout in code, and developed efficient multi-capture mode.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>React</span>
                    <span style={tagStyle}>Redux.js</span>
                    <span style={tagStyle}>JavaScript</span>
                    <span style={tagStyle}>HTML</span>
                    <span style={tagStyle}>CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;

const body = {
  backgroundColor: "#121212",
};

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <title>Daniel Jae Im</title>
      <meta name="description" content="Hello World" />
      <body style={body} />
    </>
  );
};
