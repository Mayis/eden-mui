import { forwardRef } from "react";
// components
import { TransitionProps } from "@mui/material/transitions";
import { Grid, IconButton, Slide, DialogTitle, DialogContent, Dialog } from "@mui/material";
import { CourseItem } from "./common/CoursesItem";

// icons
import CloseIcon from "@mui/icons-material/Close";

// transition up component
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  handleClose: () => void;
  item: CourseItem;
};

function CustomCoursesModal({ open, handleClose, item }: Props) {
  return (
    <Dialog
      maxWidth="lg"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description">
      <Grid container p={1} spacing={1}>
        <Grid item container xs={12} justifyContent="flex-end">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item container xs={12} md={4} alignItems="center" justifyContent="center">
          <Grid item>
            <img src={item.url} alt={item.title} style={{ width: "100%", objectFit: "cover" }} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <DialogTitle sx={{ textAlign: "center" }}>{item.title}</DialogTitle>
          <DialogContent
            sx={{ textAlign: "justify", fontSize: { xs: "12px", sm: "14px", md: "16px" } }}>
            {item.fullDesc}
          </DialogContent>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default CustomCoursesModal;
