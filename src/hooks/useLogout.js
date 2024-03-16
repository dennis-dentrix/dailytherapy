import { useQuery } from "@tanstack/react-query";
import { logOut } from "../services/userService";

export function useLogout() {
  const x = useQuery({
    queryFn: logOut,
    onSuccess: () => {
      localStorage.removeItem("email");
      window.location.href = "/login";
    },
  });
  return x;
}
