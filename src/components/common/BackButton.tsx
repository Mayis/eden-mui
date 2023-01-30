import { useNavigate } from "react-router-dom";

// components
import { IconButton } from "@mui/material";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <IconButton size="large" onClick={handleBack}>
      <ArrowBackIcon />
    </IconButton>
  );
}

export default BackButton;
