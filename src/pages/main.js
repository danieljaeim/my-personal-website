import * as React from "react"

const pageStyle = {
    display: "flex",
    alignitems: "center",
    justifyContent: "start",
    backgroundColor: "#DDD0C8",
    width: "100vw",
    height: "100vh",
    margin: "0",
    padding: "0",
    fontFamily: "Arial, Helvetica, sans-serif"
}

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
}

const sideHeaderBringRight = {
    height: "100vh",
    width: "500px",
    // border: "1px solid black",
    alignSelf: "end",
    flexDirection: "row",
}

const titleContainer = {
    fontSize: "3em",
    alignSelf: "start",
    height: "10vh",
    width: "60%",
    // border: "1px solid black",
    margin: "5vh 5vh 0 5vh"
}

const titleStyle = {
    alignSelf: "start",
    fontSize: "3rem",
    // border: "1px solid black",
    fontFamily: "Segoe UI, Arial, sans-serif",
    fontWeight: "bold",
    margin: "5px",
    color: "#292929"
}

const subTitleStyle = {
    alignSelf: "start",
    fontSize: "1.2rem",
    // border: "1px solid black",
    margin: "-10px 0px 0px 7px",
    fontFamily: "Segoe UI, Arial, sans-serif",
    fontWeight: "bold",
    color: "#292929"
}

const descriptionTitleStyle = {
    alignSelf: "start",
    fontSize: "1rem",
    // border: "1px solid black",
    fontFamily: "Helvetica Neue",
    margin: "10px 0px 0px 7px",
    color: "#292929"
}

const linkContainer = {
    // border: "1px solid black",
    fontSize: "2.5em",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "start",
    height: "10vh",
    width: "60%",
    margin: "10vh 5vh 0 5vh"
}

const linkStyle = {
    fontSize: "12px",
    fontWeight: "bold",
    margin: "5px 10px"
}

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
    margin: "10vh 5vh 0 5vh"
}

const socialStyle = {
    alignSelf: "start",
    height: "40px",
    width: "35px",
    fontSize: "10px",
    // border: "1px solid black",
    margin: "0 10px"
}

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
    right: "-25px"
}

const scrollSectionBringLeft = {
    position: "relative",
    height: "100vh",
    // border: "1px solid white",
    alignSelf: "end",
    flexDirection: "row",
    left: "0px"
}

const originStyle = {
    // border: "1px solid white",
    width: "450px",
    height: "450px",
    margin: "5vh 0 0 25px",
    color: "#292929",
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "Verdana, sans-serif"
}

const projectListContainer = {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid white",
    width: "450px",
    height: "1000px",
    margin: "1vh 0 0 25px",
}

const projectStyle = {
    display: "flex",
    width: "450px",
    height: "300px",
    // border: "1px solid white",
    color: "black"
}

const projectDateHeader = {
    position: "relative",
    height: "100%",
    width: "30%",
    fontSize: ".8rem",
    top: "5px"
    // border: "1px solid white",
}

const projectCard = {
    position: "relative",
    width: "100%",
}

const projectTitle = {
    position: "relative",
    fontSize: "1rem"
}

const teamTitle = {
    position: "relative",
    fontSize: "14px"
}

const tagContainer = {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    border: "1px black solid border",
    height: "10%",
}

const tagStyle = {
    position: "relative",
    width: "auto",
    height: "20%",
    border: "1px black solid",
    padding: "4px",
    borderRadius: "15px",
    margin: "15px 10px 0px 0px",
    fontSize: ".8rem"
}

const MainPage = () => {
    return (
        <main style={pageStyle}>
            <div style={sideHeader}>
                <div style={sideHeaderBringRight}>
                    <div style={titleContainer}> 
                        <div style={titleStyle}> Daniel Im </div>
                        <div style={subTitleStyle}> Software Engineer </div>
                        <div style={descriptionTitleStyle}> I build engaging and thoughtful digital experiences for the web. </div>
                    </div>
                    <div style={linkContainer}> 
                        <div style={linkStyle}> ABOUT</div>
                        <div style={linkStyle}> EXPERIENCE </div>
                        <div style={linkStyle}> PROJECTS </div>
                    </div>
                    <div style={socialsContainer}>
                        <div style={socialStyle}> Github </div>
                        <div style={socialStyle}> Instagram </div>
                        <div style={socialStyle}> Twitter </div>
                        <div style={socialStyle}> LinkedIn </div>
                    </div>
                </div>
            </div>
            <div style={scrollSection}>
                <div style={scrollSectionBringLeft}>
                    <div style={originStyle}>
                        Back in 2017, I tried my hand at creating a game in Adobe Flash
                        and tumbled headfirst into the rabbit hole of coding and web development.
                        To develop my skills, I spent a summer at a coding bootcamp in SF,
                        graduated from Berkeley, and joined Amazon as a fulltime engineer for two years.
                        <br></br>
                        <br></br>
                        Now, I am excited for my next opportunity, and I am actively looking for new roles
                        based in Seattle, WA.
                        <br></br>
                        <br></br>
                        My main focus these days is building products that meld my passion for games and web development.
                        In my freetime, I've released a Discord Bot that hosts games of Secret Hitler, and 
                        a website that guesses your Magic the Gathering card.
                        
                        <br></br>
                        <br></br>
                        When I'm not at the computer, I'm lifting rocks at the gym, hosting hot-pot in my apartment,
                        or releasing music on my Soundcloud (yes, this is totally a plug).
                    </div>
                    <div style={projectListContainer}>
                        <div style={projectStyle}>
                            <div style={projectDateHeader}> 2019 - 2023 </div>
                            <div style={projectCard}> 
                                <div style={projectTitle}> Software Engineer - Amazon </div>
                                <div style={teamTitle}> AWS Security </div>
                                <div style={teamTitle}>
                                    <br></br>
                                    Delivered high quality, robust production code
                                    for Amazon's access-control systems team.
                                    <br></br>
                                    <br></br>
                                <div style={tagContainer}>
                                    <span style={tagStyle}>System Design</span>
                                    <span style={tagStyle}>CI/CD</span>
                                    <span style={tagStyle}>AmazonCDK</span>
                                    <span style={tagStyle}>Java</span>
                                    <span style={tagStyle}>Ruby</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainPage

const body = {
    backgroundColor: "#DDD0C8"
}

export const Head = () => {
    return(
        <>
            <html lang="en" />
            <title>Daniel Jae Im</title>
            <meta name="description" content="Hello World" />
            <body style={body}/>
        </>
    )
}