// components
import Box from "@mui/material/Box";
import Contact from "./Contact";
import Courses from "./Courses";
import Events from "./Events";
import Footer from "./Footer";
import Gallary from "./Gallary";
import Services from "./Services";
import Team from "./Team";

// data
import { home } from "src/data";

function Other() {
  return (
    <Box
      sx={{
        backgroundImage: home.backImg,
        backgroundAttachment: "fixed"
      }}>
      <Services />
      <Courses />
      <Team />
      <Events />
      <Gallary />
      <Contact />
      <Footer />
    </Box>
  );
}

export default Other;
