import { ReactComponent as IconLogo } from "@assets/icons/logo.svg";
import { Spinner } from "@atoms/Spinner";
import { useLogin } from "@entities/Login";
import { LoginForm } from "@modules/LoginForm";
import { SocialLoginButtons } from "@modules/SocialLogin";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useInit } from "@hooks/useInit";

export const Login = () => {
  const navigate = useNavigate();
  const { mutate: loginUser, isPending } = useLogin({
    onSuccess: () => {
      toast.success("Login successful! Welcome back!");
      navigate("/");
    },
    onError: (error) => {
      toast.error("Login failed. Please check your credentials.");
    },
  });

  const { data, isValidClient } = useInit();

  useEffect(() => {
    sessionStorage.removeItem("accessToken");
  }, []);

  // Common JSX layout for the login page
  const loginPageContent = (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner isLoading={isPending} />
      <Row className="w-100 center">
        <Col lg={7} className="d-none d-lg-flex justify-content-center align-items-center">
          <img src="https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg" alt="cover" className="img-fluid" />
        </Col>
        <Col lg={5} xs={12} md={10} className="d-flex align-items-center justify-content-center" style={{ height: "100vh", paddingBottom: "150px" }}>
          <Card className="p-4 shadow rounded w-100">
            <div className="d-flex justify-content-center brand-lg">
              <IconLogo />
            </div>
            <h5 className="text-center mb-4">
              {isValidClient && data ? `Welcome to ${data.applicationName} login page` : "Welcome to SecuroSphere login page"}
            </h5>
            <SocialLoginButtons
              isGoogleAvailable={isValidClient && data ? data.socialProviders.google : true}
              isLinkedinAvailable={isValidClient && data ? data.socialProviders.linkedIn : true}
              isGithubAvailable={isValidClient && data ? data.socialProviders.github : true}
              isFacebookAvailable={isValidClient && data ? data.socialProviders.facebook : false}
              isMicrosoftAvailable={isValidClient && data ? data.socialProviders.microsoft : false}
            />
            <div className="mt-3 px-5">
              <hr />
            </div>
            <div className="mt-3">
              <LoginForm loginUser={loginUser} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );

  // Render the login page content
  return loginPageContent;
};
