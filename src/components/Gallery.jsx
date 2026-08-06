import {
  Container,
  Typography,
  ImageList,
  ImageListItem
} from "@mui/material";
  import { useTheme, useMediaQuery } from "@mui/material";
function Gallery() {
    const images = import.meta.glob(
  "../assets/imgs/galleryImgs/*.png",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);



const galleryImages = Object.values(images);
const theme = useTheme();

const mobile = useMediaQuery(theme.breakpoints.down("sm"));
const tablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <Container  sx={{
 py:10,
 px:{
   xs:2,
   md:10},
        borderRadius:3,
      }}>
        <Typography variant="h3"
        align="center"
        fontWeight={700}
        
        sx={{color:"white", py:10}}
        gutterBottom
        >
            Moments from our restaurant and events
        </Typography>
        <ImageList variant="masonry" cols={mobile ? 1 :tablet ? 2 :3} gap={8} sx={{backgroundColor:"white" ,padding:2, borderRadius:3}}>
        {galleryImages.map((image, index) => (
           
        <ImageListItem key={index} sx={{borderRadius:3,overflow:"hidden" ,  "& img":{
        transition:"0.3s"
        },
        "&:hover img":{
          transform:"scale(1.05)"
                    }}}>
            <img
            style={{objectFit:"cover"}}
            src={image}
            alt=""
            loading="lazy"
            />
        </ImageListItem>))}
        </ImageList>
        
    </Container>
      
    </>
  )
}

export default Gallery
