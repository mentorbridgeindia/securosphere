import { useQuery } from "@tanstack/react-query";
import { fetchData, IQueryConfig, ORGANIZATION_ENDPOINT } from "../../api";
import { IOrganizationEntity } from "./Organization.types";


const getOrganization = async (isAdmin: boolean) => {
  return await fetchData<IOrganizationEntity>(
    isAdmin ? ORGANIZATION_ENDPOINT + "/info" : ORGANIZATION_ENDPOINT
  );

};

export const useGetOrganization = (config: IQueryConfig, isAdmin = false) => {
  const { data, isLoading, error } = useQuery<IOrganizationEntity>({
    queryKey: ["organization"],
    queryFn: () => getOrganization(isAdmin),
    staleTime: 1000 * 60 * 5,
    ...config,
  });

  return { data, isLoading, error };
};



