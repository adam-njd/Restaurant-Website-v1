import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Stack
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import loc from "../assets/imgs/loc.png"
function Contact() {

  return (
    <Box
           sx={{
                height:"100vh",
                backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${loc})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                mt:0,
                display:"flex",
                alignItems:"center",
                width:{xs:"100%"}
              }}
           >

    <Container

    
     sx={{
 py:10,
 px:{
   xs:2,
   md:10},
        borderRadius:3,
       
      }}
    >
          

      <Typography
        variant="h3"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{
          color:"white",
          mb:6

        }}
      >
        Contact Us
      </Typography>

        <Box
  sx={{
    py: 10,
    px: {
      xs: 2,
      md: 6,
    },
    backgroundColor: "#02331441",
    borderRadius: 3,
  }}
>
      <Grid
        container
        spacing={4}
      >

        {/* معلومات المطعم */}
        <Grid size={{xs:12, md:6}}>

          <Stack spacing={6}>

             <Box sx ={{color:"white", display:"flex", alignItems:"center", gap:1 ,flexDirection:"row" , fontWeight:900}}>
              <LocationOnIcon />
              <Typography component="a" href="https://www.google.com/maps/place/مطعم+نبع+مرشد+-+Nabeh+Merched+Restaurant%E2%80%AD/data=!4m2!3m1!1s0x0:0x49c6db073197169b?sa=X&ved=1t:2428&ictx=111" sx={{textDecoration:"underline", color:"white",fontWeight:900}}>
               AL Mukhtara, Lebanon
              </Typography>
            </Box>


            <Box sx ={{color:"white", display:"flex", alignItems:"center", gap:1 ,flexDirection:"row" , fontWeight:900}}>
              <PhoneIcon  />
              <Typography component="a" href="tel:+961 25 310 220" sx={{textDecoration:"underline", color:"white",fontWeight:900}}>
                +961 25 310 220
              </Typography>
            </Box>


            <Box sx ={{color:"white", display:"flex", alignItems:"center", gap:1 ,flexDirection:"row" , fontWeight:900}}>
              <WhatsAppIcon  />
              <Typography component="a" href="https://wa.me/96125310220" sx={{textDecoration:"underline", color:"white",fontWeight:900}}>
                +961 25 310 220
              </Typography>
            </Box>


            <Box sx ={{color:"white", display:"flex", alignItems:"center", gap:1 ,flexDirection:"row" , fontWeight:900}}>
              <AccessTimeIcon />
              <Typography  sx={{textDecoration:"none", color:"white",fontWeight:900}}>
                Open Daily: 12 AM - 10 PM
              </Typography>
            </Box>


          </Stack>


        </Grid>


        {/* btns*/}
    <Grid
    size={{ xs: 12, md:6 }}
    sx={{
    display:{
    xs:"none",
    md:"flex"
    },
    justifyContent:"flex-end",
    alignItems:"center"
    }}
>

          <Stack spacing={3} sx={{sm:{display:"none"}}}>

               <Button
            sx={{backgroundColor:"#023314", color:"white"}}
              variant="outlined"
              size="large"
                href="https://www.google.com/maps/place/مطعم+نبع+مرشد+-+Nabeh+Merched+Restaurant%E2%80%AD/data=!4m2!3m1!1s0x0:0x49c6db073197169b?sa=X&ved=1t:2428&ictx=111"
            >
              View Location
            </Button>

            <Button
                sx={{backgroundColor:"#023314", color:"white"}}
              variant="contained"
              size="large"
              href="tel:+961 25 310 220"

            >
              Call Now
            </Button>


            <Button
                sx={{backgroundColor:"#023314", color:"white"}}
                variant="outlined"
                size="large"
                href="https://wa.me/96125310220"
                
            >
              WhatsApp <WhatsAppIcon sx={{color:"#2ce972",}} />
            </Button>
          </Stack>

        </Grid>


      </Grid>
    </Box>
    
    </Container>
    </Box>
  );
}


export default Contact;