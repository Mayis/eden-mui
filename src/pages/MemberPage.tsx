import { useParams } from "react-router-dom";

// components
import { Container, Grid, Typography, Box, Stack, Divider } from "@mui/material";
import Subtitle from "../components/common/Subtitle";
import MemberPageSlider from "../components/MemberPageSlider";

// data
import { team } from "../data";
import BackButton from "../components/common/BackButton";

function MemberPage() {
  const { memberId } = useParams();
  const member = team.parts.find((item) => item.id === +memberId!)!;

  return (
    <Container>
      <Grid container rowSpacing={3}>
        <Grid item container xs={12} alignItems="center">
          <Grid item xs position="absolute">
            <BackButton />
          </Grid>
          <Grid item xs={12}>
            <Subtitle title="Member" color="black" />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={3}>
          <Grid item xs={12} md={4} sx={{ height: "400px" }}>
            <img
              src={member.url}
              alt={member.name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} md={8} sx={{ width: "100%" }} container>
            <Stack
              direction="column"
              sx={{ width: "100%" }}
              divider={<Divider flexItem />}
              spacing={2}>
              <Box>
                <Typography variant="h5">{member.nameArm}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {member.posArm}
                </Typography>
              </Box>
              <Box>
                <Typography align="justify" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  {member.descArm}
                </Typography>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <MemberPageSlider url={member.url} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MemberPage;
