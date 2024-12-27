import { Anchor } from "@atoms/Anchor/index";
import AvatarComponent from "@atoms/AvatarComponent/AvatarComponent";
import { FormInput } from "@atoms/FormInput/index";
import { FormLabel } from "@atoms/FormLabel/index";
import { RoleLabel } from "@atoms/RoleLabel";
import { StatusLabel } from "@atoms/StatusLabel/index";
import { LabelType } from "@atoms/StatusLabel/StatusLable.types";
import { FormActionButtons } from "@molecules/FormActionButtons";
import StepOne from "@molecules/StepperComponent/StepOne";
import StepThree from "@molecules/StepperComponent/StepThree";
import StepTwo from "@molecules/StepperComponent/StepTwo";

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

  const statusLabels = [
    { type: "primary", label: "Work" },
    { type: "secondary", label: "Secondary" },
    { type: "warning", label: "Warning" },
    { type: "success", label: "Success" },
    { type: "info", label: "Info" },
    { type: "danger", label: "Danger" },
  ];

  return (
    <div className="d-flex flex-column justify-content-start align-items-start vh-10 mt-5">
      <h5 className="float-start">Status Labels </h5>
      <br />

      <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
        {statusLabels.map((status) => (
          <StatusLabel key={status.type} type={status.type as LabelType}>
            {status.label}
          </StatusLabel>
        ))}
      </div>

      <br />

      <h5 className="float-start">Role labels</h5>
      <br />

      <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
        <RoleLabel color="red">HR</RoleLabel>
        <RoleLabel color="blue">Developer</RoleLabel>
        <RoleLabel color="green">Marketing</RoleLabel>
        <RoleLabel color="yellow">Junior</RoleLabel>
        <RoleLabel color="gray">Senior</RoleLabel>
        <RoleLabel color="brown">User</RoleLabel>
      </div>
      <br />
      <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
        <h5 className="float-start">Avatars</h5>
        <br />
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
        <FormActionButtons
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          primaryLabel={"Submit"}
          secondaryLabel={"Cancel"}
        />
        <br />
      </div>
    </div>
  );
};

export default LoginForm;
