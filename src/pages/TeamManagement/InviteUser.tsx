import { ReactComponent as IconLogo } from "@assets/icons/logo.svg";
import { Button, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {ReactComponent as IconPlus} from '@assets/icons/icon-plus.svg'
import {ReactComponent as IconTrash} from '@assets/icons/icon-trash.svg'
import{ReactComponent as IconEdit}from '@assets/icons/icon-edit.svg'
import Alert from 'react-bootstrap/Alert';

  


export const InviteUser = ({show, handleClose}: {show: boolean, handleClose: () => void}) => {
    const [emailList, setEmailList] = useState([""]);
    const [errors, setErrors] = useState<string[]>([]);

    const handleAdd = () => {
        if(emailList.length < 5 ){
            setEmailList([...emailList, ""]);
            setErrors([...errors, ""]);
        }
    };
    const handleRemove = (removedEmail: string) => {
      console.log(emailList.filter(email => email !== removedEmail));
        setEmailList(emailList.filter(email => email !== removedEmail));
    }
    
    const [validated, setValidated] = useState(false);

    const validateEmail = (email: string) => {
      // TODO: Check email with regex
      
    
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      
    }

    const handleEmailChange = (email: string, index: number) => {
        setEmailList([...emailList.slice(0, index), email, ...emailList.slice(index + 1)]);
    }

    const handleSubmit = () => {
      const newErrors = new Array(emailList.length).fill("");

      
      const emailSet = new Set();
      emailList.forEach((email, index) => {
          if (emailSet.has(email)) {
              newErrors[index] = "Duplicate emails are not allowed.";
          } else {
              emailSet.add(email);
          }
      });

     
      emailList.forEach((email, index) => {
          if (!validateEmail(email)) {
              newErrors[index] = "Please enter a valid email address.";
          }
      });

      setErrors(newErrors);

      if (newErrors.some(error => error !== "")) {
          return; 
      }

      // TODO: API Call
  };
  return (

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite user to your Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
    <div className="mb-3">
        {emailList.map((email, index) => (
            <div className="d-flex flex-column" key={index}>
                <div className="d-flex">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value, index)}
                        placeholder="Enter valid Email"
                        className={`form-control my-2 mt-2 ${errors[index] ? "border-danger" : ""}`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    {emailList.length > 1 && (
                        <Button className="btn btn-light p-1 border-0" onClick={() => handleRemove(email)}>
                            <IconTrash />
                        </Button>
                    )}
                    {validateEmail(email) && emailList.length - 1 === index && index !== 4 && (
                        <Button className="btn btn-light p-1 border-0" onClick={handleAdd}>
                            <IconPlus />
                        </Button>
                    )}
                </div>
                {errors[index] && <p className="text-danger small fs-10">{errors[index]}</p>}
            </div>
        ))}
    </div>
</form>
        </Modal.Body>
        <Modal.Footer className=' d-flex justify-content-center'>
          <Button variant="secondary"  onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Invite
          </Button>
        </Modal.Footer>
      </Modal>
);
}   



