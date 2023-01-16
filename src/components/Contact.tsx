import { Box, Typography } from '@mui/material';

import React from 'react';
import Subtitle from '../common/Subtitle';

const contactData = ['Gevorg Kochar 21, Yerevan', 'Everyday 10:00 - 20:00', '+374 41 888 405'];
function Contact() {
  return (
    <Box sx={{ marginTop: '50px' }}>
      <Subtitle title="Contact" color="black" />
      <Box sx={{ marginTop: '30px' }}>
        {contactData.map((item) => (
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: '20px', marginTop: { xs: '10px', sm: '20px' } }}
            key={item}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default Contact;
