import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

