import { SocialProvider } from "../../types/auth";

export interface IRegisterEntity {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IRegisterMutation {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  socialId?: string;
  socialProvider?: SocialProvider;
  profilePicture?: string;
}
