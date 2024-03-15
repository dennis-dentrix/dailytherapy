import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ReplyFill } from "react-bootstrap-icons";

export default function AppSettings() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-44">
      <button onClick={handleClickOpen}>App Settings</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"App Settings"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ReplyFill /> Clear the cache
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
