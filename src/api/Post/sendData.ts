import api from "../api";

export const sendData = async <T>(url: string, body: unknown): Promise<T | null> => {
  try {
    const response = await api.post<T>(url, body);
    return response.data;
  } catch (error) {
    console.error("Error sending data:", error);
    return null;
  }
};
