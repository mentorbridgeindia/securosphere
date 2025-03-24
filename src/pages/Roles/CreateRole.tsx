import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { IRolesEntity } from "@/entities/Roles/Role.types";
import { ROLES_ENDPOINT, sendData } from "@/api";
import { toast } from "react-toastify";

export const CreateRole = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  const url = ROLES_ENDPOINT;

  const [role, setRole] = useState<IRolesEntity>({
    id: "",
    role: "",
    desc: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setRole({ ...role, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (role.role == "" || role.desc == "") {
      setError("Please Enter Valid Credentials");
      return;
    }

    try {
      const response = await sendData(url, role);
      console.log("Bro Response : ",response);
      if (response) {
        console.log("REsponse is :",response);
        toast.success("Roles Saved Successfully");
        handleClose();
        setRole({ id: "", role: "", desc: "" });
        setError("");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }finally{
        setIsLoading(false);
    }

    console.log("Datas is now : ",role);
    
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Role for Your Organization</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <div className="d-flex flex-column">
              <div className="d-flex">
                <input
                  type="text"
                  value={role.role}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter valid Role"
                  className={`form-control my-2 mt-2 ${
                    error ? "border-danger" : ""
                  }`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="role"
                />
              </div>
              <div className="d-flex my-2">
                <input
                  type="text"
                  value={role.desc}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter the Details about Role"
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
          {isLoading ? "Sending..." : "Create Role"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
