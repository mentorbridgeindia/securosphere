export type SocialProvidersObject = {
  email: boolean;
  google: boolean;
  apple: boolean;
  github: boolean;
  linkedIn: boolean;
  twitter: boolean;
  facebook: boolean;
  microsoft: boolean;
};

export interface IOrganizationEntity {
  id: string;
  createdBy: string;
  organizationName: string;
  subDomain: string;
  authorizedDomains: string[];
  callbackUrl: string;
  website: string;
  logo: string;
  applicationName: string;
  termsOfServiceUrl: string;
  socialProviders: SocialProvidersObject;
  publicKey?: string;
}
