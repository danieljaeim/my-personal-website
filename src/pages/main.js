import * as React from "react"

const bodyStyle = {
    backgroundColor: "#0f172a"
}

const pageStyle = {
    display: "flex",
    alignitems: "center",
    justifyContent: "start",
    backgroundColor: "#0f172a",
    width: "100vw",
    height: "100vh",
    margin: "0",
    padding: "0",
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
}

/**
 * LEFT SIDE (INFO AND HERO SECTION)
 */

const sideHeader = {
    display: "flex",
    backgroundColor: "whitesmoke",
    height: "100vh",
    width: "50vw",
    alignSelf: "self-start",
    justifyContent: "start",
    flexDirection: "column"
}

const sideHeaderBringRight = {
    height: "50vh",
    width: "450px",
    border: "1px solid black",
    alignSelf: "end",
    flexDirection: "row",
    right: "0"
}

const titleContainer = {
    fontSize: "2.5em",
    alignSelf: "start",
    height: "10vh",
    width: "60%",
    border: "1px solid black",
    margin: "5vh 5vh 0 5vh"
}

const titleStyle = {
    alignSelf: "start",
    fontSize: "45px",
    border: "1px solid black",
    margin: "5px"
}

const subTitleStyle = {
    alignSelf: "start",
    fontSize: "18px",
    border: "1px solid black",
    margin: "5px"
}

const descriptionTitleStyle = {
    alignSelf: "start",
    fontSize: "14px",
    border: "1px solid black",
    margin: "5px"
}

const linkContainer = {
    fontSize: "2.5em",
    alignSelf: "start",
    height: "10vh",
    width: "60%",
    border: "1px solid black",
    margin: "10vh 5vh 0 5vh"
}

const linkStyle = {
    fontSize: "14px",
    margin: "5px 10px"
}


/**
 * RIGHT SIDE (PROJECTS)
 */

const scrollSection = {
    height: "100vh",
    width: "50vw",
    alignSelf: "self-start"
}

const MainPage = () => {
    return (
        <main style={pageStyle}>
            <div style={sideHeader}>
                <div style={sideHeaderBringRight}>
                    <div style={titleContainer}> 
                        <div style={titleStyle}> Daniel Im </div>
                        <div style={subTitleStyle}> SDE and Fullstack Engineer </div>
                        <div style={descriptionTitleStyle}> I build digital experiences for the web. </div>
                    </div>
                    <div style={linkContainer}> 
                        <div style={linkStyle}> About</div>
                        <div style={linkStyle}> Experience</div>
                        <div style={linkStyle}> Projects</div>
                    </div>
                </div>
                <div style={linkContainer}>

                </div>
            </div>
            <div style={scrollSection}> Scroll Side </div>
        </main>
    )
}

export default MainPage

export const Head = () => (
<>
    <title>Daniel Im</title>
</>
)