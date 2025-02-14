import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useHandleJWT = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  if (token) {
    const url = new URL(window.location.href);
    url.searchParams.delete("token");
    window.history.replaceState({}, document.title, url.toString());
  }
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("accessToken", token);
    }
  }, [token]);
};
