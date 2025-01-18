import { CONFIGURATION_ENDPOINT } from "@api/endpoints";
import { updateData } from "../../api";
import { IConfigurationData } from "./IConfiguration.types";

export const saveConfiguration = async (data: IConfigurationData) => {
  return await updateData<IConfigurationData>(CONFIGURATION_ENDPOINT, data);
};