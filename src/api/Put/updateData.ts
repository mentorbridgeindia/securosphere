import api from "../api";

export const updateData = async <T>(url: string, body: unknown): Promise<T | null> => {
  try {
    const response = await api.put<T>(url, body);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    return null;
  }
};
