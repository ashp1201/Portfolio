import React, { useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../CssFile/Starter.css";
import Button from "@mui/material/Button";
import { FileDownloadOutlined } from "@mui/icons-material";
import { Visibility} from "@mui/icons-material";

function Starter() {
  const resumeLink =
  "https://docs.google.com/document/d/18Q4Y--fOhP8JmewmDqnq5P2B4BhR7Qkn/export?format=pdf";

const resumeView =
  "https://docs.google.com/document/d/18Q4Y--fOhP8JmewmDqnq5P2B4BhR7Qkn/view";
  const Ashok =
    "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875966/ashok_cafapf.png";

    const [words] = useState(['Frontend Web Developer']);
    const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const speed = 70;

  useEffect(() => {
    let timeout;
    if (isTyping) {
      timeout = setTimeout(() => {
        if (offset < words[currentIndex].length) {
          setOffset((prevOffset) => prevOffset + 1);
        } else if (currentIndex < words.length - 1) {
          setOffset(0);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [offset, isTyping, currentIndex, words]);

  return (
    <div>
      <Box className="main" sx={{ backgroundColor: "#ffffff" }}>
        <Box className="left" sx={{ height: "100%" }}>
          <img
            className="img_ash"
            src={Ashok}
            alt="Ashok Purohit"
            aria-label="User Profile Photo"
          />
          <Box className="left_down">
            <Button
              className="starter_btn"
              href={resumeView}
              target="_blank"
              aria-label="Download User Resume"
              variant="contained"
              color="success"
              endIcon={<Visibility />}
            >
              View Resume
            </Button>
            <Button
              className="starter_btn"
              href={resumeLink}
              target="_blank"
              aria-label="Download User CV"
              variant="contained"
              color="secondary"
              endIcon={<FileDownloadOutlined />}
            >
              Download Resume
            </Button>
          </Box>
        </Box>

        <Box className="right">
          <Typography variant="h4" color="initial">
            Hi I'm <span className="name">Ashok Purohit</span>
          </Typography>
          <Typography className="word" variant="h6" color="initial">
            {words[currentIndex].substr(0, offset)}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Starter;
