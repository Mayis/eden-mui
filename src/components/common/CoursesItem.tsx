// components
import { Box, Button, Typography } from "@mui/material";

type Props = {
  item: {
    title: string;
    url: string;
    desc: string;
  };
};

function CoursesItem({ item }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "inherit",
        color: "white",
        padding: "15px 50px"
      }}>
      <Box sx={{ width: "240px", height: "200px" }}>
        <img src={item.url} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
      <Box sx={{ padding: " 0px 25px" }}>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "18px", sm: "21px" }, margin: "25px 0px" }}>
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "17px",

            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": { xs: "2", sm: "3" },
            overflow: "hidden "
          }}>
          {item.desc}
        </Typography>
      </Box>
      <Button
        size="large"
        variant="outlined"
        sx={{ padding: "7px 70px", marginTop: "70px", color: "white" }}>
        Learn More
      </Button>
    </Box>
  );
}

export default CoursesItem;
