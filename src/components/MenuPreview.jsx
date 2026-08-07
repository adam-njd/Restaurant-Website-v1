
import {
  Container,
  Typography,
  Grid
} from "@mui/material";
import kababImg from '../assets/imgs/kabab.png'
import fish from '../assets/imgs/fish.png'
import kebehImg from '../assets/imgs/Kebe.png'
import Meal from "./Meal";
export default function MenuPreview() {
    const meals = [
        { img: kababImg, title: "Kabab" },
        { img: fish, title: "fish" },
        { img: kebehImg, title: "Kebeh" },]
    
  return (
 <Container
        id="meals"
      sx={{
        py:10
      }}
    >
        <Typography
        variant="h3"
        align="center"
        fontWeight={700}
        sx={{color:"white"}}
        gutterBottom
      >
        Our Menu :
      </Typography>

         <Grid
        container
        spacing={4}
      >
      
      {meals.map((meal,index) => (
        <Meal key={index} img={meal.img} title={meal.title} />
      ))}
    
    </Grid>

    </Container>
  );
}
