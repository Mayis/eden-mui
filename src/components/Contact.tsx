// components
import { Box, Typography } from "@mui/material";
import Subtitle from "./common/Subtitle";
import { Element } from "react-scroll";
// data
import { contact } from "../data";

// custom hook
import { useActiveLang } from "../hooks/useActiveLang";

function Contact() {
  const elementName = useActiveLang() ? "Կապ" : "Contact";
  return (
    <Element name={elementName}>
      <Box sx={{ marginTop: "50px" }}>
        <Subtitle title={elementName} color="black" />
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
