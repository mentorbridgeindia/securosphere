import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useMemo } from "react";

const tokenType = "Bearer";

const isMainHost = window.location.hostname.startsWith("app.securosphere.in");

const isLocalHost = window.location.hostname.includes("localhost");

let baseURL = "https://api.securosphere.in";

if (isLocalHost) {
  baseURL = "http://localhost:8080";
}

const api = () => {
  const token = sessionStorage.getItem("accessToken") ?? null;

  const clientId = sessionStorage.getItem("clientId");

  const axiosParams = {
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
        Authorization: `${tokenType} ${token}`,
        ClientId: isMainHost ? undefined : clientId ?? undefined,
      },
  };

  const axiosInstance = axios.create(axiosParams);

  console.log(axiosParams);

  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axiosInstance.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axiosInstance.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axiosInstance.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axiosInstance.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axiosInstance.put<T>(url, body, config),
  };
};

export default api();
