import { atom } from "jotai";
import { SignUpConfigState } from "../SignUpConfig.types";

export const signUpConfigAtom = atom<SignUpConfigState>({
  appName: "",
  socialProviders: ["email"],
});
