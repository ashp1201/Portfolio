import * as React from 'react';
import { Link } from 'react-scroll';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
 import {Menu} from '@mui/icons-material';
 import {  
  Drawer,
  List,
  ListItem,
  ListItemText,} from '@mui/material';


function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>

      <AppBar sx={{color:'black',background:'white' ,display:{
        xs:'none',sm:'block'
      }}} position="static">
        <Toolbar >
          <Box sx={{ flexGrow: 1}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{width:'fit-content',letterSpacing:4,":hover":{
              cursor:'pointer',
            }}}
          >
            PORTFOLIO
          </Typography>
          </Box>
          <Typography
            variant="a"
            noWrap
            component="a"
            sx={{ ml:2,":hover":{
              cursor:'pointer',
            }}}
          >
            Home
          </Typography>


          <Typography
            variant="a"
            noWrap
            component="a"
            sx={{ ml:2,":hover":{
              cursor:'pointer',
            }}}
          >
            About me
          </Typography>

          <Typography
            variant="a"
            noWrap
            component="a"
            sx={{ ml:2 ,":hover":{
              cursor:'pointer',
            }}}
          >
            Projects
          </Typography>

          <Typography
            variant="a"
            noWrap
            component="a"
            sx={{ ml:2,":hover":{
              cursor:'pointer',
            }}}
          >
            Contact
          </Typography>

          <Typography
            variant="a"
            noWrap
            component="a"
            sx={{ ml:2,":hover":{
              cursor:'pointer',
            }}}
          >
            Services
          </Typography>

          

          
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Login"
            sx={{ ml:2 }}
          >
            <Login/>
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <AppBar sx={{color:'black',background:'white' ,display:{
        xs:'block',sm:'none'
      }}} position="static">
        <Toolbar >
          <Box sx={{flexGrow: 1,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{letterSpacing:4,textAlign:'center',":hover":{
              cursor:'pointer',
            }}}
          >
            PORTFOLIO
          </Typography>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          

          <Drawer  sx={{ width: '33vw', // Set your desired width here or adjust as needed
        //  m:'100px 0 0 66vw',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '33vw', // Same width as above to ensure proper display
          boxSizing: 'border-box',
          height: 'fit-content',
          mt:'57px',
          borderRadius:'10px'
        },
  }} anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {/* <List>
          {['Home','About me','Projects','Contact', 'Services', ].map((text, index) => (
            <ListItem sx={{textAlign:'center' ,cursor:'pointer',":hover":{backgroundColor:'#efefef',color:'black'}}} 
             key={text}>
              <ListItemText 
              primary={text} />
            </ListItem>
          ))}
        </List> */}
   <List>
  {['Home', 'Aboutme', 'Projects', 'Contact', 'Services'].map((text, index) => (
    <ListItem
      key={text}
      sx={{
        textAlign: 'center',
        cursor: 'pointer',
        ":hover": { backgroundColor: '#efefef', color: 'black' },
      }}
    >
      <Link
        activeClass="active"
        to="#projects"// Match these values with IDs in App.js
        spy={true}
        smooth={true}
        offset={-70} // Adjust offset if necessary
        duration={500}
      >
        
        <ListItemText primary={text} />
      </Link>
    </ListItem>
  ))}
</List>
      </Drawer>
        </Toolbar>
      </AppBar>

    </Box>

    </div>

    
  )
}

export default Navbar
