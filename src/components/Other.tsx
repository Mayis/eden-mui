import Box from '@mui/material/Box';
import Contact from './Contact';
import Courses from './Courses';
import Events from './Events';
import Footer from './Footer';
import Gallary from './Gallary';
import React from 'react';
import Services from './Services';
import Team from './Team';

function Other() {
  return (
    <Box
      sx={{
        backgroundImage: "url('https://eden.am/images/1672496510523--mainBack.webp')",
        backgroundAttachment: 'fixed'
      }}>
      <Services />
      <Courses />
      <Team />
      <Events />
      <Gallary />
      <Contact />
      <Footer />
    </Box>
  );
}

export default Other;
