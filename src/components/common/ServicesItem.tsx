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

type priceList = {
  title: string;
  list: { title: string; price: number }[];
};
type Props = {
  item: {
    id: number;
    title: string;
    url: string;
    desc?: string;
    priceList?: priceList;
  };
};

function ServicesItem({ item }: Props) {
  const { serviceId } = useParams();
  const [expanded, setExpanded] = useState<string | false>(`panel${serviceId}`);
  useEffect(() => {
    scroller.scrollTo(`panel${serviceId}`, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
  }, []);
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
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: { sx: "12px", md: "14px" } }}>{item.desc}</Typography>
            </Grid>
            <Grid item xs={12} container spacing={1}>
              <Grid item xs={12} md={6} sx={{ height: { xs: "250px", md: "300px" } }}>
                <img
                  src={item.url}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Grid>
              <Grid item container xs={12} md={6} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                  <Button
                    variant="outlined"
                    sx={{
                      padding: { xs: "4px 8px", md: "8px 10px" },
                      fontSize: { sx: "18px", md: "25px" }
                    }}>
                    See Price List
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Element>
  );
}

export default ServicesItem;
