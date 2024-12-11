import React from "react";
import "./FormAction.css";
import { Button } from "react-bootstrap";
import { IFormAction } from "./FormAction.types";

const FormAction = (props: IFormAction) => {
  const {
    isPrimaryDisabled,
    primaryLabel,
    secondaryLabel,
    onCancel,
    onSubmit,
  } = props;

  return (
    <div className="form-action">
      <Button type="button" className="cancel-btn" onClick={onCancel}>
        {secondaryLabel}
      </Button>
      <Button
        type="submit"
        className="submit-btn"
        disabled={isPrimaryDisabled}
        onClick={onSubmit}
      >
        {primaryLabel}
      </Button>
    </div>
  );
};

export default FormAction;
