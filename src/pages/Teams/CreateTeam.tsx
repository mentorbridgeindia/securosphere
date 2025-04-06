import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { ITeamsEntity } from "@/entities/Teams/Team.types";
import { TEAMS_ENDPOINT, sendData } from "@/api";
import { toast } from "react-toastify";
import { set } from "react-hook-form";

export const CreateTeam = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  const url = TEAMS_ENDPOINT;

  const [team, setTeam] = useState<ITeamsEntity>({
    id: "",
    teamName: "",
    teamDesc: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (team.teamName == "" || team.teamDesc == "") {
      setError("Please Enter Valid Credentials");
      return;
    }

    try {
      const response = await sendData(url, team);
      console.log("Bro Response : ", response);
      if (response) {
        console.log("REsponse is :", response);
        toast.success("Team Saved Successfully");
        handleClose();
        setTeam({ id: "", teamName: "", teamDesc: "" });
        setError("");
      }
    } catch (err) {
      setError("Something went wrong!");
      console.error("Error while creating team:", err);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }

    console.log("Datas is now : ", team);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Team for Your Organization</Modal.Title>
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
                  placeholder="Enter Team name"
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
                  name="teamDesc"
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
          {isLoading ? "Sending..." : "Create Team"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
