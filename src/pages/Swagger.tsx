import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerPage = () => {
  const swagger = {
    openapi: "3.0.1",
    info: {
      title: "OpenAPI definition",
      version: "v0",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
    paths: {
      "/open-api/account/change-password": {
        put: {
          tags: ["open-api-controller"],
          summary: "Change Password",
          description:
            "**Requires Client Id and Client Secret and Bearer Token**",
          operationId: "changePassword",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
            {
              name: "UserAuth",
              in: "header",
              description: "Bearer token for authentication",
              required: true,
              schema: {
                type: "string",
                example: "Bearer sytueryt34768763fjhg.....",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ChangePasswordDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
            {
              UserAuth: [],
            },
          ],
        },
      },
      "/open-api/account/verify-otp": {
        post: {
          tags: ["open-api-controller"],
          summary: "Verify the OTP for the forgot Password",
          description: "**Requires Client Id and Client Secret**",
          operationId: "verifyOtp",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/OtpDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
          ],
        },
      },
      "/open-api/account/social-sign-up": {
        post: {
          tags: ["open-api-controller"],
          summary: "Users Social Sign Up",
          description: "**Requires Client Id and Client Secret**",
          operationId: "socialSignUp",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignUpDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
          ],
        },
      },
      "/open-api/account/social-sign-in": {
        post: {
          tags: ["open-api-controller"],
          summary: "Social sign in",
          description: "**Requires Client Id and Client Secret**",
          operationId: "socialSignIn",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignInDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
          ],
        },
      },
      "/open-api/account/sign-up": {
        post: {
          tags: ["open-api-controller"],
          summary: "Sign Up",
          description: "**Requires Client Id and Client Secret**",
          operationId: "signUp",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignUpDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
          ],
        },
      },
      "/open-api/account/sign-in": {
        post: {
          tags: ["open-api-controller"],
          summary: "Sign In",
          description: "**Requires Client Id and Client Secret**",
          operationId: "signIn",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignInDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
          ],
        },
      },
      "/open-api/account/new-password": {
        post: {
          tags: ["open-api-controller"],
          summary: "New Password For forgot Password",
          description: "**Requires Client Id and Client Secret**",
          operationId: "newPassword",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/NewPasswordDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
          ],
        },
      },
      "/open-api/account/forgot-password": {
        post: {
          tags: ["open-api-controller"],
          summary: "forgot Password",
          description: "**Requires Client Id and Client Secret**",
          operationId: "forgotPassword",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ForgotPasswordDTO",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "OK",
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
          ],
        },
      },
      "/open-api/account/profile-details": {
        get: {
          tags: ["open-api-controller"],
          summary: "User Profile Details",
          description:
            "**Requires Client Id and Client Secret and Bearer Token**",
          operationId: "profileDetails",
          parameters: [
            {
              name: "X-Client-Id",
              in: "header",
              description: "Unique id provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "656752uyuyiu9308d",
              },
            },
            {
              name: "clientSecret",
              in: "header",
              description: "Unique Secret provided for your Organization",
              required: true,
              schema: {
                type: "string",
                example: "7487-hjfgfhjdg-34568",
              },
            },
            {
              name: "UserAuth",
              in: "header",
              description: "Bearer token for authentication",
              required: true,
              schema: {
                type: "string",
                example: "Bearer sytueryt34768763fjhg.....",
              },
            },
          ],
          responses: {
            "200": {
              description: "OK",
              content: {
                "*/*": {
                  schema: {
                    $ref: "#/components/schemas/ProfileDTO",
                  },
                },
              },
            },
          },
          security: [
            {
              "X-Client-Id": [],
            },
            {
              clientSecret: [],
            },
            {
              UserAuth: [],
            },
          ],
        },
      },
    },
    components: {
      schemas: {
        ChangePasswordDTO: {
          type: "object",
          properties: {
            newPassword: {
              type: "string",
            },
            oldPassword: {
              type: "string",
            },
            email: {
              type: "string",
            },
          },
        },
        OtpDTO: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
            otp: {
              type: "string",
            },
          },
        },
        SignUpDTO: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
            socialProvider: {
              type: "string",
            },
            socialId: {
              type: "string",
            },
            profilePicture: {
              type: "string",
            },
          },
        },
        SignInDTO: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
            socialId: {
              type: "string",
            },
            socialProvider: {
              type: "string",
            },
          },
        },
        NewPasswordDTO: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
            otp: {
              type: "string",
            },
            newPassword: {
              type: "string",
            },
          },
        },
        ForgotPasswordDTO: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
          },
        },
        ProfileDTO: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            email: {
              type: "string",
            },
            organizationId: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
          },
        },
      },
      securitySchemes: {
        UserAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        "X-Client-Id": {
          type: "apiKey",
          description: "X-Client-Id for the Organization Unique id !",
          name: "X-Client-Id",
          in: "header",
        },
        clientSecret: {
          type: "apiKey",
          description:
            "Client Secret is for the Identifying and Verifying the requests !",
          name: "clientSecret",
          in: "header",
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center"></div>
      {
        <div className="mt-6 w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
          <SwaggerUI spec={swagger} />
        </div>
      }
    </div>
  );
};

export default SwaggerPage;
