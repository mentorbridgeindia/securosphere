import React from "react";

import { FormActionButtons } from "../ui/molecules/FormActionButtons";
import { FormInput } from "../ui/atoms/FormInput/index";
import { FormLabel } from "../ui/atoms/FormLabel/index";
import { Anchor } from "../ui/atoms/Anchor/index";

const handleSubmit = () => {
  alert("Form Submitted!");
};

const handleCancel = () => {
  alert("Form Cancelled!");
};

const LoginForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-10 mt-5 ">
      <form className="p-4 rounded shadow bg-white" style={{ width: "300px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-3">
          <FormLabel>Email</FormLabel>
          <FormInput id="email" type="email" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="d-flex justify-content-between mb-3">
          <Anchor href="/forgot-password">Forgot Password?</Anchor>
        </div>

        <FormActionButtons
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          primaryLabel={"Submit"}
          secondaryLabel={"Cancel"}
        />
      </form>
    </div>
  );
};

export default LoginForm;
