import { useAtom } from "jotai";
import { Settings } from "lucide-react";
import { Card } from "react-bootstrap";
import { LoginCallbackForm } from "../LoginCallbackConfig/LoginCallbackForm";
import { loginCallbackConfigAtom } from "../LoginCallbackConfig/atoms/loginCallbackConfigAtom";
import { IAppSettings } from "./SecuritySettings.types";

export const AppSettings = ({ config, isEditing }: IAppSettings) => {
  const [loginCallbackConfig, setLoginCallbackConfig] = useAtom(
    loginCallbackConfigAtom
  );

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Settings className="me-2 text-primary" size={24} />
          <h5 className="mb-0 fw-bold">Application Settings</h5>
        </div>
      </Card.Header>
      <div className="p-4">
        <LoginCallbackForm isReadOnly={!isEditing} />
      </div>
    </Card>
  );
};
