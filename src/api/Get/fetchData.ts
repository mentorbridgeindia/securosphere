import api from "../api";

export const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await api.get<T>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
