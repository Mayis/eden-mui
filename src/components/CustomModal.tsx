import React from "react";

// components

import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";

type Props = {
  open: boolean;

  handleClose: () => void;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
function CustomModal({ open, handleClose }: Props) {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description">
      <Box sx={style}>
        <Typography>adasdasd</Typography>
      </Box>
    </Modal>
  );
}

export default CustomModal;
