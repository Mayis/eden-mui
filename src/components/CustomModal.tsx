import React from "react";

// components

import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";

type Props = {
  open: boolean;

  handleClose: () => void;
};
function CustomModal({ open, handleClose }: Props) {
  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description">
      <Typography>adasdasd</Typography>
    </Modal>
  );
}

export default CustomModal;
