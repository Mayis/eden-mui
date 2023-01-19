// components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Subtitle from "./common/Subtitle";
import Typography from "@mui/material/Typography";
import { Element } from "react-scroll";
// data
import { about } from "../data";

function About() {
  return (
    <Element name="About Us">
      <Container sx={{ marginTop: { xs: "20px", md: "45px" }, marginBottom: 10 }}>
        <Subtitle title="About" color="black" />
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: { xs: "15px", md: 18 }, margin: "80px 0px" }}>
          {about.main}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: { xs: "15px", md: "18px" }, margin: "80px 0px" }}>
          {about.sec}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "40px",
            alignItems: "center",
            marginTop: "80px"
          }}>
          {about.parts.map((item) => (
            <Typography
              key={item}
              variant="body1"
              align="center"
              sx={{ fontSize: { xs: "20px", md: "24px" } }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Container>
    </Element>
  );
}

export default About;
