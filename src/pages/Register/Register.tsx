import { Spinner } from "@atoms/Spinner";
import { useRegister } from "@entities/Register";
import { useInit } from "@hooks/useInit";
import { RegisterForm } from "@modules/RegisterForm";
import { SocialLoginButtons } from "@modules/SocialLogin";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending } = useRegister({
    onSuccess: () => {
      toast.success("Registration successful");
      navigate("/login");
    },
    onError: () => {
      toast.error("Registration failed! Something went wrong");
    },
  });

  const { data, isLoading } = useInit();

  useEffect(() => {
    if (!isLoading && !data) {
      window.location.href = "https://securosphere.in";
    }
    sessionStorage.removeItem("accessToken");
  }, [isLoading, data]);

  if (isLoading) return <Spinner isLoading />;

  return (
    <div className="d-flex align-items-center justify-content-center my-2 mt-5">
      <Row className="w-100 center">
        <Col
          lg={7}
          className="d-none d-lg-flex justify-content-center align-items-center"
        >
          <img
            src="https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg"
            alt="cover"
            className="img-fluid"
          />
        </Col>
        <Col
          lg={5}
          xs={12}
          md={10}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="p-4 shadow rounded w-100">
            <div className="d-flex justify-content-center brand-lg">
              {data?.logo && (
                <img src={data?.logo} alt="logo" className="img-fluid" />
              )}
            </div>
            {data?.applicationName && (
              <h5 className="text-center mb-4">
                Welcome to {data?.applicationName}
              </h5>
            )}
            <SocialLoginButtons
              isGoogleAvailable={data?.socialProviders?.google || false}
              isFacebookAvailable={data?.socialProviders?.facebook || false}
              isMicrosoftAvailable={data?.socialProviders?.microsoft || false}
              isLinkedinAvailable={data?.socialProviders?.linkedIn || false}
              isGithubAvailable={data?.socialProviders?.github || false}
              isTwitterAvailable={data?.socialProviders?.twitter || false}
              isInstagramAvailable={data?.socialProviders?.instagram || false}
              isAppleAvailable={data?.socialProviders?.apple || false}
              isAmazonAvailable={data?.socialProviders?.amazon || false}
            />
            <div className="mt-3 px-5">
              <hr />
            </div>
            <div className="mt-3">
              <RegisterForm
                registerUser={registerUser}
                termsOfServiceUrl={data?.termsOfServiceUrl ?? ""}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
