import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { gallery } from "../data";

type Photo = typeof gallery.parts;
type Props = {
  photo: Photo;
};
function GalleryPhotos({ photo }: Props) {
  return (
    <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {photo.map((img) => (
        <Grid item xs={4} key={img.url}>
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
