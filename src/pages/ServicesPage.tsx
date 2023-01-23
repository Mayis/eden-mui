import React from "react";

// components
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Subtitle from "../components/common/Subtitle";
import { services } from "../data";
import ServicesItem from "../components/common/ServicesItem";
import CustomModal from "../components/CustomModal";

function Services() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Subtitle title="Services" color="black" />
          </Grid>
          <Grid item xs={12} container spacing="2px">
            {services.parts.map((item) => (
              <Grid
                item
                onClick={handleOpen}
                xs={12}
                sm={6}
                lg={4}
                key={item.url}
                sx={{ height: { xs: "150px", md: "250px" } }}>
                <ServicesItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <CustomModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Services;
