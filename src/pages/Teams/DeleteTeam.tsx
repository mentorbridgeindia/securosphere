import { deleteData, TEAMS_ENDPOINT } from "@/api";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

export const DeleteTeam = ({
  show,
  handleClose,
  team,
}: {
  show: boolean;
  handleClose: () => void;
  team: any;
}) => {
  const url = TEAMS_ENDPOINT;
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async () => {
    setIsloading(true);

    if (team.id === "" || team.teamName === "") {
      setIsloading(false);
      return;
    }

    try {
      const response = (await deleteData(`${url}/${team.id}`)) as Response;
      if (response.ok) {
        toast.success("Team deleted successfully!");
        handleClose();
        window.location.reload();
      } else {
        throw new Error("Failed to delete team.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setIsloading(false);
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      handleClose={handleClose}
    >
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-100 text-center mt-1"
        >
          <h3 className="text-danger">Delete this Team !</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">
          Are You sure you want to Delete the Team{" "}
          <span className="text-info">{team.teamName}</span>
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          className="btn-danger ms-1 me-3"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Sending ..." : "Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
