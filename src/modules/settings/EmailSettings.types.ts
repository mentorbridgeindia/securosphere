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
