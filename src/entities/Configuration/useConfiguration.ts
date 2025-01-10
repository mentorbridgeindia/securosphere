import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { saveConfiguration } from "./configuration";
import { IConfigurationData } from "./IConfiguration.types";

export const useConfiguration = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IConfigurationData>({
    mutationFn: saveConfiguration,
    ...params,
  });
