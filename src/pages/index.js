import * as React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { HiExternalLink } from "react-icons/hi"

/* STATIC IMGS */
import scrollTo from "gatsby-plugin-smoothscroll";
import testImg from "../images/icon.png"
import secretH from "../images/secret-h.png"
import pathfinder from "../images/pathfinder.png"
import spotluck from "../images/spotluck.png"

/* GIFS */
import secretHGif from "../images/secret-h.gif"
import spotluckGif from "../images/spotluck.gif"
import pathfinderGif from "../images/pathfinder.gif"

import "../pages/css/main.css"
import "../images/noise.png"

const pageStyle = {
  display: "flex",
  alignitems: "center",
  justifyContent: "start",
  width: "100vw",
  height: "100vh",
  margin: "0",
  padding: "0",
  fontFamily: "Verdana, sans-serif",
  lineHeight: "1.5",
  background: "#121212",
  backgroundImage: "url('src\images\noise.png')"
};

/**
 * LEFT SIDE (INFO AND HERO SECTION)
 */

const sideHeader = {
  position: "fixed",
  display: "flex",
  height: "100vh",
  width: "50vw",
  alignSelf: "self-start",
  justifyContent: "start",
  flexDirection: "column",
  background: "#121212"
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
  textDecoration: "none"
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
  fontSize: ".8rem",
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
  height: "auto",
  margin: "5.5vh 0 0 25px",
  color: "#999999",
  fontSize: "14px",
  fontWeight: "400",
  fontFamily: "Verdana, sans-serif",
  lineHeight: "1.5"
};

const experienceListContainer = {
  display: "flex",
  flexDirection: "column",
  width: "450px",
  height: "1000px",
  margin: "15vh 0 0 25px",
};

const experienceStyle = {
  display: "flex",
  width: "550px",
  height: "auto",
  color: "black",
  margin: "1rem 0 1rem 0",
  padding: "15px 0px 15px 25px",
//   border: "1px solid black"
};

const experienceLink = {
    textDecoration: "none",
    color: "white"
}

const experienceDateHeader = {
  position: "relative",
  height: "100%",
  width: "30%",
  fontSize: ".8rem",
  left: "-10px",
  top: "3px",
  fontWeight: "500",
  color: "#B8B8B8"
};

const experienceCard = {
  position: "relative",
  left: "0px",
  width: "95%",
  borderRadius: "10%",
};

const experienceTitle = {
  position: "relative",
  fontSize: ".9rem",
  fontWeight: "500",
//   color: "#EBEBEB"
};

const experienceTeam = {
  position: "relative",
  fontSize: "14px",
  color: "#B8B8B8"
};

const experienceDescription = {
  position: "relative",
  fontSize: "13px",
  width: "80%",
  color: "#999999"
};

const projectListContainer = {
  display: "flex",
  flexDirection: "column",
  width: "450px",
  height: "auto",
  margin: "3vh 0 0 25px",
};

const projectStyle = {
    position: "relative",
    display: "flex",
    width: "550px",
    height: "auto",
    color: "black",
    margin: ".8rem 0 0rem 0",
    padding: "10px 0px 5px 25px"
};

const projectPhotoHeader = {
    position: "relative",
    height: "100px",
    borderRadius: "5%",
    width: "30%",
    left: "-20px",
    top: "3px",
    fontWeight: "500",
    color: "#B8B8B8",
    border: "1px solid #B8B8B8",
    objectFit: "cover",
    zIndex: '1'
};

const projectGifHeader = {
    position: "absolute",
    height: "100px",
    borderRadius: "5%",
    width: "22%",
    left: "5px",
    top: "14px",
    fontWeight: "500",
    color: "#B8B8B8",
    border: "1px solid #B8B8B8",
    objectFit: "cover",
    zIndex: '0'
};

const projectCard = {
    position: "relative",
    left: "0px",
    width: "100%",
    borderRadius: "10%"
};

const projectTitle = {
    position: "relative",
    fontSize: ".9rem",
    fontWeight: "500",
    // color: "#EBEBEB"
};

const projectIntroDiv = {
    fontSize: "1rem",
    color: "white"
}

const projectDescription = {
  position: "relative",
  fontSize: "12.5px",
  width: "80%",
  top: "-10px",
  color: "#999999"
};

const tagContainer = {
  display: "flex",
  flexWrap: "wrap",
  position: "relative",
  height: "10%"
};

const tagStyle = {
  position: "relative",
  width: "auto",
  padding: "5px 5px",
  borderRadius: "10%",
  margin: "15px 15px 0px 0px",
  backgroundColor: "#152826",
  fontSize: "11px",
  color: "#5D9880"
};

const resumeLinkStyle = {
    fontWeight: "14px",
    color: "white",
    textDecoration: "none"
}

const boldTextStyle = {
    color: "#EBEBEB",
    fontWeight: "550",
    textDecoration: "none"
}

const IndexPage = () => {
  return (
    <main style={pageStyle}>
      <div style={sideHeader}>
        <div style={sideHeaderBringRight}>
          <div style={titleContainer}>
            <div style={titleStyle}> Daniel Im </div>
            <div style={subTitleStyle}> Software Engineer </div>
            <div style={descriptionTitleStyle}>
              <li><a href="https://aws.amazon.com/" target="_blank">Amazon AWS</a> Software Engineer (2 years)</li>
              <li>CS Graduate @ <a href="https://eecs.berkeley.edu/academics/undergraduate/cs-ba" target="_blank">UC Berkeley</a> - Tech GPA 3.5</li>
              <li>Fullstack Certified @ <a href="https://www.rithmschool.com/" target="_blank">Rithm School</a></li>
              <br></br>
              <HiExternalLink/>
                <a id="resumeLink" target="_blank" style={resumeLinkStyle} href="https://drive.google.com/file/d/1a3-2168ndwbbACzztowBK85TLkevTGpa/view?usp=sharing">Link to my resume</a>
              <br></br>
              <br></br>

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
            fell headfirst into the world of programming.
            <br></br>
            {/* <br></br> */}
            {/* Now, I am searching for my next professional opportunity, specifically
            for <b style={boldTextStyle}>fullstack development roles</b> based in Seattle. */}
            {/* <br></br> */}
            <br></br>
            My main focus these days is building products that meld my passion
            for games, music, and the internet. 
            <br></br>
            <br></br>
            Come check out some of my projects below, and if you like what you see, reach out via email -  
            <a target="_blank" href="mailto:imdanieljae@gmail.com">
                imdanieljae@gmail.com
            </a>
            <br></br>
            <br></br>I am actively seeking work opportunities!
            <br></br>
            <br></br>
            </div>
          <div id="scroll-projects" style={projectListContainer}>
            {/* <div style={projectIntroDiv}> Here are some projects I am really proud of: </div> */}
            <div className="projectStyle" style={projectStyle}>
              <img id="projectPhotoHover" src={secretH} style={projectPhotoHeader}/>
              <img src={secretHGif} style={projectGifHeader}/>
              <div style={projectCard}>
                <div id="experienceTitle" style={projectTitle}> Secret H. Discord Bot </div>
                <div style={projectDescription}>
                  <br></br>
                  A Discord app built during COVID that automatically
                  moderates games of Secret Hitler over Discord. Unmask traitors,
                  forge alliances, and ignite chaos in this intense social deduction game.
                  <br></br>
                  Now in 100+ servers.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>React</span>
                    <span style={tagStyle}>Node.js</span>
                    <span style={tagStyle}>Discord API</span>
                    <span style={tagStyle}>Web Hosting</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectStyle" style={projectStyle}>
              <img id="projectPhotoHover" src={spotluck} style={projectPhotoHeader}/>
              <img src={spotluckGif} style={projectGifHeader}/>
              <div style={projectCard}>
                <div id="experienceTitle" style={projectTitle}>
                    Spotluck - Music Recommender
                </div>
                <div style={projectDescription}>
                  <br></br>
                  Browser application that leverages Spotify's SDK to recommend new 
                  music based on top your favorite artists, and various sonic 
                  qualities.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>Javascript</span>
                    <span style={tagStyle}>Spotify API</span>
                    <span style={tagStyle}>CSS</span>
                    <span style={tagStyle}>Music Theory</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectStyle" style={projectStyle}>
              <img id="projectPhotoHover" src={pathfinder} style={projectPhotoHeader}/>
              <img src={pathfinderGif} style={projectGifHeader}/>
              <div style={projectCard}>
                <div id="experienceTitle" style={projectTitle}>
                    Pathfinding Algorithm Visualizer
                </div>
                <div style={projectDescription}>
                  <br></br>
                  An inbrowser pathfinding visualizer for Djikstra's, A*, BFS/DFS with 
                  the ability to add mazes.
                  <br></br>
                  <div style={tagContainer}>
                    <span style={tagStyle}>React</span>
                    <span style={tagStyle}>HTML5</span>
                    <span style={tagStyle}>CSS</span>
                    <span style={tagStyle}>Search Algorithms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    <div id="scroll-experience" style={experienceListContainer}>
            <div className="experienceStyle" style={experienceStyle}>
              <div style={experienceDateHeader}>
                2022 - 2023
                <br></br>
                <br></br>
                2021 <i> Summer Intern</i>
              </div>
              <div style={experienceCard}>
                <a style={experienceLink} target="_blank" href="https://www.amazon.jobs/en/business_categories/amazon-security">
                    <div id="experienceTitle" style={experienceTitle}> Software Engineer 1 • Amazon </div>
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
                        <span style={tagStyle}>AmazonCDK</span>
                        <span style={tagStyle}>Java</span>
                        <span style={tagStyle}>System Design</span>
                        <span style={tagStyle}>CI/CD</span>
                        <span style={tagStyle}>Spring</span>
                        <span style={tagStyle}>PSQL</span>
                        <span style={tagStyle}>Git</span>
                    </div>
                    </div>
                </a>
              </div>
              
            </div>
            <div className="experienceStyle" style={experienceStyle}>
              <div style={experienceDateHeader}>
                2020 - 2021
                <br></br>
              </div>
              <div style={experienceCard}>
                <a style={experienceLink} target="_blank" href="https://www.thecoderschool.com/">
                    <div id="experienceTitle" style={experienceTitle}>
                    {" "}
                    Fullstack Instructor • theCoderSchool{" "}
                    </div>
                    <div style={experienceTeam}> Berkeley Externship </div>
                    <div style={experienceDescription}>
                    <br></br>
                    Translated my fullstack experience from bootcamp and internship, and taught it to 10+ high school students across the school year.
                    Led monthly modules for peer instructors to learn React and web development.
                    <br></br>
                    <div style={tagContainer}>
                        <span style={tagStyle}>React</span>
                        <span style={tagStyle}>Python</span>
                        <span style={tagStyle}>CSS</span>
                        <span style={tagStyle}>Javascript</span>
                    </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="experienceStyle" style={experienceStyle}>
              <div style={experienceDateHeader}>
                May - Aug. 2019
                <br></br>
              </div>
              <div style={experienceCard}>
              <a style={experienceLink} target="_blank" href="http://www.gifsmos.com/">
                    <div id="experienceTitle" style={experienceTitle}>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

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
