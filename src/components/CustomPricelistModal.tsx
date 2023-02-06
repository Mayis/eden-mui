import { forwardRef } from "react";
// components
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { TransitionProps } from "@mui/material/transitions";

// icons
import CloseIcon from "@mui/icons-material/Close";
import Api from "../api";

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
  id?: number;
};

function CustomPricelistModal({ open, handleClose, id }: Props) {
  const { data, loading } = Api.useApi(() => Api.services.GetServicePricelist(id!));
  console.log(data);
  return;
  // (
  // <Dialog
  //   open={open}
  //   TransitionComponent={Transition}
  //   keepMounted
  //   onClose={handleClose}
  //   aria-describedby="alert-dialog-slide-description">
  //   <DialogTitle>{data.item.title}</DialogTitle>
  //   <DialogActions>
  //     <IconButton onClick={handleClose} sx={{ position: "absolute", top: "10px", right: "10px" }}>
  //       <CloseIcon />
  //     </IconButton>
  //   </DialogActions>
  //   <DialogContent>

  //       <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
  //         <Table sx={{ width: "100%" }} aria-label="simple table">
  //           <TableHead>
  //             <TableRow>
  //               <TableCell>{data.item.title}</TableCell>
  //               <TableCell></TableCell>
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {item.priceList.list.map((row) => (
  //               <TableRow
  //                 key={row.title}
  //                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
  //                 <TableCell component="th" scope="row">
  //                   {row.title}
  //                 </TableCell>
  //                 <TableCell align="right">{row.price}</TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>

  //   </DialogContent>
  // </Dialog>
  // );
}

export default CustomPricelistModal;
