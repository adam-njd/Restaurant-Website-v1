import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

function Meal({ img, title }) {
    let describtion= `Traditional Lebanese ${title} with fresh ingredients.`
  return (
      
      

        <Grid size={{xs:12, md:4}}>
        <Card 
        sx={{
            burderRadius: 3,
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 8,
            },
        }}
        >
            <CardMedia
      component="img"
      height="250"
      image={img}
    />
     <CardContent>

      <Typography
        variant="h5"
        fontWeight={700}
      >
        {title}
      </Typography>


      <Typography>
        {describtion}
      </Typography>

    </CardContent>
        </Card>
        </Grid>

      
  )
}

export default Meal

