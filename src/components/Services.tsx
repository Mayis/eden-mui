import Box from '@mui/material/Box';
import Slider from 'react-slick';
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
        <Typography variant="body1" align="center" sx={{ fontSize: '40px' }}>
          Services
        </Typography>
      </Box>
    </div>
  );
}

export default Services;
