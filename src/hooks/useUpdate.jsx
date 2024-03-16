import { useMutation } from "react-query";
import { updateProfile } from "../services/userService";
import { toast } from "react-hot-toast";

export function useUpdate() {
  const {
    mutate: updateAPI,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Detail updated");
    },
    onError: (err) => {
      toast.error(err || "Could not update your details");
    },
  });

  return { updateAPI, isLoading, isError };
}
