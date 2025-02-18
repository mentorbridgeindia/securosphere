import * as yup from "yup";

export const loginCallbackSchema = yup.object({
  subDomain: yup
    .string()
    .required("Sub Domain is required")
    .max(10, "Sub Domain must be less than 10 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Sub Domain is invalid"),
  orgName: yup
    .string()
    .required("Organization Name is required")
    .max(70, "Organization Name must be less than 70 characters")
    .matches(
      /^[\w\s!@#$%^&*()_+={}\\[\]:;"'<>,.?\\-]*$/,
      "Organization Name is invalid"
    ),
  website: yup
    .string()
    .required("Organization Website is required")
    .url("Organization Website is invalid")
    .max(255, "Organization Website must be less than 255 characters"),
  orgLogo: yup.string(),
  authorizedOrigins: yup
    .array(
      yup
        .string()
        .max(255, "Authorized Origin must be less than 255 characters")
        .matches(/^https?:\/\//, "Authorized Origin must be a valid URL")
    )
    .required("Authorized Origins is required")
    .min(1, "Authorized Origins is required")
    .test("is-valid-url", "Authorized Origins is invalid", (origins) =>
      origins.every(
        (origin) =>
          !origin || /^https?:\/\//.test(origin) || origin === "localhost"
      )
    ),
  callbackUrl: yup
    .string()
    .required("Callback URL is required")
    .test(
      "is-localhost-or-url",
      "Callback URL must be a valid URL or localhost",
      (value) => {
        return (
          value.startsWith("http://localhost:") || /^https?:\/\//.test(value)
        );
      }
    )
    .max(255, "Callback URL must be less than 255 characters"),
  termsOfServiceUrl: yup
    .string()
    .required("Terms of Service URL is required")
    .url("Terms of Service URL is invalid")
    .max(255, "Terms of Service URL must be less than 255 characters"),
});
