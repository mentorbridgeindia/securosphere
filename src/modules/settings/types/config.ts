export interface AppConfig {
  subDomain: string;
  authorizedDomains: string[];
  callbackUrl: string;
  website: string;
  applicationName: string;
  organizationName: string;
  termsOfServiceUrl: string;
  applicationLogo: string | null;
  favicon: string | null; 
  socialProviders: {
    email: boolean;
    linkedIn: boolean;
    google: boolean;
  };
}

export interface AppSettingsProps {
  config: AppConfig;
  onUpdateConfig: (config: Partial<AppConfig>) => void;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  role: string;
  department?: string;
  employeeId?: string;
  profilePicture?: string;
  bio?: string;
  dateOfBirth?: string;
  address?: string;
  lastLogin?: Date;
  accountStatus: "active" | "suspended" | "pending";
  createdAt: Date;
  updatedAt: Date;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  twoFactorMethod: "app" | "sms" | "email";
  lastPasswordChange: Date;
  activeSessions: Array<{
    id: string;
    device: string;
    location: string;
    lastActive: Date;
    ip: string;
  }>;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
}

export interface NotificationSettingsProps {
  settings: NotificationSettings;
  onUpdate: (settings: Partial<NotificationSettings>) => void;
}

export interface SecuritySettingsProps {
  security: SecuritySettings;
  onUpdateSecurity: (settings: Partial<SecuritySettings>) => void;
}
