import { useState, useEffect } from "react";
import { INIT_ENDPOINT } from "@api/endpoints";
import { fetchData } from "@api/Get/fetchData";

export const useInit = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const result = await fetchData(`/${INIT_ENDPOINT}`);
        setData(result);
      } catch (error) {
        console.error("Error initializing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitData();
  }, []);

  return { data, loading };
};
