import {
  Box,
  Container,
  Typography,
  Grid,
  Stack
} from "@mui/material";


function Footer() {

  return (
    <Box
      sx={{
        backgroundColor:"#023314",
        color:"white",
        py:2,
        mt:0
      }}
    >

      <Container>

        <Grid container spacing={6}>

       
        



          {/* Links */}
          <Grid size={{xs:12, md:9}}>

            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display:{sm:"none",xs:"none"},
                  textAlign:"center",
              }}
            >
              Quick Links
            </Typography>


            <Stack spacing={1} sx={{display:{sm:"none", flexDirection:"row" , gap:{sm:2}, justifyContent:"space-between" , alignItems:"center",}}}>

              <Typography sx={{lineheight:"2.5"}}>
                Home
              </Typography>

              <Typography>
                Menu
              </Typography>

              <Typography>
                Gallery
              </Typography>

              <Typography>
                Contact
              </Typography>

            </Stack>


          </Grid>



          {/* Contact */}
          

        </Grid>
      

        <Typography
          align="center"
          sx={{
            mt:2,
            opacity:.6
          }}
        >
          © 2026 Nabeh Merched Restaurant
        </Typography>


      </Container>

    </Box>
  )
}

export default Footer;