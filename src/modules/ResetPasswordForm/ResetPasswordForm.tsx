import { Spinner } from "@atoms/Spinner";
import { useResetPassword } from "@entities/Password";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormActionButtons } from "@molecules/FormActionButtons";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ResetPasswordData } from "./ResetPasswordForm.types";
import { schema } from "./resetPasswordSchema";

export const ResetPasswordForm = ({ otp }: { otp: string }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: yupResolver(schema),
  });

  const { mutate: resetPassword, isPending: isResettingPassword } =
    useResetPassword({
      onSuccess: () => {
        toast.success("Password reset successful! You can now log in.");
        navigate("/login");
      },
      onError: (error: any) => {
        toast.error(
          error.response?.data?.message ||
            "Password reset failed. Please check your connection."
        );
      },
    });

  if (!email) {
    return null;
  }

  const onSubmit = async (data: ResetPasswordData) => {
    console.log("Data being sent to backend:", data);
    resetPassword({
      newPassword: data.newPassword,
      otp,
      email,
    });
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={12} lg={8}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
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

          <div className="center mt-5">
            <FormActionButtons
              secondaryLabel="Cancel"
              primaryLabel="Reset Password"
              onCancel={() => navigate("/login")}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </Form>
      </Col>
      <Spinner isLoading={isResettingPassword} />
    </Row>
  );
};
