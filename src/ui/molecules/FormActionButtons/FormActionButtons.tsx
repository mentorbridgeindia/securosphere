import { Button } from "react-bootstrap";
import "./FormActionButtons.scss";
import { IFormActionButtons } from "./FormActionButtons.types";

export const FormActionButtons = (props: IFormActionButtons) => {
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
