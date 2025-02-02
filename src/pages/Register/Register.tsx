import { ReactComponent as IconLogo } from "@assets/icons/logo.svg";
import { Spinner } from "@atoms/Spinner";
import { useRegister } from "@entities/Register";
import { RegisterForm } from "@modules/RegisterForm";
import { SocialLoginButtons } from "@modules/SocialLogin";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useInit } from "@hooks/useInit";
export const Register = () => {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending } = useRegister({
    onSuccess: () => {
      toast.success("Registration successful");
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Registration failed! Something went wrong");
    },
  });

  const { data, isValidClient } = useInit();

  useEffect(() => {
    sessionStorage.removeItem("accessToken");
  }, []);

  if (isValidClient && data) {
    return (
      <div className="d-flex align-items-center justify-content-center my-2 mt-5">
        <Spinner isLoading={isPending} />
        <Row className="w-100 center">
          <Col lg={7} className="d-none d-lg-flex justify-content-center align-items-center">
            <img src="https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg" alt="cover" className="img-fluid" />
          </Col>
          <Col lg={5} xs={12} md={10} className="d-flex align-items-center justify-content-center">
            <Card className="p-4 shadow rounded w-100">
              <div className="d-flex justify-content-center brand-lg">
                <IconLogo />
              </div>
              <h6 className="text-center">Welcome to {data.applicationName} register page</h6>
              <SocialLoginButtons
                isGoogleAvailable={data.socialProviders.google}
                isLinkedinAvailable={data.socialProviders.linkedIn}
                isGithubAvailable={data.socialProviders.github}
                isFacebookAvailable={data.socialProviders.facebook}
                isMicrosoftAvailable={data.socialProviders.microsoft}
              />
              <div className="mt-3 px-5">
                <hr />
              </div>
              <div className="mt-3">
                <RegisterForm registerUser={registerUser} />
              </div>
              <a href={data.termsOfServiceUrl} target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center my-2 mt-5">
      <Spinner isLoading={isPending} />
      <Row className="w-100 center">
        <Col lg={7} className="d-none d-lg-flex justify-content-center align-items-center">
          <img src="https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg" alt="cover" className="img-fluid" />
        </Col>
        <Col lg={5} xs={12} md={10} className="d-flex align-items-center justify-content-center">
          <Card className="p-4 shadow rounded w-100">
            <div className="d-flex justify-content-center brand-lg">
              <IconLogo />
            </div>
            <h5 className="text-center mb-4">Welcome to SecuroSphere register page</h5>
            <SocialLoginButtons
              isGoogleAvailable
              isLinkedinAvailable
              isGithubAvailable
            />
            <div className="mt-3 px-5">
              <hr />
            </div>
            <div className="mt-3">
              <RegisterForm registerUser={registerUser} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
