import { useParams } from "react-router-dom";
// swiper slider
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import { Container, Grid, IconButton, Typography, Box } from "@mui/material";
import Subtitle from "../components/common/Subtitle";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// types
import { TeamItem } from "../components/common/TeamItem";

// data
import { team } from "../data";

type Props = {
  item: TeamItem;
};
function MemberPage() {
  const { memberId } = useParams();

  const member = team.parts.find((item) => item.id === +memberId!)!;
  console.log(member);
  return (
    <Container>
      <Grid container rowSpacing={3}>
        <Grid item container xs={12} alignItems="center">
          <Grid item xs position="absolute">
            <IconButton size="large">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Subtitle title="Member" color="black" />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={3}>
          <Grid item xs={4} sx={{ height: "400px" }}>
            <img
              src={member.url}
              alt={member.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start">
            <Grid item xs={4}>
              <Typography variant="h5">{member.nameArm}</Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {member.posArm}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography align="justify" sx={{ fontSize: 16 }}>
                {member.descArm}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MemberPage;
