import { Box, Container, Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(52, 72, 66)',
        marginTop: '50px'
      }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: { xs: '100px', md: '130px' }
        }}>
        <Box>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Copyright © 2022 All rights reserved.
          </Typography>
        </Box>
        <Box>
          <InstagramIcon sx={{ color: 'white', paddingRight: { xs: '15px', sm: '30px' } }} />
          <FacebookIcon sx={{ color: 'white' }} />
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
