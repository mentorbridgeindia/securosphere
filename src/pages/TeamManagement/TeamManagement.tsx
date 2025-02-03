import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import {ReactComponent as IconPlus} from '@assets/icons/icon-plus.svg'
import {ReactComponent as IconTrash} from '@assets/icons/icon-trash.svg'
import{ReactComponent as IconEdit}from '@assets/icons/icon-edit.svg'
import {InviteUser} from './InviteUser';


export const TeamManagement = () => {
    const [show, setShow] = useState(false);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="my-2 mt-5">
        <div className='d-flex justify-content-between'>
        <h3>Team Management</h3>
        <Button type='button' className='p-2 border-0' size='sm' onClick={handleShow}>
          <IconPlus/>
            Invite User
        </Button>
 </div>
        <div className="my-2">
    <Table striped className="table table-hover table-bordered ">
      <thead style={{ backgroundColor: '$gray-500' }} >
      
        <tr >
          
          <th className="small fw-bold table-bordered color-white">First Name</th>
          <th className="small fw-bold table-bordered">Last Name</th>
          <th className="small fw-bold table-bordered">Email</th>
          <th className="small fw-bold table-bordered">Last Loggedin date</th>
          <th className="small fw-bold table-bordered">Actions</th>
        </tr>
       
      </thead>
      <tbody className="small fw-normal">
  <tr>
    
    <td>Jeya</td>
    <td>shree</td>
    <td>jeya@gmail.com</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
        <Button className="btn btn-light p-1 border-0">
        <IconEdit/></Button>
        <Button className="btn btn-light p-1 border-0">
        <IconTrash/></Button>
      </div>
    </td>
  </tr>
  <tr>
    
    <td>Jacob</td>
    <td>Thornton</td>
    <td>jack123@gmail.com</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
      <Button className="btn btn-light p-1 border-0">
        <IconEdit /></Button>
        <Button className="btn btn-light p-1 border-0">
        <IconTrash /></Button>
      </div>
    </td>
  </tr>
  <tr>
    
    <td>Larry the</td>
    <td>bird</td>
    <td>larry@gmail.com</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
      <Button className="btn btn-light p-1 border-0">
        <IconEdit /></Button>
        <Button className="btn btn-light p-1 border-0">
        <IconTrash /></Button>
      </div>
    </td>
  </tr>
  <tr>
   
    <td>Larry the</td>
    <td>bird</td>
    <td>bird@gmail.com</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
      <Button className="btn btn-light p-1 border-0">
        <IconEdit /></Button>
        <Button  className="btn btn-light p-1 border-0 ">
          <IconTrash/> </Button>
      </div>
    </td>
  </tr>
</tbody>

    </Table>
    </div>
    <InviteUser show={show} handleClose={handleClose}/>
    </div>
    
  );
}
