import { useQuery } from "@tanstack/react-query";
import { fetchData, PROFILE_ENDPOINT } from "../../api";
import { IProfileEntity } from "./Profile.types";

const getProfile = async () => {
  const response = await fetchData<IProfileEntity>(PROFILE_ENDPOINT);
  return response;
};

export const useGetProfile = () => {
  const { data, isLoading, error } = useQuery<IProfileEntity>({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });

  return { data, isLoading, error };
};
