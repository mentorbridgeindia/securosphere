import { useQuery } from "@tanstack/react-query";
import { fetchData, SETTINGS_ENDPOINT } from "../../api";
import { ISettingsEntity } from "./Settings.types";

export const useGetSettings = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["settings"],
    queryFn: () => fetchData<ISettingsEntity>(SETTINGS_ENDPOINT),
  });

  return { data, isLoading, error };
};
