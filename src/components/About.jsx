
import aboutImg from '../assets/imgs/about.png'
import{
Box,
Container,
Typography,
Grid
}from "@mui/material"
function About() {
  return (
    <>
    <Container sx={{
 py:10,
 px:{
   xs:2,
   md:10},
        borderRadius:3,
      display:"flex", justifyContent:"space-between", gap:20}}>
    <Grid container>
        <Grid size={{ xs:12, md:6 }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{mt:2 , color:"white"}}>
              About Us:
            </Typography>
            <Typography variant="h5" component="p" gutterBottom sx={{mt:2 , color:"white" , pr:2}}>
            Nabeh Merched Restaurant offers an authentic Lebanese dining experience that combines 
            traditional flavors with a peaceful natural atmosphere. We carefully prepare our dishes using fresh,
             high-quality ingredients to provide our guests with a memorable experience filled with great taste,
             warm hospitality, and beautiful moments.
             </Typography>
        
        </Grid>
        <Grid size={{ xs:12, md:6 }}>
        <Box
        direction="rtl"
        component="img"
            src={aboutImg}
        alt="About Us"
            sx={{   
                   md:{ marginLeft:8},
                    width:"100%",
                    height:400,
                    objectFit:"cover",
                    borderRadius:3
  }}
/>
        </Grid>
    </Grid>
    </Container>
    </>
  )
}

export default About
