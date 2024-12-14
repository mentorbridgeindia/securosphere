import React from "react";

import { FormActionButtons } from "../ui/molecules/FormActionButtons";
import { FormInput } from "../ui/atoms/FormInput/index";
import { FormLabel } from "../ui/atoms/FormLabel/index";
import { Anchor } from "../ui/atoms/Anchor/index";
import { StatusLabel } from "../ui/atoms/StatusLabel/index";
import { RoleLabel } from "@/ui/atoms/RoleLabel";

const handleSubmit = () => {
  alert("Form Submitted!");
};

const handleCancel = () => {
  alert("Form Cancelled!");
};

const LoginForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-10 mt-5">
      <form className="p-4 rounded shadow bg-white" style={{ width: "300px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-2">
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
        <br />
        <h5>Status Labels </h5>

        <div className="d-flex flex-column gap-2 align-items-center">
          <StatusLabel type="primary">Primary </StatusLabel>
          <StatusLabel type="secondary">Secondary </StatusLabel>
          <StatusLabel type="warning">Warning </StatusLabel>
          <StatusLabel type="success">Success </StatusLabel>
          <StatusLabel type="info">Info </StatusLabel>
          <StatusLabel type="danger">Danger </StatusLabel>
        </div>

        <br />

        <h5>Role labels</h5>

        <div className="d-flex flex-column gap-2 align-items-center">
          <RoleLabel type="admin">HR</RoleLabel>
          <RoleLabel type="developer">Developer</RoleLabel>
          <RoleLabel type="tester">Marketing</RoleLabel>
          <RoleLabel type="junior">Junior</RoleLabel>
          <RoleLabel type="senior">Senior</RoleLabel>
          <RoleLabel type="user">User</RoleLabel>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
