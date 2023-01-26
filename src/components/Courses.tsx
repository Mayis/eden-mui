// swiper slider
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import { Theme, useMediaQuery, Box } from "@mui/material";
import CoursesItem from "./common/CoursesItem";
import Subtitle from "./common/Subtitle";
import { Element } from "react-scroll";
import CustomCoursesModal from "./CustomCoursesModal";

// data
import { courses } from "../data";
import { useState } from "react";

function Courses() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

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
    setActiveItem(null);
  };

  return (
    <Element name="Courses">
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
          <Subtitle title="Courses" />
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
      {activeItem && (
        <CustomCoursesModal
          open={openModal}
          handleClose={handleClose}
          item={courses.parts.filter((item) => item.id === activeItem)[0]}
        />
      )}
    </Element>
  );
}

export default Courses;
