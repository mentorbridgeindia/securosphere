import { atom } from "jotai";
import { LoginCallbackConfigState } from "../LoginCallbackConfig.types";

export const loginCallbackConfigAtom = atom<LoginCallbackConfigState>({
  orgName: "",
  website: "",
  orgLogo: "",
  callbackUrl: "",
  subDomain: "",
  termsOfServiceUrl: "",
});
