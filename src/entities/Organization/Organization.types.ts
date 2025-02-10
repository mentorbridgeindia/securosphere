import { SocialProvider } from "@/types/auth";

export interface IOrganizationEntity {
  id: string;
  createdBy: string;
  organizationName: string;
  subDomain: string;
  authorizedDomains: string;
  callbackUrl: string;
  website: string;
  logo: string;
  applicationName: string;
  termsOfServiceUrl: string;
  socialProviders: SocialProvider;
  publicKey?: string;
}
