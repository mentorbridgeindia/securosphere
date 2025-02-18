import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";


const SwaggerPage: React.FC = () => {
  const [showSwagger, setShowSwagger] = useState(false);

  const swagger =
    {
      "openapi": "3.0.1",
      "info": {
        "title": "OpenAPI definition",
        "version": "v0"
      },
      "servers": [
        {
          "url": "http://localhost:8080"
        }
      ],
      "paths": {
        "/organization/{id}": {
          "put": {
            "tags": [
              "organization-controller"
            ],
            "operationId": "updateOrganization",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OrganizationDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/open-api/account/change-password": {
          "put": {
            "tags": [
              "open-api-controller"
            ],
            "summary": "Users Sign Up",
            "description": "**Requires Client Id and Client Secret**",
            "operationId": "changePassword",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              },
              {
                "name": "UserAuth",
                "in": "header",
                "description": "Bearer token for authentication",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "Bearer sytueryt34768763fjhg....."
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChangePasswordDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            },
            "security": [
              {
                "clientId": []
              },
              {
                "clientSecret": []
              },
              {
                "UserAuth": []
              }
            ]
          }
        },
        "/auth/config": {
          "put": {
            "tags": [
              "auth-config-controller"
            ],
            "operationId": "updateAuthConfig",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthConfigDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/tp-client/changePassword": {
          "put": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "changePassword_1",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChangePasswordDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/changePassword": {
          "put": {
            "tags": [
              "account-controller"
            ],
            "summary": "Get all users",
            "description": "**Requires Bearer Token**",
            "operationId": "changePassword_2",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChangePasswordDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            },
            "security": [
              {
                "AdminAuth": []
              }
            ]
          }
        },
        "/open-api/account/verify-otp": {
          "post": {
            "tags": [
              "open-api-controller"
            ],
            "operationId": "verifyOtp",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OtpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/open-api/account/social-sign-up": {
          "post": {
            "tags": [
              "open-api-controller"
            ],
            "summary": "Users Sign Up",
            "description": "**Requires Client Id and Client Secret**",
            "operationId": "socialSignUp",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            },
            "security": [
              {
                "clientId": []
              },
              {
                "clientSecret": []
              }
            ]
          }
        },
        "/open-api/account/social-sign-in": {
          "post": {
            "tags": [
              "open-api-controller"
            ],
            "summary": "Users Sign Up",
            "description": "**Requires Client Id and Client Secret**",
            "operationId": "socialSignIn",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignInDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            },
            "security": [
              {
                "clientId": []
              },
              {
                "clientSecret": []
              }
            ]
          }
        },
        "/open-api/account/sign-up": {
          "post": {
            "tags": [
              "open-api-controller"
            ],
            "summary": "Users Sign Up",
            "description": "**Requires Client Id and Client Secret**",
            "operationId": "signUp",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            },
            "security": [
              {
                "clientId": []
              },
              {
                "clientSecret": []
              }
            ]
          }
        },
        "/open-api/account/sign-in": {
          "post": {
            "tags": [
              "open-api-controller"
            ],
            "summary": "Users Sign Up",
            "description": "**Requires Client Id and Client Secret**",
            "operationId": "signIn",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignInDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            },
            "security": [
              {
                "clientId": []
              },
              {
                "clientSecret": []
              }
            ]
          }
        },
        "/open-api/account/new-password": {
          "post": {
            "tags": [
              "open-api-controller"
            ],
            "operationId": "newPassword",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NewPasswordDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/open-api/account/forgot-password": {
          "post": {
            "tags": [
              "open-api-controller"
            ],
            "operationId": "forgotPassword",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ForgotPasswordDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/invite/individual": {
          "post": {
            "tags": [
              "invite-controller"
            ],
            "operationId": "inviteIndividualUser",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/account/tp-client/social-signup": {
          "post": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "doSubDomainSocialSignUp",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/tp-client/social-signin": {
          "post": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "doSubDomainSocialSignIn",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignInDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/tp-client/signup": {
          "post": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "doSubDomainSignUp",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/tp-client/signin": {
          "post": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "doSubDomainSignIn",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignInDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/tp-client/resetPassword": {
          "post": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "resetPassword",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetPasswordDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/tp-client/resend": {
          "post": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "resendOtp",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResendOtpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/tp-client/otp": {
          "post": {
            "tags": [
              "sub-domain-account-controller"
            ],
            "operationId": "validateOtp",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResendOtpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/social-signup": {
          "post": {
            "tags": [
              "account-controller"
            ],
            "operationId": "socialSignUp_1",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/account/social-signin": {
          "post": {
            "tags": [
              "account-controller"
            ],
            "operationId": "socialSignIn_1",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignInDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/account/signup": {
          "post": {
            "tags": [
              "account-controller"
            ],
            "operationId": "signUp_1",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/account/signin": {
          "post": {
            "tags": [
              "account-controller"
            ],
            "operationId": "signIn_1",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignInDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/account/resetPassword": {
          "post": {
            "tags": [
              "account-controller"
            ],
            "operationId": "resetPassword_1",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetPasswordDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/otp": {
          "post": {
            "tags": [
              "account-controller"
            ],
            "operationId": "checkOtp",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResendOtpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK"
              }
            }
          }
        },
        "/account/otp/resend": {
          "post": {
            "tags": [
              "account-controller"
            ],
            "operationId": "resendOtp_1",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResendOtpDTO"
                  }
                }
              },
              "required": true
            },
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/user-profile": {
          "get": {
            "tags": [
              "account-managing-controller"
            ],
            "summary": "Get all users",
            "description": "**Requires Bearer Token**",
            "operationId": "profileDetails",
            "parameters": [
              {
                "name": "Authorization",
                "in": "header",
                "description": "Bearer token for authentication",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "Bearer eyfsgsdfsdfjsdhbfsfsdf..."
                }
              }
            ],
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ProfileDTO"
                    }
                  }
                }
              }
            },
            "security": [
              {
                "AdminAuth": []
              }
            ]
          }
        },
        "/profile": {
          "get": {
            "tags": [
              "env-profile-controller"
            ],
            "operationId": "getActiveProfile",
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "/organization": {
          "get": {
            "tags": [
              "organization-controller"
            ],
            "operationId": "getOrganization",
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/OrganizationDTO"
                    }
                  }
                }
              }
            }
          }
        },
        "/organization/info": {
          "get": {
            "tags": [
              "organization-controller"
            ],
            "description": "**Requires Bearer Token**",
            "operationId": "getOrganizationInfo",
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/OrganizationInfoDTO"
                    }
                  }
                }
              }
            },
            "security": [
              {
                "AdminAuth": []
              }
            ]
          }
        },
        "/organization/allOrgs": {
          "get": {
            "tags": [
              "organization-controller"
            ],
            "operationId": "getAllOrganizations",
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/OrganizationEntity"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/open-api/account/profile-details": {
          "get": {
            "tags": [
              "open-api-controller"
            ],
            "summary": "Users Sign Up",
            "description": "**Requires Client Id and Client Secret**",
            "operationId": "profileDetails_1",
            "parameters": [
              {
                "name": "ClientId",
                "in": "header",
                "description": "Unique id provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "656752uyuyiu9308d"
                }
              },
              {
                "name": "ClientSecret",
                "in": "header",
                "description": "Unique Secret provided for your Organization",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "7487-hjfgfhjdg-34568"
                }
              },
              {
                "name": "UserAuth",
                "in": "header",
                "description": "Bearer token for authentication",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "Bearer sytueryt34768763fjhg....."
                }
              }
            ],
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ProfileDTO"
                    }
                  }
                }
              }
            },
            "security": [
              {
                "clientId": []
              },
              {
                "clientSecret": []
              },
              {
                "UserAuth": []
              }
            ]
          }
        },
        "/init": {
          "get": {
            "tags": [
              "domain-controller"
            ],
            "operationId": "init",
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/InitDTO"
                    }
                  }
                }
              }
            }
          }
        },
        "/domain/{subDomain}": {
          "get": {
            "tags": [
              "domain-controller"
            ],
            "operationId": "checkIfDomainExists",
            "parameters": [
              {
                "name": "subDomain",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/auth/userinfo": {
          "get": {
            "tags": [
              "o-auth-2-login-controller"
            ],
            "operationId": "getUserInfo",
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/account/users": {
          "get": {
            "tags": [
              "account-controller"
            ],
            "summary": "Get all users",
            "description": "**Requires Bearer Token**",
            "operationId": "getOrganizationUsers",
            "parameters": [
              {
                "name": "Authorization",
                "in": "header",
                "description": "Bearer token for authentication",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "Bearer eyfsgsdfsdfjsdhbfsfsdf..."
                }
              }
            ],
            "responses": {
              "200": {
                "description": "OK",
                "content": {
                  "*/*": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserManagementDTO"
                      }
                    }
                  }
                }
              }
            },
            "security": [
              {
                "AdminAuth": []
              }
            ]
          }
        }
      },
      "components": {
        "schemas": {
          "OrganizationDTO": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "createdBy": {
                "type": "string"
              },
              "organizationName": {
                "type": "string"
              },
              "subDomain": {
                "type": "string"
              },
              "authorizedDomains": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "callbackUrl": {
                "type": "string"
              },
              "website": {
                "type": "string"
              },
              "logo": {
                "type": "object",
                "properties": {
                  "binaryStream": {
                    "type": "object"
                  }
                }
              },
              "applicationName": {
                "type": "string"
              },
              "termsOfServiceUrl": {
                "type": "string"
              },
              "socialProviders": {
                "$ref": "#/components/schemas/SocialProviderDTO"
              },
              "clientSecret": {
                "type": "string"
              }
            }
          },
          "SocialProviderDTO": {
            "type": "object",
            "properties": {
              "email": {
                "type": "boolean"
              },
              "google": {
                "type": "boolean"
              },
              "apple": {
                "type": "boolean"
              },
              "github": {
                "type": "boolean"
              },
              "linkedIn": {
                "type": "boolean"
              },
              "twitter": {
                "type": "boolean"
              },
              "facebook": {
                "type": "boolean"
              },
              "microsoft": {
                "type": "boolean"
              }
            }
          },
          "ChangePasswordDTO": {
            "type": "object",
            "properties": {
              "newPassword": {
                "type": "string"
              },
              "oldPassword": {
                "type": "string"
              },
              "email": {
                "type": "string"
              }
            }
          },
          "AuthConfigDTO": {
            "type": "object",
            "properties": {
              "subDomain": {
                "type": "string"
              },
              "authorizedDomains": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "callbackUrl": {
                "type": "string"
              },
              "website": {
                "type": "string"
              },
              "logo": {
                "type": "object",
                "properties": {
                  "binaryStream": {
                    "type": "object"
                  }
                }
              },
              "applicationName": {
                "type": "string"
              },
              "termsOfServiceUrl": {
                "type": "string"
              },
              "socialProviders": {
                "$ref": "#/components/schemas/SocialProviderDTO"
              },
              "organizationName": {
                "type": "string"
              }
            }
          },
          "ErrorResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string"
              },
              "level": {
                "type": "string"
              },
              "errorCode": {
                "type": "string"
              }
            }
          },
          "OtpDTO": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              },
              "otp": {
                "type": "string"
              }
            }
          },
          "SignUpDTO": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "password": {
                "type": "string"
              },
              "socialProvider": {
                "type": "string"
              },
              "socialId": {
                "type": "string"
              },
              "profilePicture": {
                "type": "string"
              }
            }
          },
          "SignInDTO": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              },
              "password": {
                "type": "string"
              },
              "socialId": {
                "type": "string"
              },
              "socialProvider": {
                "type": "string"
              }
            }
          },
          "NewPasswordDTO": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              },
              "otp": {
                "type": "string"
              },
              "newPassword": {
                "type": "string"
              }
            }
          },
          "ForgotPasswordDTO": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              }
            }
          },
          "ResetPasswordDTO": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              }
            }
          },
          "ResendOtpDTO": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              },
              "otp": {
                "type": "string"
              }
            }
          },
          "ProfileDTO": {
            "type": "object",
            "properties": {
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "organizationId": {
                "type": "string"
              },
              "createdAt": {
                "type": "string"
              }
            }
          },
          "OrganizationInfoDTO": {
            "type": "object",
            "properties": {
              "subDomain": {
                "type": "string"
              },
              "publicKey": {
                "type": "string"
              }
            }
          },
          "OrganizationEntity": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "createdBy": {
                "type": "string"
              },
              "organizationName": {
                "type": "string"
              },
              "authorizedDomains": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "subDomain": {
                "type": "string"
              },
              "callbackUrl": {
                "type": "string"
              },
              "clientSecret": {
                "type": "string"
              },
              "website": {
                "type": "string"
              },
              "privateKey": {
                "type": "string"
              },
              "publicKey": {
                "type": "string"
              },
              "dbName": {
                "type": "string"
              },
              "termsOfServiceUrl": {
                "type": "string"
              },
              "logo": {
                "type": "object",
                "properties": {
                  "binaryStream": {
                    "type": "object"
                  }
                }
              },
              "applicationName": {
                "type": "string"
              },
              "socialProviders": {
                "$ref": "#/components/schemas/SocialProviderDTO"
              }
            }
          },
          "InitDTO": {
            "type": "object",
            "properties": {
              "organizationName": {
                "type": "string"
              },
              "termsOfServiceUrl": {
                "type": "string"
              },
              "logo": {
                "type": "object",
                "properties": {
                  "binaryStream": {
                    "type": "object"
                  }
                }
              },
              "applicationName": {
                "type": "string"
              },
              "socialProviders": {
                "$ref": "#/components/schemas/SocialProviderDTO"
              }
            }
          },
          "UserManagementDTO": {
            "type": "object",
            "properties": {
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "organizationId": {
                "type": "string"
              },
              "status": {
                "type": "string"
              },
              "profilePicture": {
                "type": "string"
              }
            }
          }
        },
        "securitySchemes": {
          "AdminAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT"
          },
          "UserAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT"
          },
          "X-Client-Id": {
            "type": "apiKey",
            "description": "X-Client-Id for the Organization Unique id !",
            "name": "X-Client-Id",
            "in": "header"
          },
          "clientSecret": {
            "type": "apiKey",
            "description": "Client Secret is for the Identifying and Verifying the requests !",
            "name": "clientSecret",
            "in": "header"
          }
        }
      }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center">
      <button
  onClick={() => setShowSwagger(true)}
  style={{
    backgroundColor: "#002851",
    color: "white",
    border: "2px solid #002851",
    borderRadius: "10px",
    padding: "8px 16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  }}
>
  Show Swagger Docs
</button>

      </div>
      {showSwagger && (
        <div className="mt-6 w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
          <SwaggerUI spec={swagger} />
        </div>
      )}
    </div>
  );
};

export default SwaggerPage;


