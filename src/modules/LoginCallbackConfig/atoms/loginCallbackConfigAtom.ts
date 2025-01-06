import { atom } from "jotai";
import { LoginCallbackConfigState } from "../LoginCallbackConfig.types";

export const loginCallbackConfigAtom = atom<LoginCallbackConfigState>({
  orgName: "",
  website: "",
  orgLogo: "",
  authorizedOrigins: [""],
  callbackUrl: "",
  subDomain: "",
  termsOfServiceUrl: "",
});
