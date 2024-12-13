import api from "../api";

export const deleteData = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await api.delete<T>(url);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    return null;
  }
};
