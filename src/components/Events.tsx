import { Box, Button, Container } from '@mui/material';

import EventsItem from '../common/EventsItem';
import React from 'react';
import SeeMoreBtn from '../common/SeeMoreBtn';
import Subtitle from '../common/Subtitle';

const eventsData = [
  {
    title: 'EDEN EVENT',
    url: 'https://edenbysm.com/a8/1672499667566--IMG_0263.webp',
    desc: "We gathered our lovely customers under a roof to talk about the important topics such as being feminine, healthy, loved and having a great posture from a medical point of view. Eden Spa's professionals explained the importance of standing straight, exercises for back pain and general idea of self-care and love."
  },
  {
    title: 'Routine Skincare is at eden',
    url: 'https://edenbysm.com/a8/1672499685066--21.webp',
    desc: `Eden's founder Dr. Siroon Minas launched the cosmetics line Routine by Siroon Minas. The base of cosmetics formulation are natural ingredients mostly concentrated on fig leaves and fig. Routine is a lifestyle and self care. All of the necessary steps for basic skincare is included in routines full package which includes
    - Cleansing foam with fig extract
    - Cream-scrub with fig extract
    -Hydrating toner with fig extract
    - Moisturising Day cream with SPF 30
    -Regenerating Night cream with shea butter
    -Lip Balm`
  }
];
function Events() {
  return (
    <div id="newsAndEvents">
      <Box sx={{ paddingTop: '20px' }}>
        <Subtitle title="News & Events" color="black" />
      </Box>
      <Container sx={{ marginTop: '50px' }}>
        {eventsData.map((item) => (
          <EventsItem item={item} key={item.url} />
        ))}
      </Container>
      <SeeMoreBtn />
    </div>
  );
}

export default Events;
