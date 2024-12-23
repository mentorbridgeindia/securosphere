import React from "react";

import { FormInput } from "@ui/atoms/FormInput/index";
import { FormLabel } from "@ui/atoms/FormLabel/index";
import { Anchor } from "@ui/atoms/Anchor/index";
import { FormActionButtons } from "@ui/molecules/FormActionButtons";
import { StatusLabel } from "@ui/atoms/StatusLabel/index";
import { RoleLabel } from "@/ui/atoms/RoleLabel";
import AvatarComponent from "@/ui/atoms/AvatarComponent/AvatarComponent";
import StepOne from "@/ui/molecules/StepperComponent/StepOne";
import StepTwo from "@/ui/molecules/StepperComponent/StepTwo";
import StepThree from "@/ui/molecules/StepperComponent/StepThree";

const handleSubmit = () => {
  alert("Form Submitted!");
};

const handleCancel = () => {
  alert("Form Cancelled!");
};

const LoginForm = () => {
  const steps1 = [
    { component: StepOne, label: "Organization config" },
    { component: StepTwo, label: "Signin page preview" },
    { component: StepThree, label: "Domain details" },
  ];
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
          <StatusLabel type="primary">Work </StatusLabel>
          <StatusLabel type="secondary">Secondary </StatusLabel>
          <StatusLabel type="warning">Warning </StatusLabel>
          <StatusLabel type="success">Success </StatusLabel>
          <StatusLabel type="info">Info </StatusLabel>
          <StatusLabel type="danger">Danger </StatusLabel>
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
          <StatusLabel type="primary">Work </StatusLabel>
          <StatusLabel type="secondary">Secondary </StatusLabel>
          <StatusLabel type="warning">Warning </StatusLabel>
          <StatusLabel type="success">Success </StatusLabel>
          <StatusLabel type="info">Info </StatusLabel>
          <StatusLabel type="danger">Danger </StatusLabel>
        </div>

        <br />

        <h5>Role labels</h5>

        <div className="d-flex flex-column gap-2 align-items-center">
          <RoleLabel color="red">HR</RoleLabel>
          <RoleLabel color="blue">Developer</RoleLabel>
          <RoleLabel color="green">Marketing</RoleLabel>
          <RoleLabel color="yellow">Junior</RoleLabel>
          <RoleLabel color="gray">Senior</RoleLabel>
          <RoleLabel color="brown">User</RoleLabel>
        </div>
        <br />
        <div className="d-flex flex-column gap-2 align-items-center">
          <AvatarComponent
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
            onClick={() => alert("Avatar clicked!")}
            fallbackText="UA"
          />
          <AvatarComponent
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
            onClick={() => alert("Avatar clicked!")}
            fallbackText="UA"
          />
          <AvatarComponent
            fallbackText="JA"
            onClick={() => alert("Avatar clicked!")}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
