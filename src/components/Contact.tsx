// components
import { Box, Typography } from "@mui/material";
import Subtitle from "./common/Subtitle";
import { Element } from "react-scroll";
// data
import { contact } from "../data";

function Contact() {
  return (
    <Element name="Contact">
      <Box sx={{ marginTop: "50px" }}>
        <Subtitle title="Contact" color="black" />
        <Box sx={{ marginTop: "30px" }}>
          {contact.adress.map((item) => (
            <Typography
              variant="body1"
              align="center"
              sx={{ fontSize: "20px", marginTop: { xs: "10px", sm: "20px" } }}
              key={item}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Element>
  );
}

export default Contact;
