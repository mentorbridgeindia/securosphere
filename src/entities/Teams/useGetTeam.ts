import { TEAMS_ENDPOINT } from "@/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import { ITeamsEntity } from "./Team.types";
import { fetchData } from "@/api/Get/fetchData";

const getTeams = async () => {
  try {
    return await fetchData<ITeamsEntity[]>(TEAMS_ENDPOINT);
  } catch (error) {
    console.error("Error fetching teams:", error);
    return [];
  }
};

export const useGetTeams = () => {
  const { data, isLoading, error } = useQuery<ITeamsEntity[]>({
    queryKey: ["Teams"],
    queryFn: getTeams,
  });

  console.log("Data from the db is :", data);

  return { data, isLoading, error };
};
