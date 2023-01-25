// slider swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// components
import { Button, IconButton } from "@mui/material";
import { Navigation } from "swiper";
import Subtitle from "./common/Subtitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Element } from "react-scroll";

// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// data
import { services } from "../data";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  // handle click to navigate selected service page
  const handleNavigate = (id: number) => {
    navigate(`/services/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <Element name="Services">
      <Box sx={{ paddingTop: "20px" }}>
        <Subtitle title="Services" color="black" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "40px 0px"
          }}>
          <IconButton className="prev" sx={{ padding: "15px", width: "40px", height: "40px" }}>
            <KeyboardArrowUpIcon />
          </IconButton>
          <Box
            sx={{
              width: { xs: "300px", sm: "450px", md: "650px" },
              height: { xs: "500px", sm: "600px" }
            }}>
            <Swiper
              direction={"vertical"}
              slidesPerView={4}
              loop={true}
              loopFillGroupWithBlank={true}
              spaceBetween={25}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev"
              }}
              modules={[Navigation]}
              className="mySwiper">
              {services.parts.map((item) => (
                <SwiperSlide key={item.title} onClick={() => handleNavigate(item.id)}>
                  <img src={item.url} />
                  <div className="titleDiv">
                    <Typography
                      variant="body1"
                      align="center"
                      sx={{ fontSize: { xs: "24px", md: "28px" }, color: "white" }}>
                      {item.title}
                    </Typography>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <IconButton className="next" sx={{ padding: "15px" }}>
            <KeyboardArrowDownIcon />
          </IconButton>
          <Button
            onClick={() => handleNavigate(services.combo.id)}
            sx={{
              backgroundImage:
                "url('https://eden.am/_next/static/media/servicesButton.2ce577ea.png')",
              padding: { xs: "12px 25px", sm: "14px 45px", md: "14px 62px" },
              marginTop: "40px",
              fontSize: "28px",
              color: "white"
            }}>
            Combo Packages
          </Button>
        </Box>
      </Box>
    </Element>
  );
}

export default Services;
