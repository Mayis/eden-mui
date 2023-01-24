// components
import { Box, Button } from "@mui/material";

function SeeMoreBtn() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Button
        variant="outlined"
        sx={{ padding: "8px 60px", fontSize: { xs: "16px", sm: "24px" }, color: "black" }}>
        See More
      </Button>
    </Box>
  );
}

export default SeeMoreBtn;
