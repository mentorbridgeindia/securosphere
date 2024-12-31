import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { ResetPasswordData } from "./ResetPasswordForm.types";
import { schema } from "./resetPasswordSchema";
import { toast } from "react-toastify";
import axios from "axios";

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ResetPasswordData) => {
    console.log("Data being sent to backend:", data);

    try {
      const response = await axios.post(
        "http://localhost:8080/reset-password",
        {
          newPassword: data.newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successful! You can now log in.");
      } else {
        toast.error("Password reset failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      toast.error("Password reset failed. Please check your connection.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>New Password</Form.Label>
        <Form.Control
          className="mt-2"
          type="password"
          {...register("newPassword")}
          isInvalid={!!errors.newPassword}
          placeholder="Enter new password"
        />
        {errors.newPassword && (
          <Form.Control.Feedback type="invalid">
            {errors.newPassword.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Re-enter New Password</Form.Label>
        <Form.Control
          className="mt-2"
          type="password"
          {...register("confirmPassword")}
          isInvalid={!!errors.confirmPassword}
          placeholder="Re-enter new password"
        />
        {errors.confirmPassword && (
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <div className="center mt-3">
        <Button variant="primary" type="submit" className="w-50 my-3">
          Reset Password
        </Button>
      </div>
    </Form>
  );
};
