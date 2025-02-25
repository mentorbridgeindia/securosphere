export interface IConfigurationData {
  subDomain: string;
  callbackUrl: string;
  website: string;
  applicationName: string;
  organizationName: string;
  termsOfServiceUrl: string;
  socialProviders: Record<string, boolean>;
  logo?: string;
}
