import { FormLabel } from "@atoms/FormLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginData } from "./LoginForm.types";
import { schema } from "./loginSchema";

export const LoginForm = () => {
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <FormLabel>Email</FormLabel>
        <Form.Control
          className="mt-2"
          type="email"
          {...register("email")}
          isInvalid={!!errors.email}
          placeholder="Enter your email"
        />
        {errors.email && (
          <Form.Control.Feedback type="invalid">
            {errors.email.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <br />
      <Form.Group>
        <FormLabel className="d-flex justify-content-between">
          Password
          <Link to="/forgot-password">Forgot Password?</Link>
        </FormLabel>
        <Form.Control
          className="mt-2"
          type="password"
          {...register("password")}
          isInvalid={!!errors.password}
          placeholder="Enter your password"
        />
        {errors.password && (
          <Form.Control.Feedback type="invalid">
            {errors.password.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <div className="center mt-3">
        <Button variant="primary" type="submit" className="w-50 my-3">
          Login
        </Button>
      </div>

      <div className="text-center mt-2 fs-7">
        Don't have an account?&nbsp;
        <Link to="/register">Sign Up</Link>
      </div>
    </Form>
  );
};
