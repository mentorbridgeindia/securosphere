export interface AppConfig {
  subDomain: string;
  authorizedDomains: string[];
  callbackUrl: string;
  applicationName: string;
  organizationName: string;
  applicationLogo: string | null;
  socialProviders: Record<string, boolean>; 
}

export interface AppSettingsProps {
  config: AppConfig; 
  onUpdateConfig: (updatedConfig: Partial<AppConfig>) => void;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  lastPasswordChange: Date;

}

export interface SecuritySettingsProps {
  security: SecuritySettings;
  onUpdateSecurity: (settings: Partial<SecuritySettings>) => void;
}



export interface EmailSettingsProps {
  serverAddress: string;
  port: number;
  username: string;
  password: string;
  fromEmail: string;
}

export interface EmailSettingsComponentProps {
  config: EmailSettingsProps;
  onUpdateConfig: (updatedConfig: Partial<EmailSettingsProps>) => void;
}
