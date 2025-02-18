import { Spinner } from "@atoms/Spinner";
import { useChangePassword } from "@entities/Password";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormActionButtons } from "@molecules/FormActionButtons";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ChangePasswordData } from "./ChangePassword.types";
import { schema } from "./changePasswordSchema";

export const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordData>({
    resolver: yupResolver(schema),
  });

  const { mutate: changePassword, isPending: isChangingPassword } =
    useChangePassword({
      onSuccess: () => {
        toast.success("Password changed successfully! You can now log in.");
        navigate("/login");
      },
      onError: (error: any) => {
        toast.error(
          error.response?.data?.message ||
            "Password change failed. Please check your connection."
        );
      },
    });

  const onSubmit = async (data: ChangePasswordData) => {
    console.log("Data being sent to backend:", data);
    changePassword(data);
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={12} lg={8}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              {...register("currentPassword")}
              isInvalid={!!errors.currentPassword}
              placeholder="Enter current password"
            />
            {errors.currentPassword && (
              <Form.Control.Feedback type="invalid">
                {errors.currentPassword.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <br />
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
              primaryLabel="Change Password"
              onCancel={() => navigate("/")}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </Form>
      </Col>
      <Spinner isLoading={isChangingPassword} />
    </Row>
  );
};
