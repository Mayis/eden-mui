// components
import { Box, Button } from "@mui/material";

function SeeMoreBtn() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ padding: "8px 60px", fontSize: { xs: "16px", sm: "24px" } }}>
        See More
      </Button>
    </Box>
  );
}

export default SeeMoreBtn;
