import Box from '@mui/material/Box';
import React from 'react';

function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: "url('https://eden.am/images/1672490781041--homeBack.webp')",
        backgroundAttachment: 'fixed',
        backgroundPosition: '24% center',
        backgroundSize: 'cover'
      }}></Box>
  );
}

export default Home;
