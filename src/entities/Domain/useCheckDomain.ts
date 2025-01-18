import { useQuery } from "@tanstack/react-query";
import { DOMAIN_ENDPOINT, fetchData } from "../../api";

const checkDomain = async (domain: string) => {
  return await fetchData(`${DOMAIN_ENDPOINT}/${domain}`);
};

export const useCheckDomain = (domain: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["check-domain", domain],
    queryFn: () => checkDomain(domain),
    enabled: !!domain,
  });

  return { data, isLoading, error };
};
