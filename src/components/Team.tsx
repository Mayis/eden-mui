import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery, useTheme } from "@mui/material";

import { Box } from "@mui/material";
import { Navigation } from "swiper";
import Subtitle from "../common/Subtitle";
import Typography from "@mui/material/Typography";

const teamData = [
  {
    name: "Lilit Hakobjanyan",
    pos: "Manager",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499552097--Lilit_Hakobyan.webp&w=640&q=75"
  },
  {
    name: "Siroon Minas",
    pos: "Medical Director- Plastic Surgeon",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499142858--Siroon_Minas.webp&w=828&q=75"
  },
  {
    name: "Elen Artashesyan",
    pos: "Dermatologist-Cosmetologist",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499235456--Elen_Artasheyan.webp&w=640&q=75"
  },
  {
    name: "Elen Martirosyan",
    pos: "Maxillofacial Surgeon, Injectionist",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499192211--Elen_Martirosyan.webp&w=640&q=75"
  },
  {
    name: "Kristine Amirkhanyan",
    pos: "Plastic Surgeon, Injectionist",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499270764--Kristina_Amirkhanyan.webp&w=640&q=75"
  },
  {
    name: "Yelena Hakobyan",
    pos: "Cosmetologist",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499299710--Lena_Valerevna.webp&w=640&q=75"
  },
  {
    name: "Ilona Grigoryan",
    pos: "Cosmetologist",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499347553--Ilona_Grigoryan.webp&w=640&q=75"
  },
  {
    name: "Ani Gevorgyan",
    pos: "Cosmetologist",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499374818--Ani_Gevorgyan.webp&w=640&q=75"
  },
  {
    name: "Narine Karakhanyan",
    pos: "Masseuse",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499407937--Narine_Karakhanyan.webp&w=640&q=75"
  },
  {
    name: "Armine Ferdi",
    pos: "Kinesologist-Masseuse",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499434388--Armine_Ferdi.webp&w=640&q=75"
  },
  {
    name: "Gagik Yeranosyan",
    pos: "Massuer",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499461780--Gagik_karapetovich.webp&w=640&q=75"
  },
  {
    name: "Hripsime Mkhoyan",
    pos: "Doctor-Stomatologist",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499484451--1.webp&w=640&q=75"
  },
  {
    name: "Tsoghik Avetisyan",
    pos: "Manager",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499499303--Coghik_Avitisyan.webp&w=640&q=75"
  },
  {
    name: "Lianna Yeghiazaryan",
    pos: "Manager",
    url: "https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499520634--lian.webp&w=640&q=75"
  }
];

function Team() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
          slidesPerView={isMatch ? 1 : 2}
          spaceBetween={30}
          loopFillGroupWithBlank={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          {teamData.map((item) => (
            <SwiperSlide key={item.url}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "inherit",
                  color: "white",
                  padding: "15px 50px"
                }}>
                <Box
                  sx={{
                    width: { xs: "230px", sm: "280px" },
                    height: { xs: "400px", sm: "450px" }
                  }}>
                  <img
                    src={item.url}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ padding: " 0px 25px" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "24px", sm: "32px" },
                      margin: "5px 0px",
                      color: "black"
                    }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "18px", sm: "24px" },
                      color: "black"
                    }}>
                    {item.pos}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Team;
