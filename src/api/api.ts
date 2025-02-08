import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const tokenType = "Bearer";

const token = sessionStorage.getItem("accessToken") ?? null;

const clientId = sessionStorage.getItem("clientId");

const isMainHost = window.location.hostname.startsWith("www.securosphere.in");

const subDomain = window.location.hostname.split(".")[0];

const isLocalHost = window.location.hostname.includes("localhost");

let baseURL =
  window.location.protocol +
  "//" +
  (isMainHost ? "api.securosphere.in" : `api.${subDomain}.securosphere.in`);

if (isLocalHost) {
  if (subDomain === "" || subDomain === "localhost") {
    baseURL = "http://api.localhost:8080";
  } else {
    baseURL = `http://${subDomain}.api.localhost:8080`;
  }
}

const axiosParams = {
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    Authorization: `${tokenType} ${token}`,
    clientId: isMainHost ? null : clientId,
  },
};

const axiosInstance = axios.create(axiosParams);

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
