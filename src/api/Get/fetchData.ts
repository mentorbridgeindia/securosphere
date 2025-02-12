import { AxiosResponse } from "axios";
import api from "../api";
import { INIT_ENDPOINT } from "../endpoints";

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await api.get<T>(url);
    if (url.includes(INIT_ENDPOINT)) {
      handleInitData(response);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};


const handleInitData = (response: AxiosResponse<any>) => {
  if (response) {
    const clientId = response.headers["clientid"];
    if (clientId !== undefined && clientId !== null) {
      sessionStorage.setItem("clientId", clientId);
    }
  }
};
