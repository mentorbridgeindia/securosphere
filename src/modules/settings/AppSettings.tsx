import { useGetOrganization } from "@entities/Organization";
import { Settings } from "lucide-react";
import { Card } from "react-bootstrap";
import { LoginCallbackForm } from "../LoginCallbackConfig/LoginCallbackForm";
import { IAppSettings } from "./SecuritySettings.types";

export const AppSettings = ({ config, isEditing }: IAppSettings) => {

  const { data } = useGetOrganization({
    queryConfig: { enabled: true },
  });

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Settings className="me-2 text-primary" size={24} />
          <h5 className="mb-0 fw-bold">{data?.applicationName} Settings</h5>
        </div>
      </Card.Header>
      <div className="p-4">
        {data && <LoginCallbackForm isReadOnly={!isEditing} />}
      </div>
    </Card>
  );
};
