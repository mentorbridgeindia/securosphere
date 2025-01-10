import { sendData } from "@/api/Post/sendData";
import { IConfigurationData } from "./IConfiguration.types";
import { CONFIGURATION_ENDPOINT } from "@api/endpoints";

export const saveConfiguration = async (data: IConfigurationData) => {
  return await sendData<IConfigurationData>(CONFIGURATION_ENDPOINT, data);
};