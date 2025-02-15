import { FormLabel } from "@atoms/FormLabel";
import { Card, Col, Row } from "react-bootstrap";
import { InfoStepProps } from "../Information.types";

export const InfoStep = ({ step, title, children }: InfoStepProps) => (
  <Row className="mt-4 justify-content-center">
    <Col xs={12} md={8} lg={7}>
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <FormLabel>
            {step}: {title}
          </FormLabel>
          {children}
        </Card.Body>
      </Card>
    </Col>
  </Row>
);
