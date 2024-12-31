import { FormLabel } from "@atoms/FormLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterData } from "./RegisterForm.types";

import { Anchor } from "@atoms/Anchor";
import { schema } from "./schema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterData) => {
    console.log("Data being sent to backend:", data);
    const jsonData = {
      fname: data.firstName,
      lname: data.lastName,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response); // Log the response to check
      if (response.status === 200) {
        toast.success("Registration successful");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error); // Log error for debugging
      toast.error("Registration failed. Check the server.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-2">
        <Col xs={12} lg={6}>
          <Form.Group>
            <FormLabel>First Name</FormLabel>

            <Form.Control
              className="mt-2"
              type="text"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
          </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
          <Form.Group>
            <FormLabel>Last Name</FormLabel>
            <Form.Control
              className="mt-2"
              type="text"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <FormLabel>Email</FormLabel>
        <Form.Control className="mt-2" type="email" {...register("email")} />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </Form.Group>

      <Form.Group className="mb-2">
        <FormLabel>Password</FormLabel>
        <Form.Control
          className="mt-2"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <FormLabel>Confirm Password</FormLabel>
        <Form.Control
          className="mt-2"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}
      </Form.Group>

      <Form.Group className="d-flex align-items-center my-3">
        <Form.Check type="checkbox" />
        <FormLabel className="ms-2 d-flex align-items-center gap-1">
          I agree to the
          <Anchor className="p-0" href="/">
            Terms and Conditions
          </Anchor>
        </FormLabel>
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button type="submit" className="w-50 text-center">
          Sign up
        </Button>
      </div>
      <p className="mt-3 d-flex align-items-center gap-1 justify-content-center">
        Have an account already?
        <Anchor href="/login">Sign in</Anchor>
      </p>
    </Form>
  );
};
