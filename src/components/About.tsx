import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Subtitle from '../common/Subtitle';
import Typography from '@mui/material/Typography';

const aboutUs = [
  'Pioneering aesthetic clinic',
  'Modern welcoming facilities',
  'The very best doctors and specialists',
  'Dedicated patient care'
];
function About() {
  return (
    <Container sx={{ marginTop: { xs: '20px', md: '45px' }, marginBottom: 10 }}>
      <Subtitle title="About" color="black" />
      <Typography
        variant="body1"
        align="center"
        sx={{ fontSize: { xs: '15px', md: 18 }, margin: '80px 0px' }}>
        Eden medical center and spa is a leading healthcare institution in Armenia, founded by Dr
        Siroon Minas, a highly qualified plastic surgeon. Our center offers a range of anti age
        treatments, massages, facials, stomatology services and more. We are constantly expanding
        our range of services to meet the individual aesthetic needs of our patients. All our
        treatments are based on natural methods that provide proven results. In addition, we offer
        courses for medical specialists in injectables, cosmetology and massages – the most
        comprehensive teaching program in the country. Our students are highly successful and boast
        about our high demand for their skills.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ fontSize: { xs: '15px', md: '18px' }, margin: '80px 0px' }}>
        In the clinic we perform injection cosmetology, dermatological services, spa, dental
        services. We work every day from 10:00 to 20:00 We look forward to seeing you in our eden
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          rowGap: '40px',
          alignItems: 'center',
          marginTop: '80px'
        }}>
        {aboutUs.map((item) => (
          <Typography
            key={item}
            variant="body1"
            align="center"
            sx={{ fontSize: { xs: '20px', md: '24px' } }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Container>
  );
}

export default About;
