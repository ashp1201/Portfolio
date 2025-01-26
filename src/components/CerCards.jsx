import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import '../CssFile/Project.css'

export default function Cer_cards(props) {

  return (
    <Card sx={{ width: 300 ,borderRadius:5,margin:2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
        title={props.name}
      />
      <CardContent sx={{height:140}}>
        <Typography sx={{height:'fitContent'}} gutterBottom variant="h6" component="div">
          {props.name}
        </Typography>
        
        <p className='text_wrap'>
  {props.desc && props.desc.length > 0 && (
    props.desc.map((element, index) => (
      <strong className='text_wrap_text' key={index}>{element}</strong>
    ))
  )}
</p>

      </CardContent>

      <CardActions>
        <Button target="_blank" size="small" onClick={()=>{window.location.href = props.link}}>Certification Link</Button>
      </CardActions>
    </Card>
  );
}