import DecodeJWT from "@/modules/Information/DecodeJWT";
import Redirection from "@/modules/Information/Redirection";
import { Spinner } from "@atoms/Spinner";
import { useGetOrganization } from "@entities/Organization";
import { useEffect } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { InfoStep } from "./components/InfoStep";

export const Information = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetOrganization(
    {
      queryConfig: {
        enabled: sessionStorage.getItem("accessToken") !== null,
      },
    },
    true
  );

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={7}>
          <h3 className="text-center text-primary mb-4 fw-bold">
            Welcome to SecuroSphere
          </h3>
          <Alert variant="success" className="p-3 mb-4">
            Below are the <strong>step-by-step instructions</strong> to help you
            configure and use the platform effectively. Enjoy seamless security
            and an intuitive experience.
          </Alert>
        </Col>
      </Row>

      {data && (
        <>
          <InfoStep step="STEP 1" title="REDIRECT DETAILS">
            <Redirection subDomain={data.subDomain} />
          </InfoStep>
          <InfoStep step="STEP 2" title="DECODE JWT TOKEN">
            <DecodeJWT publicKey={data?.publicKey ?? ""} />
          </InfoStep>
        </>
      )}

      <div className="center">
        <Button variant="primary" onClick={() => navigate("/")}>
          Continue
        </Button>
      </div>
    </Container>
  );
};
