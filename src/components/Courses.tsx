// swiper slider
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import { Theme, useMediaQuery, Box } from "@mui/material";
import CoursesItem, { CourseItem } from "./common/CoursesItem";
import Subtitle from "./common/Subtitle";
import { Element } from "react-scroll";
import CustomCoursesModal from "./CustomCoursesModal";

// data
import { courses } from "../data";
import { useState } from "react";

// custom hook
import { useActiveLang } from "../hooks/useActiveLang";

function Courses() {
  const elementName = useActiveLang() ? "Դասընթացներ" : "Courses";

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const [activeItem, setActiveItem] = useState<null | CourseItem>(null);

  const handleClickOpen = (id: number) => {
    setActiveItem(courses.parts.find((item) => item.id === id) || null);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  const isModalOpen = Boolean(activeItem);

  return (
    <Element name={elementName}>
      <Box
        sx={{
          backgroundImage: "url('https://eden.am/images/1672496638537--coursesBack.webp')",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.429)",
          padding: { sm: "30px 60px", md: "50px 100px" }
        }}>
        <Box>
          <Subtitle title={elementName} />
        </Box>
        <Box sx={{ width: "100%", height: "500px", paddingTop: { xs: "40px", md: "80px" } }}>
          <Swiper
            slidesPerView={isMobile ? 1 : 2}
            spaceBetween={30}
            loopFillGroupWithBlank={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
            {courses.parts.map((item) => (
              <SwiperSlide key={item.url}>
                <CoursesItem item={item} handleClickOpen={handleClickOpen} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      {isModalOpen && <CustomCoursesModal open handleClose={handleClose} item={activeItem!} />}
    </Element>
  );
}

export default Courses;
