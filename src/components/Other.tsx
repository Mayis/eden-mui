import Box from '@mui/material/Box';
import Courses from './Courses';
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
    </Box>
  );
}

export default Other;
