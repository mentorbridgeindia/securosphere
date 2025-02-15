import { INIT_ENDPOINT } from "@api/endpoints";
import { fetchData } from "@api/Get/fetchData";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = ["initData"];

interface InitData {
  applicationName: string;
  logo?: string;
  socialProviders: {
    google?: boolean;
    linkedIn?: boolean;
    github?: boolean;
    facebook?: boolean;
    microsoft?: boolean;
    apple?: boolean;
    instagram?: boolean;
    twitter?: boolean;
    amazon?: boolean;
  };
  termsOfServiceUrl?: string;
}

const getInitData = async () => {
  return await fetchData<InitData>(INIT_ENDPOINT);
};

export const useInit = (config: { enabled?: boolean } = { enabled: true }) => {
  const { data, error, isLoading } = useQuery<InitData>({
    queryKey: QUERY_KEY,
    queryFn: getInitData,
    staleTime: 1000 * 60 * 5,
    enabled: config?.enabled,
  });

  return { data, isLoading, error };
};
