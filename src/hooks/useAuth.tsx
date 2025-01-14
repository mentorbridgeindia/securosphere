import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token =
      localStorage.getItem("accessToken") ??
      sessionStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};
