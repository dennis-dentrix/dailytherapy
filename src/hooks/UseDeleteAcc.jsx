import { useMutation } from "react-query";
import { deleteAccount } from "../services/userService";
import toast from "react-hot-toast";

export function useDeleteAcc() {
  const {
    mutate: deleteApi,
    isLoading: isDeleting,
    isError,
  } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toast.success("Account deleted successfully");
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { deleteApi, isDeleting, isError };
}
