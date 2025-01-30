import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const tokenType = "Bearer";

const token = sessionStorage.getItem("accessToken") ?? null;

const baseURL = process.env.REACT_APP_API_URL;

const clientId = sessionStorage.getItem("clientId");

const isMainHost = window.location.hostname.startsWith("securosphere.in") || window.location.hostname.startsWith("localhost");

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
