import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
});
