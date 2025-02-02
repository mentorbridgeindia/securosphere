import { useState, useEffect } from "react";
import { INIT_ENDPOINT } from "@api/endpoints";
import { fetchData } from "@api/Get/fetchData";

export const useInit = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [callbackUrl, setCallbackUrl] = useState<string | null>(null);
  const [isValidClient, setIsValidClient] = useState(false);

  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const result: { callbackUrl?: string; website: string; applicationName: string; socialProviders: any } = await fetchData(INIT_ENDPOINT);
        setData(result);
        if (result?.callbackUrl) {
          setCallbackUrl(result.callbackUrl);
        }

        // Check if the current website matches the client's website
        const currentHost = window.location.host;
        if (result?.website && currentHost.includes(result.website.replace("https://", "").replace("http://", ""))) {
          setIsValidClient(true);
        }
      } catch (error) {
        console.error("Error initializing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitData();
  }, []);

  return { data, loading, callbackUrl, isValidClient };
};
