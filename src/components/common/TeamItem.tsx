// components
import { Box, Typography } from "@mui/material";

type Props = {
  item: {
    name: string;
    pos: string;
    url: string;
  };
};
function TeamItem({ item }: Props) {
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
      <Box
        sx={{
          width: { xs: "230px", sm: "280px" },
          height: { xs: "400px", sm: "450px" }
        }}>
        <img src={item.url} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
      <Box sx={{ padding: " 0px 25px" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "24px", sm: "32px" },
            margin: "5px 0px",
            color: "black"
          }}>
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "18px", sm: "24px" },
            color: "black"
          }}>
          {item.pos}
        </Typography>
      </Box>
    </Box>
  );
}

export default TeamItem;
