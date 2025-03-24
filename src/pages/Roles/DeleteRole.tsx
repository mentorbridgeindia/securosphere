import { deleteData, ROLES_ENDPOINT } from "@/api";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

export const DeleteRole = ({show,handleClose,role}:{show:boolean,handleClose: () => void,role:any}) => {

  const url = ROLES_ENDPOINT;
  const [isLoading,setIsloading] = useState(false);
  
  const handleSubmit=async ()=>{

    setIsloading(true);

    if(role.id=="" || role.roleName==""){
      return ; 
    }

    try {
      const response =await deleteData(url+`/${role.id}`);
      if(response)
      {
        handleClose();
        toast.success("Role Deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }finally{
      setIsloading(false);
    }

  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      handleClose={handleClose}
    >
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center mt-1">
          <h3 className="text-danger">Delete this Role !</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">Are You sure you want to Delete the Role <span className="text-info">{role.roleName}</span></h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Cancel</Button>
        <Button className="btn-danger ms-1 me-3" onClick={handleSubmit} disabled={isLoading}>{isLoading?"Sending ...":"Delete"}</Button>
      </Modal.Footer>
    </Modal>
  );
};
