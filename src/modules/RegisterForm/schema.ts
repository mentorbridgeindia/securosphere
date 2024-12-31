import * as yup from "yup";

export const schema = yup
  .object({
    id: yup.string().optional(),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z][A-Z]\d[@#$%]/, "Make a strong password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();
