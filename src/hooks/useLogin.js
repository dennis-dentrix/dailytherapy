import { useMutation } from "react-query";
import { login } from "../services/userService";
import toast from "react-hot-toast";

export function UseLogin() {
  const {
    mutate: loginApi,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Log in succesful");
    },
    onError: () => {
      toast.error("Email or password incorrect");
    },
  });

  return { loginApi, isLoading, isError };
}
