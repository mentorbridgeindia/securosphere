import { ReactComponent as IconLogo } from "@assets/icons/logo.svg";
import { Spinner } from "@atoms/Spinner";
import { LoginForm } from "@modules/LoginForm";
import { SocialLogin } from "@modules/SocialLogin";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogin } from "@entities/Login";

export const Login = () => {
  const navigate = useNavigate();
  const { mutate: loginUser, isPending } = useLogin({
    onSuccess: () => {
      toast.success("Login successful! Welcome back!");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error("Login failed. Please check your credentials.");
    },
  });

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner isLoading={isPending} />
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
          style={{ height: "100vh", paddingBottom: "150px" }}
        >
          <Card className="p-4 shadow rounded w-100">
            <div className="d-flex justify-content-center brand-lg">
              <IconLogo />
            </div>
            <SocialLogin
              isGoogleAvailable
              isLinkedinAvailable
              isGithubAvailable
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
};