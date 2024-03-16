/* eslint-disable react/prop-types */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
export default function ResetDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen} className="text-blue-500">
        Reset Password
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle className="flex justify-center">Edit password</DialogTitle>
        <DialogContent>
          <form action="">
            <div className="flex flex-col gap-4">
              <label htmlFor="curr_pswd">Current Password</label>
              <input
                type="text"
                className="border px-2 py-3 rounded-md focus:outline-none w-[25vw]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="new_pswd">New Password</label>
              <input
                type="text"
                className="border px-2 py-3 rounded-md focus:outline-none w-[25vw]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="confirm">Confirm</label>
              <input
                type="text"
                className="border px-2 py-3 rounded-md focus:outline-none w-[25vw]"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button type="submit">Confirm</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
