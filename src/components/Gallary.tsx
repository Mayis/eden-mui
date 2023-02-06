import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Box, Container, Tab, Tabs } from "@mui/material";
import SeeMoreBtn from "./common/SeeMoreBtn";
import Subtitle from "./common/Subtitle";
import { Element } from "react-scroll";
import GalleryVideos from "./GalleryVideos";
import GalleryPhotos from "./GalleryPhotos";

// data
import { gallery } from "../data";

// custom hook
import { useActiveLang } from "../hooks/useActiveLang";
function Gallary() {
  const elementName = useActiveLang() ? "Պատկերասրահ" : "Gallary";
  const galleryInfo = useActiveLang() ? gallery.tabs.arm : gallery.tabs.eng;
  const [activeTab, setActiveTab] = useState(galleryInfo[0]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/gallery");
    window.scrollTo(0, 0);
  };

  return (
    <Element name={elementName}>
      <Box sx={{ marginTop: "50px" }}>
        <Subtitle title={elementName} color="black" />
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
            {galleryInfo.map((item) => (
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
            {activeTab === galleryInfo[0] ? (
              <GalleryPhotos photo={gallery.parts.filter((item, i) => i < 3)} />
            ) : (
              <GalleryVideos />
            )}
          </Box>
          <Box onClick={handleNavigate}>
            <SeeMoreBtn />
          </Box>
        </Container>
      </Box>
    </Element>
  );
}

export default Gallary;
