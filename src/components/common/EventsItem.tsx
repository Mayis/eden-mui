// components
import { Theme, Typography, useMediaQuery, Box, Grid } from "@mui/material";

type Props = {
  item: {
    title: string;
    url: string;
    desc: string;
  };
};
function EventsItem({ item }: Props) {
  const isMatch = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box sx={{ flexGrow: 1, marginTop: "25px" }}>
      <Grid container spacing={isMatch ? 1 : 3} direction={isMatch ? "column-reverse" : "row"}>
        <Grid item xs>
          <Box>
            <img
              src={item.url}
              alt={item.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontSize: { xs: "25px", md: "22px" } }}>
              {item.title}
            </Typography>
            {!isMatch && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "12px", sm: "16px" },
                  marginTop: { xs: "10px", md: "30px" },

                  display: "-webkit-box",
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": { xs: "3", md: "none" },
                  overflow: "hidden "
                }}>
                {item.desc}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EventsItem;
