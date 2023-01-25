import { useState } from "react";

// components
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Subtitle from "../components/common/Subtitle";
import { services } from "../data";
import ServicesItem from "../components/common/ServicesItem";
import CustomModal from "../components/CustomModal";
import ComboPackage from "../components/ComboPackage";

function Services() {
  // modal for price list
  const [openModal, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<null | number>(null);
  // set modal true
  const handleClickOpen = (id: number) => {
    setModalOpen(true);
    setActiveItem(id);
  };
  //  set modal false
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Subtitle title="Services" color="black" />
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
      {activeItem && (
        <CustomModal
          open={openModal}
          handleClose={handleClose}
          // ??????????????????
          item={services.parts.filter((item) => item.id === activeItem)[0]}
        />
      )}
    </>
  );
}

export default Services;
