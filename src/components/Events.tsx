import React from "react";

// components
import { Box, Container } from "@mui/material";
import EventsItem from "./common/EventsItem";
import SeeMoreBtn from "./common/SeeMoreBtn";
import Subtitle from "./common/Subtitle";

// data
import { events } from "../data";

function Events() {
  return (
    <div id="newsAndEvents">
      <Box sx={{ marginTop: "50px" }}>
        <Subtitle title="News & Events" color="black" />
      </Box>
      <Container sx={{ marginTop: "50px" }}>
        {events.parts.map((item) => (
          <EventsItem item={item} key={item.url} />
        ))}
      </Container>
      <SeeMoreBtn />
    </div>
  );
}

export default Events;
