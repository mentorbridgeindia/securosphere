import { useState } from "react"; // Import useState
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { FormLabel } from "@atoms/FormLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ForgotPasswordSchema";
import { ForgotPasswordData } from "./ForgotPassword.types";

export const ForgotPasswordForm = () => {
  const [submitted, setSubmitted] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    console.log("Data being sent to backend:", data);

    try {
      const response = await axios.post(
        "http://localhost:8080/forgot-password",
        { email: data.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("A password reset link has been sent to your email.");
        setSubmitted(true); 
      } else {
        toast.error("Failed to send reset link. Please try again.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      toast.error(
        "Error sending reset link. Please check the server or your connection."
      );
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
    </Form>
  );
};
