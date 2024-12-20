import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Anchor } from "@ui/atoms/Anchor";
import axios from "axios";
import { toast } from "react-toastify";
import { LoginData } from "./Login.types";

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
        toast.success(" Login successful! Welcome back!");
      } else {
        toast.error(" Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(" Login failed. Please check the server or your connection.");
    }
  };
  

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row className="w-100">
        <Col
          lg={6}
          className="d-none d-lg-flex justify-content-center align-items-center"
        >
          <img
            src="image.jpg"
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "100%" }}
          />
        </Col>

        <Col
          lg={6}
          xs={12}
          fluid
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

              <div className="d-flex justify-content-center gap-3 my-3"></div>
              <h5 className="text-center my-3">Or</h5>

              <Row>
                <Col>
                  <Form.Group>
                    <FormLabel className="d-flex justify-content-start">
                      Email
                    </FormLabel>
                    <Form.Control type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-danger ml-3 d-flex justify-content-start">
                        {errors.email.message}
                      </p>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <FormLabel className="d-flex justify-content-start">
                      Password
                    </FormLabel>
                    <Form.Control type="password" {...register("password")} />
                    {errors.password && (
                      <p className="text-danger ml-3 d-flex justify-content-start">
                        {errors.password.message}
                      </p>
                    )}
                  </Form.Group>

                  <Anchor href="/forgot-password">Forgot Password?</Anchor>
                </Col>
              </Row>

              <Button type="submit" className="w-50 my-3">
                Login
              </Button>
              <p className="text-center">
                Don't have an account yet? <Anchor href="/">Sign up</Anchor>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
