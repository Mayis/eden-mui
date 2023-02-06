// components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Subtitle from "./common/Subtitle";
import Typography from "@mui/material/Typography";
import { Element } from "react-scroll";
// data
import { about } from "../data";

// custom hooks
import { useActiveLang } from "../hooks/useActiveLang";

function About() {
  const elementName = useActiveLang() ? "Մեր մասին" : "About Us";
  const aboutInfo = useActiveLang() ? about.arm : about.eng;
  return (
    <Element name={elementName}>
      <Container sx={{ marginTop: { xs: "20px", md: "45px" }, marginBottom: 10 }}>
        <Subtitle title={elementName} color="black" />
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: { xs: "15px", md: 18 }, margin: "80px 0px" }}>
          {aboutInfo.main}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: { xs: "15px", md: "18px" }, margin: "80px 0px" }}>
          {aboutInfo.sec}
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
          {aboutInfo.parts.map((item) => (
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
