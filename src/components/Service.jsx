import React from "react";
import Scard from "./Scard";
import Typography from "@mui/material/Typography";
import CerCards from "./CerCards";
import { Box } from "@mui/material";
import "../CssFile/Service.css";
import "../CssFile/Project.css";

function Service() {
  // Cloudinary image URLs for Skills
  const imgReact = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875968/react-js-icon_tnyar4.png"; // Add the Cloudinary URL for React
  const imgJavascript = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875967/js_zini0t.png"; // Add the Cloudinary URL for JavaScript
  const imgTypescript = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875969/ts_c7xgn7.png"; // Add the Cloudinary URL for TypeScript
  const imgHtml = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875966/html_ixmpnv.png"; // Add the Cloudinary URL for HTML
  const imgCss = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875966/css_gchemw.png"; // Add the Cloudinary URL for CSS
  const imgNodeJs = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875968/nodejs_ggrkso.png"; // Add the Cloudinary URL for Node.js
  const imgJava = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875967/java_hpbea3.png"; // Add the Cloudinary URL for Java
  const imgC = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875965/c_luddas.png"; // Add the Cloudinary URL for C

  // Cloudinary image URLs for Certifications
  const cerImg1 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875968/skillup_w8qeb8.png"; // Add the Cloudinary URL for "Introduction to Front End Development"
  const cerImg2 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875968/mlsa_cert_m5zjkf.png"; // Add the Cloudinary URL for "Frontend Web Development with Git and GitHub Skills"
  const cerImg3 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875968/python_cert_dfvumc.png"; // Add the Cloudinary URL for "Python Certification"
  const cerImg4 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875966/hackathon_cert_ew9rxt.png"; // Add the Cloudinary URL for "CodeCrush 1.0 Hackathon"
  const cerImg5 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1739690748/Java_Course_1_g39xgn.jpg"; // Java
  const cerImg6 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1739690746/Aws_Course_1_yibk4m.pdf"; //Aws
  const cerImg7 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1739690743/React_Js_Free_Course_3_twicza.pdf"; // Reactjs
  const cerImg8 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1739690745/LinuxUnhatched2024_2_xhnr0r.pdf"; // Linux
  return (
    <div>
      {/* Header Section */}
      <Box className="head">
        <Typography className="head_line" variant="h4" color="initial">
          Skills
        </Typography>
      </Box>

      {/* Development Skills Section */}
      <h4 className="skills_header">Development Skills</h4>
      <div className="marquee" id="scroll_news" behavior="" direction="">
        <Box
          // onMouseOver={() => document.getElementById("scroll_news").stop()}
          // onMouseOut={() => document.getElementById("scroll_news").start()}
          className="whole_box"
        >
          <Scard img={imgReact} text="React" />
          <Scard img={imgJavascript} text="Javascript" />
          <Scard img={imgTypescript} text="Typescript" />
          <Scard img={imgHtml} text="HTML" />
          <Scard img={imgCss} text="CSS" />
          <Scard img={imgNodeJs} text="Node.js" />
        </Box>
      </div>

      {/* Programming Skills Section */}
      <h4 className="skills_header">Programming Skills</h4>
      <div className="marquee" id="scroll_new" behavior="" direction="">
        <Box
          // onMouseOver={() => document.getElementById("scroll_new").stop()}
          // onMouseOut={() => document.getElementById("scroll_new").start()}
          className="whole_box"
        >
          <Scard img={imgJava} text="Java" />
          <Scard img={imgJavascript} text="Javascript" />
          <Scard img={imgC} text="C" />
        </Box>
      </div>

      {/* Certification Section */}
      <h4 className="skills_header">Certification</h4>
      <Box className="margin_flex">
        <CerCards
          name="Java Course"
          link="https://drive.google.com/file/d/1-J7Ed1ZeIUI2vgH4TVHZ0CK9cU9iIbLT/view?usp=sharing"
          desc={["• Java"]}
          img={cerImg5}
        />
        <CerCards
          name="Aws Free Course"
          link="https://drive.google.com/file/d/16QwtQp3Oz4F_jmygcHK9DBwx04EvQpBk/view?usp=drive_link"
          desc={["• Aws"]}
          img={cerImg6}
        />
        <CerCards
          name="Reactjs Free Course"
          link="https://drive.google.com/file/d/1VNyGEhAYKQkaKylntUDdq28dxg-VnpPV/view?usp=sharing"
          desc={["• React.js", "• MaterialUi"]}
          img={cerImg7}
        />
        <CerCards
          name="Linux Course"
          link="https://drive.google.com/file/d/1-8waJ7aQNJhpP2pxHxjHqz4RkPKREn6g/view?usp=drive_link"
          desc={["• Linux"]}
          img={cerImg8}
        />
        <CerCards
          name="Introduction to Front End Development"
          link="https://drive.google.com/file/d/1U4Cn9R33tjpoW-KDg9fDcDNA7HYOAHcS/view?usp=drive_link"
          desc={[
            "• HTML",
            "• CSS",
            "• Javascript",
            "• React",
            "• Node.js",
            "• MongoDB",
          ]}
          img={cerImg1}
        />
        <CerCards
          name="Frontend Web Development with Git and GitHub Skills"
          link="https://drive.google.com/file/d/1Ke20JVOmFUxLhy3eTcZT7rX32Ikz6XjH/view?usp=drive_link"
          desc={["• HTML", "• CSS", "• Javascript", "• React", "• Git", "• GitHub"]}
          img={cerImg2}
        />
        <CerCards
          name="Python Certification"
          link="https://drive.google.com/file/d/1sfdGZwVI6zOQlgXMNI8YnqkF72R1UnEK/view?usp=drive_link"
          desc={["• Python", "• VS Code Tool"]}
          img={cerImg3}
        />
        <CerCards
          name="CodeCrush 1.0 Hackathon"
          link="https://drive.google.com/file/d/1O2f7IMfjS-FUAifkSQUAahRu3fDfwYql/view?usp=drive_link"
          desc={["• Javascript", "• MySQL", "• Django"]}
          img={cerImg4}
        />
      </Box>
    </div>
  );
}

export default Service;
