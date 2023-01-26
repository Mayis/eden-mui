import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Container, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Subtitle from "../components/common/Subtitle";
import ServicesItem from "../components/common/ServicesItem";
import CustomPricelistModal from "../components/CustomPricelistModal";
import ComboPackage from "../components/ComboPackage";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// data
import { services } from "../data";

type ServicePart = typeof services.parts[0];

function ServicesPage() {
  const navigate = useNavigate();
  // modal for price list
  const [activeItem, setActiveItem] = useState<null | ServicePart>(null);

  const handleClickOpen = (id: number) => {
    setActiveItem(services.parts.find((item) => item.id === id) || null);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const isModalOpen = Boolean(activeItem);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item container xs={12}>
            <Grid item xs={2}>
              <IconButton onClick={handleNavigateBack}>
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <Subtitle title="Services" color="black" />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            {services.parts.map((item) => (
              <Grid item xs={12} key={item.url}>
                <ServicesItem item={item} handleClickOpen={handleClickOpen} />
              </Grid>
            ))}
            <Grid item xs={12}>
              <ComboPackage item={services.combo} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {isModalOpen && <CustomPricelistModal open handleClose={handleClose} item={activeItem!} />}
    </>
  );
}

export default ServicesPage;
