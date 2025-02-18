import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const tokenType = "Bearer";

const isMainHost = window.location.hostname.startsWith("app.securosphere.in");

const isLocalHost = window.location.hostname.includes("localhost");

let baseURL = "https://api.securosphere.in";

if (isLocalHost) {
  // baseURL = "http://localhost:8080";
}

const token = sessionStorage.getItem("accessToken") ?? null;

const clientId = sessionStorage.getItem("clientId");

const axiosParams = {
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "X-Client-Id": isMainHost ? undefined : clientId ?? undefined,
    ...(token ? { Authorization: `${tokenType} ${token}` } : {}),
  },
};

const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    const clientId = sessionStorage.getItem("clientId");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (clientId) {
      config.headers["x-client-id"] = isMainHost
        ? undefined
        : clientId ?? undefined;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error in response:", error);
    if (
      error.response.status === 401 &&
      error.response.data.error === "JWT_EXPIRED"
    ) {
      // sessionStorage.removeItem("accessToken");
      // sessionStorage.removeItem("clientId");
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register"
      ) {
        window.location.href = window.location.origin + "/login";
      }
    }
    return Promise.reject(error);
  }
);

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config),
  };
};

export default api(axiosInstance);
