import { useMutation } from "@tanstack/react-query";
import { IMutationParams, MutationResponse, PROFILE_ENDPOINT, updateData } from "../../api";
import { IProfileEntity } from "./Profile.types";

const updateProfile = async (profile: IProfileEntity) => {
  const response = await updateData(PROFILE_ENDPOINT, profile);
  return response;
};

export const useUpdateProfile = (params: IMutationParams) => {
  return useMutation<MutationResponse, Error, IProfileEntity>({
    mutationFn: updateProfile,
    ...params,
  });
};
