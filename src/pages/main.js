import * as React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

import scrollTo from "gatsby-plugin-smoothscroll";
import testImg from "../images/icon.png"
import ivyVines from "../images/ivy-vines.jpg"

const pageStyle = {
  display: "flex",
  alignitems: "center",
  justifyContent: "start",
  backgroundColor: "#DDD0C8",
  width: "100vw",
  height: "100vh",
  margin: "0",
  padding: "0",
  fontFamily: "Verdana, sans-serif",
};

/**
 * LEFT SIDE (INFO AND HERO SECTION)
 */

const sideHeader = {
  position: "fixed",
  display: "flex",
  backgroundColor: "#DDD0C8",
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
  color: "#292929",
};

const subTitleStyle = {
  alignSelf: "start",
  fontSize: "1.2rem",
  // border: "1px solid black",
  margin: "-10px 0px 0px 7px",
  fontFamily: "Segoe UI, Arial, sans-serif",
  fontWeight: "bold",
  color: "#292929",
};

const descriptionTitleStyle = {
  alignSelf: "start",
  fontSize: "1rem",
  // border: "1px solid black",
  fontFamily: "Helvetica Neue",
  margin: "10px 0px 0px 7px",
  color: "#292929",
};

const linkContainer = {
  // border: "1px solid black",
  fontSize: "2.5em",
  flexDirection: "row",
  justifyContent: "space-between",
  alignSelf: "start",
  height: "10vh",
  width: "60%",
  margin: "10vh 5vh 0 5vh",
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
};

const socialStyle = {
  alignSelf: "start",
  height: "2.5rem",
  width: "2.5rem",
  border: "1.5px solid black",
  margin: "0px 10px 0px 0px",
};

/**
 * RIGHT SIDE (PROJECTS)
 */

const scrollSection = {
  position: "absolute",
  display: "flex",
  backgroundColor: "#DDD0C8",
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
  color: "#292929",
  fontSize: "14.2px",
  fontWeight: "400",
  fontFamily: "Verdana, sans-serif",
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
  width: "450px",
  height: "275px",
  // border: "1px solid white",
  color: "black",
  margin: "0rem 0 1rem 0",
};

const experienceDateHeader = {
  position: "relative",
  height: "100%",
  width: "35%",
  fontSize: ".8rem",
  top: "5px",
  // border: "1px solid white",
};

const experienceCard = {
  position: "relative",
  width: "95%",
};

const experienceTitle = {
  position: "relative",
  fontSize: "1rem",

};

const experienceTeam = {
  position: "relative",
  fontSize: "14px",
};

const experienceDescription = {
  position: "relative",
  fontSize: "14px",
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
  border: "1.5px black solid",
  padding: "4px",
  borderRadius: "15px",
  margin: "15px 10px 0px 0px",
  fontSize: ".8rem",
};

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
            tumbled headfirst into the rabbit hole of coding and web
            development. To develop my skills further, I completed a fullstack
            bootcamp in SF, graduated from UC Berkeley, and worked at Amazon as a
            software engineer for two years.
            <br></br>
            <br></br>
            Now, I am searching for my next professional opportunity and looking
            for fullstack development roles based in Seattle, WA.
            <br></br>
            <br></br>
            My main focus these days is building products that meld my passion
            for games and web development. In my freetime, I've released a
            Discord Bot that been downloaded in 1000+ servers, a web app for graphing album charts,
            and a website that guesses Magic the Gathering card.
            <br></br>
            <br></br>
            When I'm not on my computer, I'm lifting rocks at the gym, hosting
            hot-pot at my apartment, or releasing music on my Soundcloud (this is a plug!).
            <br></br>
            <br></br>I am actively seeking work opportunities. Here is my email:
            <br></br>
            <br></br>
            imdanieljae@gmail.com
          </div>
          <div id="scroll-experience" style={experienceListContainer}>
            <div style={experienceStyle}>
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
            <div style={experienceStyle}>
              <div style={experienceDateHeader}>
                2020 - July 2021
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
            <div style={experienceStyle}>
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
  backgroundColor: "#DDD0C8",
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
