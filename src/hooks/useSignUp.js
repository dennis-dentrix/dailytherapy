import { useMutation } from "react-query";
import { signUp } from "../services/userService";
import toast from "react-hot-toast";

// POST, UPDATE, DELETE, PUT -> USEMUTATION
// GET -> USEQUERY

export function useSignUp() {
  const {
    mutate: signUpAPI,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      //   console.log(data);
      console.log(`DATA---- ${{ ...data }}`);
      toast.success("Account created successfully");
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { signUpAPI, isLoading, isError };
}
