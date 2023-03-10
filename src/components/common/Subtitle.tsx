// components
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  color?: string;
};

function Subtitle({ title, color }: Props) {
  return (
    <Typography
      align="center"
      sx={{ fontSize: { xs: "30px", sm: "40px" }, color: color || "white" }}>
      {title}
    </Typography>
  );
}

export default Subtitle;
