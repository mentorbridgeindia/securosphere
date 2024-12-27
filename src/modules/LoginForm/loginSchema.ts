import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Please enter an email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(12, "Password must be below 12 characters")
    .required("Password is required"),
});
