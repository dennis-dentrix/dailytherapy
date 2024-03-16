import { Avatar } from "@mui/material";
import { useForm } from "react-hook-form";
import { useUpdate } from "../hooks/useUpdate";
import { useNavigate } from "react-router";
import { useDeleteAcc } from "../hooks/UseDeleteAcc";
import DeleteAccount from "../ui/DeleteAccount";
import ResetDialog from "../ui/ResetPswdDialog";
import { Spin } from "antd";
import { useAppState } from "../context/userContext";

export default function AccountContent() {
  const { register, handleSubmit } = useForm();
  const { updateAPI, isLoading } = useUpdate();
  const navigate = useNavigate();
  const { deleteApi, isDeleting } = useDeleteAcc();

  const { user, token, dispatch } = useAppState();

  function deleteAcc() {
    deleteApi(null, {
      onSuccess: () => {
        navigate("/home");
      },
    });
  }
  function onUpdate(newData) {
    const updateData = { ...newData, token: token };
    updateAPI(updateData, {
      onSuccess: ({ data }) => {
        console.log(data);
        dispatch({ type: "update", payload: data.user });
        localStorage.setItem("name", newData.name);
        navigate("/home");
      },
    });
    console.log(newData);
  }

  return (
    <main className="md:w-3/4 p-8">
      <h1 className="text-2xl font-semibold mb-6">My account</h1>
      <div className="bg-white p-8 rounded-md">
        <form className="w-full " onSubmit={handleSubmit(onUpdate)}>
          <div className="flex gap-4 items-center mb-6">
            <Avatar src={user.photo} />
            <input
              type="file"
              className="text-blue-400 cursor-pointer"
              placeholder="UPLOAD A PHOTO"
            />
          </div>

          <div className="md:grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Full name*</label>
              <input
                type="text"
                className="focus:outline-none px-2 py-3 border"
                {...register("name")}
                defaultValue={user?.name ?? ""}
                disabled={user?.name ? true : false}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="focus:outline-none px-2 py-3 border"
                defaultValue={user.email}
                disabled
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col items-start gap-4">
            <p>Password</p>
            <button className="hover:bg-gray-200 cursor-pointer py-3 px-2">
              <ResetDialog />
            </button>
          </div>

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="text-white bg-blue-400 px-1 py-2 text-lg rounded-md border"
            >
              {isLoading || isDeleting ? <Spin /> : "SAVE"}
            </button>
          </div>
        </form>
        <div className="col-span-2 flex flex-col items-start gap-4">
          <p>Privacy</p>
          <button className="hover:bg-gray-200 cursor-pointer py-3 px-2">
            <DeleteAccount onDelete={deleteAcc} />
          </button>
        </div>
      </div>
    </main>
  );
}
