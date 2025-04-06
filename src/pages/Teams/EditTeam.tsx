import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { ITeamsEntity } from "@entities/Teams/Team.types";
import { TEAMS_ENDPOINT, updateData } from "@/api";
import { toast } from "react-toastify";

export const EditTeam = ({
  show,
  handleClose,
  team,
}: {
  show: boolean;
  handleClose: () => void;
  team: any;
}) => {
  const [newTeam, setNewTeam] = useState<ITeamsEntity>({
    id: "",
    teamName: "",
    teamDesc: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = TEAMS_ENDPOINT;

  useEffect(() => {
    if (team) {
      setNewTeam({
        id: team.id,
        teamName: team.teamName,
        teamDesc: team.teamDesc,
      });
    }
  }, [team]);

  const handleChange = (e: any) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    if (newTeam.teamName.trim() || newTeam.teamDesc.trim()) {
      setError("Fields cannot be empty or only spaces!");
      setIsLoading(false);
      return;
    }

    if (newTeam.teamName.length < 3) {
      setError("Team must be at least 3 characters long!");
      setIsLoading(false);
      return;
    }

    const specialCharRegex = /[^a-zA-Z0-9 ]/g;
    if (specialCharRegex.test(newTeam.teamName)) {
      setError("Teamname should not contain special characters!");
      setIsLoading(false);
      return;
    }

    if (
      newTeam.teamName === team.teamName &&
      newTeam.teamDesc === team.teamDesc
    ) {
      setError("No changes detected. Please modify fields before submitting!");
      setIsLoading(false);
      return;
    }

    try {
      await updateData(url + `/${newTeam.id}`, newTeam);
      toast.success("Team updated successfully!");
      handleClose();
      window.location.reload();
    } catch (err) {
      setError(`${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Team :{team.teamName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <div className="d-flex flex-column">
              <div className="d-flex">
                <input
                  type="text"
                  value={team.teamName}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter valid Team"
                  className={`form-control my-2 mt-2 ${
                    error ? "border-danger" : ""
                  }`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="teamName"
                />
              </div>
              <div className="d-flex my-2">
                <input
                  type="text"
                  value={team.teamDesc}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter the Details about Team"
                  className={`form-control my-2 mt-2 ${
                    error ? "border-danger" : ""
                  }`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="desc"
                />
              </div>
              {error && <p className="text-danger small fs-10">{error}</p>}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className=" d-flex justify-content-center">
        <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Sending..." : "Edit Team"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
