import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "../CssFile/AboutMe.css";

function About_me() {
  const [alignment, setAlignment] = useState("experience");

  // Cloudinary image URL
  const img1 = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875966/about_me_x58l9p.jpg";

  // Handle toggle button change
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  // Render content based on selected toggle
  const renderText = () => {
    if (alignment === "experience") {
      return <Typography variant="body1">Fresher</Typography>;
    } else if (alignment === "Current education") {
      return (
        <Box>
          <Typography className="text_info_1" variant="body1" color="initial">
            St Francis Institute of Technology
          </Typography>
          <br />
          <Typography className="text_info_2" variant="body2" color="grey">
            2021 - 2025
          </Typography>
          <br />
          <Typography className="text_info_3" variant="body1" color="initial">
            B.E (Information Technology)
          </Typography>
        </Box>
      );
    } else {
      return <Typography variant="body1"></Typography>;
    }
  };

  return (
    <Box className="main_about_me">
      {/* Left section with image */}
      <Box className="left_about">
        <img src={img1} alt="About Me" className="img_about" />
      </Box>

      {/* Right section with text content */}
      <Box className="right_about">
        <Typography className="about_me head_line" variant="h4">
          About Me
        </Typography>
        <Typography className="text_info" variant="body1">
  &nbsp;&nbsp; &nbsp;&nbsp;Hello, I'm Ashok Purohit, a final-year student at St. Francis Institute of Technology with a strong passion for software development and cloud technologies. Proficient in React.js, AWS, and the MERN stack, I specialize in building scalable and user-friendly applications. With a keen interest in problem-solving and continuous learning, I am eager to contribute to innovative projects and grow in the ever-evolving tech landscape.
        </Typography>


        {/* Toggle button group */}
        <Box className="toggle_info">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Education and Experience"
          >
            <ToggleButton value="experience">Experience</ToggleButton>
            <ToggleButton value="Current education">Current Education</ToggleButton>
          </ToggleButtonGroup>

          {/* Render dynamic text */}
          <Box>{renderText()}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About_me;
