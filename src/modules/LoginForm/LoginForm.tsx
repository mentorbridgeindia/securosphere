import { ILoginMutation } from "@/entities/Login";
import { FormLabel } from "@atoms/FormLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginData } from "./LoginForm.types";
import { schema } from "./loginSchema";

export const LoginForm = ({
  loginUser,
}: {
  loginUser: (data: ILoginMutation) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginData) => {
    if (isValid) {
      console.log("Data being sent to backend:", data);
      const jsonData: ILoginMutation = {
        email: data.email,
        password: data.password,
      };

      loginUser(jsonData);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <FormLabel>Email</FormLabel>
        <Form.Control
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
