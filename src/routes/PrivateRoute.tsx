import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useHandleJWT } from "../hooks/useHandleJWT";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  useHandleJWT();

  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
