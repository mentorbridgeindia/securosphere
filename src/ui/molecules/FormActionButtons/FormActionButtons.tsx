import { Button } from "react-bootstrap";
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
    <div className="form-action d-flex gap-3">
      <Button
        type="button"
        variant="outline-secondary"
        className="cancel-btn"
        onClick={onCancel}
      >
        {secondaryLabel}
      </Button>
      <Button
        type="submit"
        variant="primary"
        disabled={isPrimaryDisabled}
        onClick={onSubmit}
      >
        {primaryLabel}
      </Button>
    </div>
  );
};
