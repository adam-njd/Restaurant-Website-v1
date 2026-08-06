import {
 AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../assets/imgs/logo.png'
import { useState } from "react";
export default function Navbar() {
 const [openDrawer, setOpenDrawer] = useState(false);
 const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Contact", path: "/contact" },
  { name: "Images", path: "/images" },]
  return (
    <AppBar position="static" sx={{ background:"linear-gradient(to top,#0d4d91,#075b3d)", mb: 0 , position:"fixed",zIndex: 1000 }}>
      <Toolbar
      sx={{minHeight: 80,display:{ xs: 'flex', md: 'flex'}, justifyContent:"space-between", alignItems:"center"}}
      >

        {/* <Typography
          variant="h6"
             sx={{
            flexGrow: 1,
            fontweight:700 ,
          }}
        >
         Nab3 Merched
        </Typography> */}
         
    <Box
      component="img"
      src={logo}
      alt="Nabeh Merched"
      sx={{
        position: "relative",
        top: 4,
        left:-5,
        py: 1,
        px: 1,
        mb: 0,
        width: 70,
        height: 70,
        objectFit: "cover",
        objectPosition: "center",
        transform: "scale(1.35)",
      }}
    >
        </Box>


        <Box sx={{ display:{ xs: 'none', md: 'flex'}, gap: 9}}   >
          {links.map((link,index) => (
            <Button key={index} color="inherit" href={link.path}>
              {link.name}
            </Button>
          )
          )}
          <Button
            variant="contained"
            sx={{backgroundColor:"white", color:"#023314", fontWeight:700, mb: 0  }}
          >
           Book Now
          </Button>

        </Box>
        <IconButton 
        
        color="white"
        onClick={() => setOpenDrawer(true)}
        sx={{  fontSize: 36, display: { xs: 'flex', md: 'none' } , color:"white", fontWeight:700,height:60, width:60, borderRadius:3,  "&:hover":{backgroundColor:"#000000"}}}
        >
          <MenuIcon sx={{  fontSize: 40, lineHeight:1, mb:0}} />
        </IconButton>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <Box
            sx={{
              width:250
            }}
          >

            <List>

              {links.map((link)=>(

                <ListItem key={link.name} >

                  <ListItemButton sx={{borderBottom: 1}} href={link.path}>

                    <ListItemText
                    dir="rtl"

                      primary={link.name}
                    />

                  </ListItemButton>

                </ListItem>

              ))}


              <ListItem>

               <Button
                variant="contained"
                  sx={{
                  borderRadius:3,
                  px:3
                          }}
              >Book Now</Button>

              </ListItem>


            </List>

          </Box>
         </Drawer>

      </Toolbar>
    </AppBar>
  );
}