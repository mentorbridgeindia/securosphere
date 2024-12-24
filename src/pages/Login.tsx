import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Anchor } from "@ui/atoms/Anchor";
import axios from "axios";
import { toast } from "react-toastify";
import { LoginData } from "./Login.types";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormActionButtons } from "@/ui/molecules/FormActionButtons";
import { FormLabel } from "@/ui/atoms/FormLabel";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Please enter an email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(12, "Password must be below 12 characters")
    .required("Password is required"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginData) => {
    console.log("Data being sent to backend:", data);
    const jsonData = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/signin",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response);
      if (response.status === 200) {
        toast.success("Login successful! Welcome back!");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please check the server or your connection.");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
    >
      <Row className="w-100">
        <Col
          lg={6}
          className="d-none d-lg-flex justify-content-center align-items-center"
        >
          <img
            src="loginpageimg.jpg"
            alt="Logo"
            className="img-fluid"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              width: "70%",
              maxHeight: "70%",
            }}
          />
        </Col>
        <Col
          lg={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh", paddingBottom: "150px" }}
        >
          <div
            className="p-4 shadow rounded w-100"
            style={{
              maxWidth: "70%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "180px",
            }}
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h4 className="text-center">Login</h4>

              <Row>
                <div className="d-flex justify-content-center gap-4 my-3">
                  <Button
                    variant="outline-primary"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.474 2.4 4.184c0 .694.52 1.248 1.327 1.248h.016zm4.992 8.212V9.359c0-.216.016-.432.08-.586.176-.432.576-.877 1.248-.877.88 0 1.231.662 1.231 1.633v3.865h2.401V9.208c0-2.392-1.28-3.504-2.985-3.504-1.408 0-2.048.784-2.392 1.337h.016V6.168H6.542c.032.569 0 7.225 0 7.225h2.401z" />
                    </svg>
                  </Button>
                </div>
              </Row>
              <h5 className="text-center">Or</h5>
              <Form.Group>
                <FormLabel>Email</FormLabel>
                <Form.Control
                  type="email"
                  {...register("email")}
                  isInvalid={!!errors.email}
                  placeholder="Enter your email"
                  style={{ height: "50px" }}
                />
                {errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.email.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <br />
              <Form.Group>
                <FormLabel>Password</FormLabel>
                <Form.Control
                  type="password"
                  {...register("password")}
                  isInvalid={!!errors.password}
                  placeholder="Enter your password"
                  style={{ height: "50px" }}
                />
                {errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.password.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <div className="text-end mt-3 ">
                <Anchor href="/forgot-password">Forgot Password?</Anchor>
              </div>

              <Button type="submit" className="w-50 my-3">
                Login
              </Button>

              <div className="text-center mt-2">
                Don't have an account? <Anchor href="/signup">Sign Up</Anchor>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
