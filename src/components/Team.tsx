// swiper slider
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import { Theme, useMediaQuery, Box } from "@mui/material";
import Subtitle from "./common/Subtitle";
import TeamItem from "./common/TeamItem";
// data
import { team } from "src/data";

function Team() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: { sm: "30px 60px", md: "50px 100px" }
      }}>
      <Box>
        <Subtitle title="Team" color="black" />
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
            <SwiperSlide key={item.url}>
              <TeamItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Team;
