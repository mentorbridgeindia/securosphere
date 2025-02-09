import { Spinner } from "@atoms/Spinner";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

declare global {
  interface Window {
    childWindows?: Window[];
  }
}

export const OAuth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("accessToken", token);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, token]);

  return <Spinner isLoading />;
};
