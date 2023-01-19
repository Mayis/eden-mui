import React from "react";

// components
import { Box, Container } from "@mui/material";
import EventsItem from "./common/EventsItem";
import SeeMoreBtn from "./common/SeeMoreBtn";
import Subtitle from "./common/Subtitle";
import { Element } from "react-scroll";

// data
import { events } from "../data";

function Events() {
  return (
    <Element name="News & Events">
      <Box sx={{ marginTop: "50px" }}>
        <Subtitle title="News & Events" color="black" />
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
