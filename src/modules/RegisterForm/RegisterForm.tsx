import { FormLabel } from "@atoms/FormLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RegisterData } from "./RegisterForm.types";

import { Anchor } from "@atoms/Anchor";
import { Spinner } from "@atoms/Spinner";
import { IRegisterMutation, useRegister } from "@entities/Register";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { schema } from "./schema";

export const RegisterForm = ({
  termsOfServiceUrl,
}: {
  termsOfServiceUrl: string;
}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterData>({
    resolver: yupResolver(schema),
  });

  const { mutate: registerUser, isPending } = useRegister({
    onSuccess: () => {
      toast.success("Registration successful");
      navigate("/verify-email?email=" + watch("email"));
    },
    onError: () => {
      toast.error("Registration failed! Something went wrong");
    },
  });

  const onSubmit = async (data: RegisterData) => {
    if (isValid) {
      console.log("Data being sent to backend:", data);
      const jsonData: IRegisterMutation = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      };
      registerUser(jsonData);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-2">
        <Col xs={12} lg={6}>
          <Form.Group>
            <FormLabel>First Name</FormLabel>

            <Form.Control type="text" {...register("firstName")} />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
          </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
          <Form.Group>
            <FormLabel>Last Name</FormLabel>
            <Form.Control type="text" {...register("lastName")} />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <FormLabel>Email</FormLabel>
        <Form.Control type="email" {...register("email")} />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </Form.Group>

      <Form.Group className="mb-2">
        <FormLabel>Password</FormLabel>
        <Form.Control type="password" {...register("password")} />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <FormLabel>Confirm Password</FormLabel>
        <Form.Control type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}
      </Form.Group>

      <Form.Group className="d-flex align-items-center my-3">
        <FormLabel className="ms-2 d-flex align-items-center gap-1">
          By clicking on Sign up, you agree to the
          <Anchor className="p-0" href={termsOfServiceUrl}>
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
        <Link to="/login">Sign in</Link>
      </p>
      <Spinner isLoading={isPending} />
    </Form>
  );
};
