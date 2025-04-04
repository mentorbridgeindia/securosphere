import { ROLES_ENDPOINT } from "@/api/endpoints";
import { useQuery } from "@tanstack/react-query"
import { IRolesEntity } from "./Role.types";
import { fetchData } from "@/api/Get/fetchData";

const getRoles=async ()=>{
    return await fetchData<IRolesEntity[]>(ROLES_ENDPOINT);
}

export const useGetRoles=()=>{
    const {data,isLoading,error}=useQuery<IRolesEntity[]>({
        queryKey:["Roles"],
        queryFn:getRoles
    });

    console.log("Data from the db is :",data);
    
    return {data,isLoading,error};
}