import React from 'react'
import '../CssFile/Project.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards(props) {
  return (
    <>
        <Card sx={{ width: 300 ,borderRadius:5,margin:2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.project_name}
        </Typography>
        <p className='text_wrap' >

          {props.proj_det}
        </p>
      </CardContent>
      <CardActions>
        <Button target="_blank" size="small" onClick={()=>{window.location.href = props.github_link}}>GitHub Link</Button>
        <Button target="_blank" size="small" onClick={()=>{window.location.href = props.project_link}}>Project Link</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default Cards;
