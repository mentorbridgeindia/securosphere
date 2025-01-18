import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "./ChangePasswordSchema";
import axios from "axios";
import { ChangePasswordData } from "./ChangePassword.types";

export const ChangePasswordForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordData>({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordData) => {
    console.log("Data being sent to backend:", data);

    try {
      const response = await axios.post(
        "http://localhost:8080/change-password",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password changed successfully!");
        setSubmitted(true);
      } else {
        toast.error("Failed to change password. Please try again.");
      }
    } catch (error) {
      console.error("Error during password change:", error);
      toast.error("Error changing password. Please check the server or your connection.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          type="password"
          {...register("currentPassword")}
          isInvalid={!!errors.currentPassword}
          placeholder="Enter your current password"
        />
        {errors.currentPassword && (
          <Form.Control.Feedback type="invalid">
            {errors.currentPassword.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          {...register("newPassword")}
          isInvalid={!!errors.newPassword}
          placeholder="Enter your new password"/>
        {errors.newPassword && (
          <Form.Control.Feedback type="invalid">
            {errors.newPassword.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control
          type="password"
          {...register("confirmPassword")}
          isInvalid={!!errors.confirmPassword}
          placeholder="Confirm your new password"
        />
        {errors.confirmPassword && (
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <div className="center mt-4">
        <Button variant="primary" type="submit" className="w-50">
          Submit
        </Button>
      </div>

      {submitted && (
        <div className="mt-3 text-center text-success">
          <p>Your password has been changed successfully!</p>
        </div>
      )}
    </Form>
  );
};
