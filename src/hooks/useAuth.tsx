import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token =
      localStorage.getItem("authenticationToken") ??
      sessionStorage.getItem("authenticationToken");
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};
