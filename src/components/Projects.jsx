import "../CssFile/Project.css";
import React from "react";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

function Projects() {
  // Cloudinary image URLs
  const imgCospace = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875968/cospace_wgwvuk.jpg"; // Add the Cloudinary URL for "Cospace"
  const imgToDoList = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875970/todolist_dlmn9w.jpg"; // Add the Cloudinary URL for "To Do List"
  const imgStopwatch = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875968/stopwatch_xgnoou.jpg"; // Add the Cloudinary URL for "Stopwatch"
  const imgCalculator = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875967/calculator_pd17vl.jpg"; // Add the Cloudinary URL for "Calculator"
  const imgWeatherApp = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875969/weather_uwxdru.jpg"; // Add the Cloudinary URL for "Weather App"
  const imgTicTacToe = "https://res.cloudinary.com/dbc7lgjml/image/upload/v1737875969/tic_tac_toe_fajnqn.jpg"; // Add the Cloudinary URL for "Tic Tac Toe"

  return (
    <Box>
      {/* Header Section */}
      <Box className="head">
        <Typography className="head_line" variant="h4" color="initial">
          Projects
        </Typography>
      </Box>

      {/* Projects Cards */}
      <Box className="margin_flex">
        <Cards
          img={imgCospace}
          title="Cospace"
          project_name="Cospace"
          proj_det="Cospace offers virtual office solutions, providing flexible and efficient workspace rentals for remote teams and professionals"
          github_link="https://github.com/ashp1201/Cospace_Mern"
          project_link="https://cospace-mern-e6rw.vercel.app/"
        />
        <Cards
          img={imgToDoList}
          title="To Do List"
          project_name="To Do List"
          proj_det="To-do list is a simple tool made for organizing tasks, allowing users to jot down, manage, and track items they need to accomplish or remember"
          github_link="https://ashp1201.github.io/Todo.github.io/"
          project_link="https://ashp1201.github.io/Todo.github.io/"
        />
        <Cards
          img={imgStopwatch}
          title="Stopwatch"
          project_name="Stopwatch"
          proj_det="Build a stopwatch by combining HTML for structure, CSS for design, and JavaScript for functionality. Users can Start, Stop, Reset, and Lap."
          github_link="https://github.com/ashp1201/Stopwatch-using-html-css-and-javascript"
          project_link="https://ashp1201.github.io/Stopwatch-using-html-css-and-javascript/"
        />
        <Cards
          img={imgCalculator}
          title="Calculator"
          project_name="Calculator"
          proj_det="Designed for performing mathematical calculations, including addition, subtraction, multiplication, and division"
          github_link="https://github.com/ashp1201/Calculator"
          project_link="https://ashp1201.github.io/Calculator/"
        />
        <Cards
          img={imgWeatherApp}
          title="Weather App"
          project_name="Weather App"
          proj_det="A weather app using HTML for structure, CSS for styling, and JavaScript for fetching and displaying weather data, providing users with real-time weather information."
          github_link="https://github.com/ashp1201/Weather-App"
          project_link="https://ashp1201.github.io/Weather-App/"
        />
        <Cards
          img={imgTicTacToe}
          title="Tic Tac Toe"
          project_name="Tic Tac Toe"
          proj_det="Developed a Tic Tac Toe game using HTML, CSS, and JavaScript, allowing users to play the classic game on a web page."
          github_link="https://github.com/ashp1201/Tic-Tac-Toe-Game"
          project_link="https://ashp1201.github.io/Tic-Tac-Toe-Game/"
        />
      </Box>

      {/* More Button */}
      <Box className="btn_box">
        <Button variant="secondary" className="btn">
          More
        </Button>
      </Box>
    </Box>
  );
}

export default Projects;
