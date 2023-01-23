import React from "react";
// components
import { Box, Typography } from "@mui/material";

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
  return (
    <Box
      sx={{
        backgroundImage: `url("${item.url}")`,
        backgroundSize: "cover",
        backgroundPosition: "24% center",
        height: "100%",
        width: "100%",
        transition: "0.5s",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.429)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          boxShadow: "none",
          transition: "0.5s"
        }
      }}>
      <Typography className="serviceTitle" sx={{ color: "white" }}>
        {item.title}
      </Typography>
    </Box>
  );
}

export default ServicesItem;
