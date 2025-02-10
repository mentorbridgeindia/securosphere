import { LoginCallbackConfigState } from "../LoginCallbackConfig";


export interface IAppSettings {
  config: LoginCallbackConfigState | null;
  isEditing: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  lastPasswordChange: Date;
}

export interface SecuritySettingsProps {
  security: SecuritySettings;
  onUpdateSecurity: (settings: Partial<SecuritySettings>) => void;
}
