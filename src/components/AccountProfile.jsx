import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Avatar } from "@mui/material";

export default function AccountContent() {
  return (
    <main className="md:w-3/4 p-8">
      <h1 className="text-2xl font-semibold mb-6">My account</h1>
      <div className="bg-white p-8 rounded-md">
        <div className="flex gap-4 items-center mb-6">
          <Avatar />
          <button className="text-blue-400">UPLOAD A PHOTO</button>
        </div>
        <form className="w-full md:grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First name*</label>
            <input
              type="text"
              className="focus:outline-none px-2 py-4 border"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              className="focus:outline-none px-2 py-4 border"
            />
          </div>

          <div className="col-span-2 flex flex-col items-start gap-4">
            <p>Password</p>
            <button className="hover:bg-gray-200 cursor-pointer py-3 px-2">
              <ResetDialog />
            </button>
          </div>
          <div className="col-span-2 flex flex-col items-start gap-4">
            <p>Privacy</p>
            <button className="hover:bg-gray-200 cursor-pointer py-3 px-2">
              <DeleteAccount />
            </button>
          </div>
          <div className="col-span-2 flex justify-end">
            <button className="text-white bg-blue-400 px-1 py-2 text-lg rounded-md border">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export function ResetDialog() {
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

function DeleteAccount() {
  const [openDelete, setOpenDelete] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpenDelete(true);
  //   };

  const handleClose = () => {
    setOpenDelete(false);
  };

  return (
    <React.Fragment>
      <div onClick={() => setOpenDelete(false)} className="text-red-500">
        Delete account
      </div>
      <Dialog open={openDelete} onClose={handleClose}>
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
