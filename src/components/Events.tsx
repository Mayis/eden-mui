import React from "react";

// components
import { Box, Container } from "@mui/material";
import EventsItem from "./common/EventsItem";
import SeeMoreBtn from "./common/SeeMoreBtn";
import Subtitle from "./common/Subtitle";
import { Element } from "react-scroll";

// data
import { events } from "../data";

// custom hook
import { useActiveLang } from "../hooks/useActiveLang";

function Events() {
  const elementName = useActiveLang() ? "Նորություններ" : "News & Events";

  return (
    <Element name={elementName}>
      <Box sx={{ marginTop: "50px" }}>
        <Subtitle title={elementName} color="black" />
      </Box>
      <Container sx={{ marginTop: "50px" }}>
        {events.parts.map((item) => (
          <EventsItem item={item} key={item.url} />
        ))}
      </Container>
      <SeeMoreBtn />
    </Element>
  );
}

export default Events;
