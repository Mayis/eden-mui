// components
import Box from "@mui/material/Box";

// data
import { home } from "src/data";
function Home() {
  return (
    // in mobile(ios)  fixed background not working
    <Box
      sx={{
        height: "100vh",
        backgroundImage: home.homeImg,
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        backgroundPosition: "24% center",
        backgroundSize: "cover"
      }}
    />
  );
}

export default Home;
