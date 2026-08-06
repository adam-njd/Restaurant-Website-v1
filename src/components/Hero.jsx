
import {
  Box,
  Container,
  Typography,
  Button,
  Stack
} from "@mui/material";
import heroImg from '../assets/imgs/bg.png'
// font import

function Hero() {
  
  return (
   <>
   <style>
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Lexend+Giga:wght@100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=ZCOOL+QingKe+HuangYou&display=swap');
</style>
   <Box
   sx={{
        height:"100vh",
        backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        mt:0,
        display:"flex",
        alignItems:"center",
      }}
   >

      <Container sx={{direction:"rtl"}}>

        <Stack
          spacing={4}
          sx={{
            
            gap:4,
            color:"white",
            maxWidth:600
          }}
        >

          <Typography
            variant="h2"
            fontWeight="700"
            sx={{fontFamily: "Aref Ruqaa",
            fontWeight:400,
            fontStyle: "normal"}}
          >
            مطعم نبع مرشد
          </Typography>


          <Typography
            variant="h4"
            sx={{fontFamily: "Aref Ruqaa",
            fontWeight:400,
            fontStyle: "normal"}}
          >
            تجربة لبنانية أصيلة بين الطبيعة والطعام المميز .
          </Typography>


          <Stack
            direction="row"
            spacing={6}
            sx={{direction:"rtl", gap:2}}
          >

            <Button
              variant="contained"
              sx={{backgroundColor:"#023314" }}
            >
             Menu
            </Button>


            <Button
              variant="outlined"
              sx={{
                color:"white",
                borderColor:"white"
              }}
            >
              Call Us
            </Button>

          </Stack>


        </Stack>


      </Container>


   </Box>
   </>
  )
}

export default Hero
