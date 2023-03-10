import { useState } from "react";

// components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Subtitle from "../components/common/Subtitle";
import ServicesItem from "../components/common/ServicesItem";
import CustomPricelistModal from "../components/CustomPricelistModal";
import ComboPackage from "../components/ComboPackage";

// data
import { services } from "../data";
import BackButton from "../components/common/BackButton";
import Api from "../api";
import { ServiceItem } from "../api/slices/services";

function ServicesPage() {
  const { data, loading } = Api.useApi(() => Api.services.GetFullServices());
  const [activeItem, setActiveItem] = useState<null | ServiceItem>(null);
  console.log(data);
  const handleClickOpen = (id: number) => {
    if (data) {
      setActiveItem(data.items.find((item) => item.id === id) || null);
    }
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  const isModalOpen = Boolean(activeItem);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item container xs={12}>
            <Grid item xs={2}>
              <BackButton />
            </Grid>
            <Grid item xs={10}>
              <Subtitle title="Services" color="black" />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            {data &&
              data.items.map((item) => (
                <Grid item xs={12} key={item.image}>
                  <ServicesItem item={item} handleClickOpen={handleClickOpen} />
                </Grid>
              ))}
            <Grid item xs={12}>
              <ComboPackage item={services.combo} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* {isModalOpen && <CustomPricelistModal open handleClose={handleClose} id={activeItem?.id} />} */}
    </>
  );
}

export default ServicesPage;
