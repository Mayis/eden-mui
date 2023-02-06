import { useState } from "react";
// components
import BackButton from "../components/common/BackButton";
import Subtitle from "../components/common/Subtitle";
import { Container, Grid, Tabs, Tab } from "@mui/material";
import GalleryPhotos from "../components/GalleryPhotos";
import GalleryVideos from "../components/GalleryVideos";

// data
import { gallery } from "../data";

// custom hook
import { useActiveLang } from "../hooks/useActiveLang";

function GallaryPage() {
  const galleryTabs = useActiveLang() ? gallery.tabs.arm : gallery.tabs.eng;
  const [activeTab, setActiveTab] = useState(galleryTabs[0]);

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Grid container spacing={5}>
        <Grid item container xs={12} alignItems="center">
          <Grid item xs position="absolute">
            <BackButton />
          </Grid>
          <Grid item xs={12}>
            <Subtitle title={useActiveLang() ? "Պատկերասրահ" : "Gallery"} color="black" />
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <Grid item>
            <Tabs
              indicatorColor="secondary"
              value={activeTab}
              onChange={(e, value) => setActiveTab(value)}>
              {galleryTabs.map((item) => (
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
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          {activeTab === galleryTabs[0] ? (
            <GalleryPhotos photo={gallery.parts} />
          ) : (
            <GalleryVideos />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default GallaryPage;
