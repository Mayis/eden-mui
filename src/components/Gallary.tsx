import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';

import SeeMoreBtn from '../common/SeeMoreBtn';
import Subtitle from '../common/Subtitle';
import { useState } from 'react';

const pages = ['Photo Gallery', 'Video Gallery'];
const imageData = [
  {
    url: 'https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499732917--19.webp&w=640&q=75',
    title: 'Eden Interier'
  },
  {
    url: 'https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499753045--eden-10.webp&w=640&q=75',
    title: 'Gift Card'
  },
  {
    url: 'https://eden.am/_next/image?url=https%3A%2F%2Fedenbysm.com%2Fa8%2F1672499806776--eden-5.webp&w=640&q=75',
    title: 'Sharing LOVE'
  }
];
function Gallary() {
  const [value, setValue] = useState();
  return (
    <Box sx={{ marginTop: '50px' }}>
      <Subtitle title="Gallary" color="black" />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: { xs: '20px', md: '50px' }
        }}>
        <Tabs indicatorColor="secondary" value={value} onChange={(e, value) => setValue(value)}>
          {pages.map((item) => (
            <Tab
              key={item}
              label={item}
              sx={{
                fontSize: { xs: '14px', sm: '16px', md: '24px' },
                padding: { xs: '8px 12px', sm: '12px 16px' },
                margin: { md: '0px 15px' }
              }}
            />
          ))}
        </Tabs>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '25px', md: '50px' } }}>
          <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {imageData.map((img) => (
              <Grid item xs={4} sm={4} key={img.url}>
                <Box>
                  <img
                    src={img.url}
                    alt={img.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Typography variant="body1" align="center">
                    {img.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <SeeMoreBtn />
      </Container>
    </Box>
  );
}

export default Gallary;
