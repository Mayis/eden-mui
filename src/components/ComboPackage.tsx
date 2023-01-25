import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Element, scroller } from "react-scroll";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Subtitle from "./common/Subtitle";

type Props = {
  item: {
    id: number;
    title: string;
    subtitle: string;
    services: { serviceName: string; price: number }[];
    sales: number;
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
        <AccordionDetails>
          <Subtitle title={item.subtitle} color="black" />
          <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Services</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Combo Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.services.map((row) => (
                  <TableRow
                    key={row.serviceName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.serviceName}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Price
                  </TableCell>
                  <TableCell align="right" sx={{ color: "red", textDecoration: "line-through" }}>
                    {item.services.reduce((a, { price }) => a + price, 0)}
                  </TableCell>
                  <TableCell align="right">{item.sales}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Element>
  );
}

export default ComboPackage;
