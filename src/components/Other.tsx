import Box from '@mui/material/Box';
import React from 'react';
import Services from './Services';

function Other() {
  return (
    <Box
      sx={{
        backgroundImage: "url('https://eden.am/images/1672496510523--mainBack.webp')",
        backgroundAttachment: 'fixed'
      }}>
      <Services />
    </Box>
  );
}

export default Other;
