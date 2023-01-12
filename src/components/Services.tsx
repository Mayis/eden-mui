import 'swiper/css';

import { Button, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Navigation } from 'swiper';
import Subtitle from '../common/Subtitle';
import Typography from '@mui/material/Typography';

const serviceData = [
  {
    title: 'WRINKLE CORREKTION',
    url: 'https://edenbysm.com/a8/1672498367726--IMG_4990.webp'
  },
  {
    title: 'FACIAL CONTOURING',
    url: 'https://edenbysm.com/a8/1672496121487--IMG_5051.webp'
  },
  {
    title: 'DEEP HYDRATION',
    url: 'https://edenbysm.com/a8/1672498473866--IMG_5282.webp'
  },
  {
    title: 'MESOTHERAPHY',
    url: 'https://edenbysm.com/a8/1672498515878--IMG_5111.webp'
  },
  {
    title: 'PRP',
    url: 'https://edenbysm.com/a8/1672498552091--IMG_5157.webp'
  },
  {
    title: 'FAT DISSOLVING TREATMENT',
    url: 'https://edenbysm.com/a8/1672498589090--IMG_5400.webp'
  },
  {
    title: 'FACIAL',
    url: 'https://edenbysm.com/a8/1672498621332--IMG_4010.webp'
  },
  {
    title: 'CARE',
    url: 'https://edenbysm.com/a8/1672498647487--IMG_4115.webp'
  },
  {
    title: 'PEELS',
    url: 'https://edenbysm.com/a8/1672498674033--IMG_4337.webp'
  },
  {
    title: 'HAIR REMOVAL',
    url: 'https://edenbysm.com/a8/1672498742320--IMG_6590.webp'
  },
  {
    title: 'RF MICRONEEDLING',
    url: 'https://edenbysm.com/a8/1672498712912--IMG_7955.webp'
  },
  {
    title: 'DERMAPEN',
    url: 'https://edenbysm.com/a8/1672498762793--IMG_4712.webp'
  },
  {
    title: 'PARMANENT MAKEUP',
    url: 'https://edenbysm.com/a8/1672498787697--Microblading_eyebrows.webp'
  },
  {
    title: 'SPA MASSAGES',
    url: 'https://edenbysm.com/a8/1672498857234--IMG_7545.webp'
  },
  {
    title: 'THERAPEUTIC MASSAGE',
    url: 'https://edenbysm.com/a8/1672498869776--IMG_7543.webp'
  },
  {
    title: 'PHYTOSAUNA',
    url: 'https://edenbysm.com/a8/1672498893008--IMG_7409.webp'
  },
  {
    title: 'COUPLE MASSAGE',
    url: 'https://edenbysm.com/a8/1672498920923--IMG_3727.webp'
  },
  {
    title: 'BODY WRAPPING',
    url: 'https://edenbysm.com/a8/1672498934195--IMG_7686.webp'
  }
];
function Services() {
  return (
    <div id="services">
      <Box sx={{ paddingTop: '20px' }}>
        <Subtitle title="Services" color="black" />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '40px 0px'
          }}>
          <IconButton className="prev" sx={{ padding: '15px', width: '40px', height: '40px' }}>
            <KeyboardArrowUpIcon />
          </IconButton>
          <Box
            sx={{
              width: { xs: '300px', sm: '450px', md: '650px' },
              height: { xs: '500px', sm: '600px' }
            }}>
            <Swiper
              direction={'vertical'}
              slidesPerView={4}
              loop={true}
              loopFillGroupWithBlank={true}
              spaceBetween={25}
              navigation={{
                nextEl: '.next',
                prevEl: '.prev'
              }}
              //   navigation={true}
              modules={[Navigation]}
              className="mySwiper">
              {serviceData.map((item) => (
                <SwiperSlide key={item.title}>
                  <img src={item.url} />
                  <div className="titleDiv">
                    <Typography
                      variant="body1"
                      align="center"
                      sx={{ fontSize: { xs: '24px', md: '28px' }, color: 'white' }}>
                      {item.title}
                    </Typography>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <IconButton className="next" sx={{ padding: '15px' }}>
            <KeyboardArrowDownIcon />
          </IconButton>
          <Button
            sx={{
              backgroundImage:
                "url('https://eden.am/_next/static/media/servicesButton.2ce577ea.png')",
              padding: { xs: '12px 25px', sm: '14px 45px', md: '14px 62px' },
              marginTop: '40px',
              fontSize: '28px',
              color: 'white'
            }}>
            Combo Packages
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Services;
