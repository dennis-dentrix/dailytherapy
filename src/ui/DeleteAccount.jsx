/* eslint-disable react/prop-types */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle } from "@mui/material";

export default function DeleteAccount({ onDelete }) {
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClose = () => {
    setOpenDelete(false);
  };

  return (
    <React.Fragment>
      <div onClick={() => setOpenDelete(false)} className="text-red-500">
        Delete account
      </div>
      <Dialog open={openDelete} onSubmit={onDelete}>
        <DialogTitle className="flex justify-center">
          Account deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to delete your account. Are you sure you want to
            proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button type="submit">Confirm</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
