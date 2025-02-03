import { useQuery } from "@tanstack/react-query";
import { INIT_ENDPOINT } from "@api/endpoints";
import { fetchData } from "@api/Get/fetchData";

const QUERY_KEY = ["initData"];

interface InitData {
  applicationName: string;
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

console.log(getInitData);

export const useInit = () => {
  const { data, error, isLoading } = useQuery<InitData>({
    queryKey: QUERY_KEY,
    queryFn: getInitData,
    staleTime: 1000 * 60 * 5,
  });

  return { data, loading: isLoading, error };
};
