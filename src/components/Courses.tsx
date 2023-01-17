import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery, useTheme } from '@mui/material';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { Navigation } from 'swiper';
import Subtitle from '../common/Subtitle';
import Typography from '@mui/material/Typography';

const coursesData = [
  {
    title: 'MASSAGE COURSE',
    url: 'https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499069088--IMG_3734.webp&w=256&q=75',
    desc: 'At Eden Spa we offer professional massage courses to master both the theoretical and practical skills. The courses are conducted both separately with chosen topic and full course to master all of the necessary skills.'
  },
  {
    title: 'BASICS OF COSMETOLOGY',
    url: 'https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499091804--IMG_4164.webp&w=256&q=75',
    desc: 'Basics (general) of cosmetology course in eden. From theoretical lessons on skin anatomy, types and diseases to hardware cosmetology, peels and cleansing.'
  },
  {
    title: 'INJECTIONAL COSMETOLOGY',
    url: 'https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672498989824--AH9A9957.webp&w=640&q=75',
    desc: 'The course includes practical-theoretical lessons by Dr Siroon Minas.'
  }
];
function Courses() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        backgroundImage: "url('https://eden.am/images/1672496638537--coursesBack.webp')",
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.429)',
        padding: { sm: '30px 60px', md: '50px 100px' }
      }}>
      <Box>
        <Subtitle title="Courses" />
      </Box>
      <Box sx={{ width: '100%', height: '500px', paddingTop: { xs: '40px', md: '80px' } }}>
        <Swiper
          slidesPerView={isMobileOrTablet ? 1 : 2}
          spaceBetween={30}
          loopFillGroupWithBlank={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          {coursesData.map((item) => (
            <SwiperSlide key={item.url}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'inherit',
                  color: 'white',
                  padding: '15px 50px'
                }}>
                <Box sx={{ width: '240px', height: '200px' }}>
                  <img
                    src={item.url}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ padding: ' 0px 25px' }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '18px', sm: '21px' }, margin: '25px 0px' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '17px',

                      display: '-webkit-box',
                      '-webkit-box-orient': 'vertical',
                      '-webkit-line-clamp': { xs: '2', sm: '3' },
                      overflow: 'hidden '
                    }}>
                    {item.desc}
                  </Typography>
                </Box>
                <Button
                  size="large"
                  variant="outlined"
                  sx={{ padding: '7px 70px', marginTop: '70px', color: 'white' }}>
                  Learn More
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Courses;
