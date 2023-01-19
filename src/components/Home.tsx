// components
import Box from "@mui/material/Box";

// data
import { home } from "../data";
import { Element } from "react-scroll";
function Home() {
  return (
    // in mobile(ios)  fixed background not working
    <Element name="Home">
      <Box
        id="Home"
        sx={{
          height: "100vh",
          backgroundImage: `url(${home.homeImg})`,
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          backgroundPosition: "24% center",
          backgroundSize: "cover"
        }}
      />
    </Element>
  );
}

export default Home;
