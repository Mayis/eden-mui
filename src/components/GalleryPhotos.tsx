//components
import { Grid, Box, Typography } from "@mui/material";

//data
import { gallery } from "../data";

// types
type Photo = typeof gallery.parts;
type Props = {
  photo: Photo;
};

function GalleryPhotos({ photo }: Props) {
  return (
    <Grid container spacing={{ xs: 3, sm: 2, md: 3 }} justifyContent="center">
      {photo.map((img) => (
        <Grid item xs={10} sm={6} md={4} key={img.url}>
          <Box>
            <img
              src={img.url}
              alt={img.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Typography variant="body1" align="center">
              {img.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default GalleryPhotos;
