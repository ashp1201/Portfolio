import React from 'react'
import Typography from "@mui/material/Typography";
import "../CssFile/Service.css";


function Scard(props) {
  return (
    <div className="box">
    <div className="img_box">
        <img className="img" src={props.img} alt="" />
    </div>
    <div>
      
        <Typography variant="h6" color="initial">
                {props.text}
        </Typography>
    </div>
</div>
  )
}

export default Scard