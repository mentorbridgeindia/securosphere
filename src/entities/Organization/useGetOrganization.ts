import { useQuery } from "@tanstack/react-query";
import { fetchData, IQueryConfig, ORGANIZATION_ENDPOINT } from "../../api";
import { IOrganizationEntity } from "./Organization.types";

const getOrganization = async () => {
  return await fetchData<IOrganizationEntity>(ORGANIZATION_ENDPOINT);
};

export const useGetOrganization = (config: IQueryConfig) => {
  const { data, isLoading, error } = useQuery<IOrganizationEntity>({
    queryKey: ["organization"],
    queryFn: getOrganization,
    ...config,
  });

  return { data, isLoading, error };
};
