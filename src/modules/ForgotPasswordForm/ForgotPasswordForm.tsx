import { FormLabel } from "@atoms/FormLabel";
import { Spinner } from "@atoms/Spinner";
import { useForgotPassword } from "@entities/Password/useForgotPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react"; // Import useState
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ForgotPasswordData } from "./ForgotPassword.types";
import { schema } from "./ForgotPasswordSchema";

export const ForgotPasswordForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: yupResolver(schema),
  });

  const { mutate: submitForgotPassword, isPending } = useForgotPassword({
    onSuccess: () => {
      toast.success("A password reset link has been sent to your email.");
      setSubmitted(true);
    },
    onError: () => {
      toast.error("Error sending reset link. Please try again.");
    },
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    submitForgotPassword(data);
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

      <div className="center mt-3">
        <Button variant="primary" type="submit" className="w-50 my-3">
          Submit
        </Button>
      </div>

      {submitted && (
        <div className="mt-3 text-center text-success">
          <p>
            A password reset link has been sent to your email. Please check your
            inbox!
          </p>
        </div>
      )}

      <Spinner isLoading={isPending} />
    </Form>
  );
};
