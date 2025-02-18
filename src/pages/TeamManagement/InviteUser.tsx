import { ReactComponent as IconLogo } from "@assets/icons/logo.svg";
import { Button, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {ReactComponent as IconPlus} from '@assets/icons/icon-plus.svg'
import {ReactComponent as IconTrash} from '@assets/icons/icon-trash.svg'
import{ReactComponent as IconEdit}from '@assets/icons/icon-edit.svg'
import Alert from 'react-bootstrap/Alert';
import { toast } from 'react-toastify';
import { sendData } from '@api/Post/sendData';


 const USERS_ENDPOINT = '/api/users/invite'; 

interface InviteUserProps {
    show: boolean;
    handleClose: () => void;
}
  


export const InviteUser = ({show, handleClose}: {show: boolean, handleClose: () => void}) => {
    const [emailList, setEmailList] = useState([""]);
    const [errors, setErrors] = useState<string[]>([]);
    const[showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleAdd = () => {
        if(emailList.length < 5 ){
            setEmailList([...emailList, ""]);
            setErrors([...errors, ""]);
        }
    };
    const handleRemove = (index: number) => {
      setEmailList(emailList.filter((_, i) => i !== index));
      setErrors(errors.filter((_, i) => i !== index));
  };
  
    
  
    const [validated, setValidated] = useState(false);

    const validateEmail = (email: string) => {
      // TODO: Check email with regex
      
    
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      
    }

    const handleEmailChange = (email: string, index: number) => {
        setEmailList([...emailList.slice(0, index), email, ...emailList.slice(index + 1)]);
    }

    const handleSubmit = async () => {
        setIsLoading(true);
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
      try {
        // Filter out empty emails
        const validEmails = emailList.filter(email => email.trim() !== "");
        
        // Prepare the data to be sent
        const data = {
            emails: validEmails
        };

        // Make the API call
        const response = await sendData(USERS_ENDPOINT, data);
        
        if (response) {
            toast.success("Invitations sent successfully!");
            handleClose();
            setEmailList([""]);
            setErrors([]);
        }
    } catch (error) {
        toast.error("Failed to send invitations. Please try again.");
    } finally {
        setIsLoading(false);
    }





      
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
                        <Button className="btn btn-light p-1 border-0" onClick={() => handleRemove(index)}>
                         
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
          <Button variant="secondary"  onClick={handleClose} disabled={isLoading} >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={isLoading}>
          
            
            {isLoading ? 'Sending...' : 'Invite'}
          </Button>
        </Modal.Footer>
      </Modal>
);
}   



