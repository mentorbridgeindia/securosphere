import { useQuery } from "@tanstack/react-query";
import { fetchData, IQueryConfig, USERS_ENDPOINT } from "../../api";
import { IUserEntity } from "./User.types";


const getUsers = async () => {
  return await fetchData<IUserEntity[]>(USERS_ENDPOINT);
};


export const useGetUsers = () => {
    const { data, isLoading, error } = useQuery<IUserEntity[]>({
      queryKey: ["team-management"],
      queryFn: getUsers
    });
  
    return { data, isLoading, error };
  };