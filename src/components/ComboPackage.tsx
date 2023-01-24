import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Element, scroller } from "react-scroll";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  item: {
    id: number;
    title: string;
    subtitle: string;
    services: { serviceName: string; price: number }[];
  };
};
function ComboPackage({ item }: Props) {
  // active service id
  const { serviceId } = useParams();

  // state for active/expanded panel
  const [expanded, setExpanded] = useState<string | false>(`panel${serviceId}`);

  //  scroll to the active panel
  useEffect(() => {
    scroller.scrollTo(`panel${serviceId}`, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
  }, []);

  //  function for changing active panel
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Element name={`panel${item.id}`}>
      <Accordion
        sx={{ boxShadow: "none" }}
        expanded={expanded === `panel${item.id}`}
        onChange={handleChange(`panel${item.id}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Element>
  );
}

export default ComboPackage;
