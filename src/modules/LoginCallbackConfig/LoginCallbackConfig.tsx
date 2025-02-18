
import { Card, Col, Row } from "react-bootstrap";
import { LoginCallbackForm } from "./LoginCallbackForm";

export const LoginCallbackConfig = ({
  isReadOnly = false,
}: {
  isReadOnly?: boolean;
}) => {
  return (
    <div className="mt-5">
      <Row className="justify-content-center">
        <Col>
          <Card className="p-4 shadow-sm w-100">
            <LoginCallbackForm isReadOnly={isReadOnly} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
