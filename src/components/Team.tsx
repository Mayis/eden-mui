// swiper slider
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import { Theme, useMediaQuery, Box } from "@mui/material";
import Subtitle from "./common/Subtitle";
import TeamItem from "./common/TeamItem";
import { Element } from "react-scroll";
// data
import { team } from "../data";
import { useNavigate } from "react-router-dom";

function Team() {
  const navigate = useNavigate();
  const elementName = localStorage.getItem("language") === "arm" ? "Թիմ" : "Team";

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  // handle click to navigate selected member page
  const handleNavigate = (id: number) => {
    navigate(`/member/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <Element name={elementName}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: { sm: "30px 60px", md: "50px 100px" }
        }}>
        <Box>
          <Subtitle title={elementName} color="black" />
        </Box>
        <Box sx={{ width: "100%", paddingTop: { xs: "40px", md: "80px" } }}>
          <Swiper
            slidesPerView={isMobile ? 1 : 2}
            spaceBetween={30}
            loopFillGroupWithBlank={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
            {team.parts.map((item) => (
              <SwiperSlide key={item.url} onClick={() => handleNavigate(item.id)}>
                <TeamItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Element>
  );
}

export default Team;
