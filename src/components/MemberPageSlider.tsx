// swiper slider
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import { Box, IconButton } from "@mui/material";

// icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
type Props = {
  url: string;
};

function MemberPageSlider({ url }: Props) {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
      <IconButton className="prev" sx={{ padding: "15px", width: "40px", height: "40px" }}>
        <KeyboardArrowLeftIcon />
      </IconButton>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loopFillGroupWithBlank={true}
        loop={true}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev"
        }}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src={url} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={url} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={url} />
        </SwiperSlide>
      </Swiper>
      <IconButton className="next" sx={{ padding: "15px", width: "40px", height: "40px" }}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
}

export default MemberPageSlider;
