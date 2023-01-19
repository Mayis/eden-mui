import { useState } from "react";

// components
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import SeeMoreBtn from "./common/SeeMoreBtn";
import Subtitle from "./common/Subtitle";

// data
import { gallery } from "../data";

function Gallary() {
  const [activeTab, setActiveTab] = useState("Photo Gallery");
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Subtitle title="Gallary" color="black" />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: { xs: "20px", md: "50px" }
        }}>
        <Tabs
          indicatorColor="secondary"
          value={activeTab}
          onChange={(e, value) => setActiveTab(value)}>
          {gallery.tabs.map((item) => (
            <Tab
              value={item}
              key={item}
              label={item}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "24px" },
                padding: { xs: "8px 12px", sm: "12px 16px" },
                margin: { md: "0px 15px" }
              }}
            />
          ))}
        </Tabs>
        <Box sx={{ flexGrow: 1, marginTop: { xs: "25px", md: "50px" } }}>
          <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {gallery.parts.map((img) => (
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
        </Box>
        <SeeMoreBtn />
      </Container>
    </Box>
  );
}

export default Gallary;
