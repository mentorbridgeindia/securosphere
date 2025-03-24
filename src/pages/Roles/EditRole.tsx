import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { IRolesEntity } from "@/entities/Roles/Role.types";
import { ROLES_ENDPOINT, updateData } from "@/api";

export const EditRole = ({show,handleClose,role}:{show:boolean,handleClose:() => void,role:any}) => {

  const [newRole , setNewRole] = useState<IRolesEntity>({id:"",role:"",desc:""});
  const [error,setError] = useState("");
  const [isLoading,setIsLoading] =useState(false);

  const url = ROLES_ENDPOINT;
  console.log("Role from fr:",role);
  
  useEffect(()=>{
    if(role){ 
      setNewRole({id:role.id,role:role.roleName,desc:role.desc}); 
    }
  },[role]);

  const handleChange=(e:any)=>{
      setNewRole({...newRole,[e.target.name]:e.target.value});
  }

  const handleSubmit= async ()=>{

    setIsLoading(true);

    if(newRole.role.trim()==="" || newRole.desc.trim()==="")
    {
      setError("Fields cannot be empty or only spaces!");
      setIsLoading(false);
      return;
    }

    if (newRole.role.length < 3) {
      setError("Role must be at least 3 characters long!");
      setIsLoading(false);
      return;
    }

    const specialCharRegex = /[^a-zA-Z0-9 ]/g;
    if (specialCharRegex.test(newRole.role)) {
      setError("Role should not contain special characters!");
      setIsLoading(false);
      return;
    }

    if (newRole.role === role.role && newRole.desc === role.desc) {
      setError("No changes detected. Please modify fields before submitting!");
      setIsLoading(false);
      return;
    }

    try{
      console.log(role);
      const response =await updateData(url,newRole);
      console.log("New Role here : ",newRole);
    }catch(err)
    {
      setError(`${err}`);
    }finally{
      setIsLoading(false);
    }
  }


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Role :{role.roleName}</Modal.Title>
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
          {isLoading ? "Sending..." : "Edit Role"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
