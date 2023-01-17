// components
import Box from '@mui/material/Box';

function Home() {
  return (
    // in mobile(ios)  fixed background not working
    <Box
      sx={{
        height: '100vh',
        backgroundImage: "url('https://eden.am/images/1672490781041--homeBack.webp')",
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        backgroundPosition: '24% center',
        backgroundSize: 'cover'
      }}></Box>
  );
}

export default Home;
