import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { ReactComponent as IconPlus } from "@assets/icons/icon-plus.svg";
import { ReactComponent as IconTrash } from "@assets/icons/icon-trash.svg";
import { ReactComponent as IconEdit } from "@assets/icons/icon-edit.svg";
import { Button} from "react-bootstrap";
import { useGetRoles } from '@/entities/Roles/useGetRoles';
import { CreateRole } from './CreateRole';
import { DeleteRole } from './DeleteRole';
import { EditRole } from './EditRole';

const Roles = () => {

    const [show,setShow] = useState(false);
    const [deleteShow,setDeleteShow]=useState(false);
    const [editShow,setEditShow] = useState(false);

    const {data, isLoading, error} = useGetRoles();
    const [role,setRole]=useState({id:"",roleName:"",roleDesc:""});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteClose=()=>{
        setShow(false);
        setRole({id:"",roleName:"",roleDesc:""});
    }

    const deleteHandler=(role:any)=>{
        setDeleteShow(true);
        setRole({id:role.id,roleName:role.role,roleDesc:role.desc});
    }

    const handleEditClose=()=>{
        setEditShow(false);
        setRole({id:"",roleName:"",roleDesc:""});
    }

    const editHandler = (role:any)=>{
        setEditShow(true);
        console.log("In Roles:{},",role);
        setRole({id:role.id,roleName:role.role,roleDesc:role.desc});
    }

  return (
    <div className='my-2'>
        <div className='d-flex justify-content-between mx-1 align-items-center mt-5 mb-3'>
            <h3 className='pt-1'>Roles</h3>
            <Button type="button"
            className="p-2 border-0" onClick={handleShow}><IconPlus className='mx-1'/> New Role</Button>
        </div>
        <Table responsive>
        <thead className=''>
            <tr>
            <th className="small fw-bold table-bordered color-white">Role Id</th>
            <th className="small fw-bold table-bordered color-white">Role</th>
            <th className="small fw-bold table-bordered color-white">Description</th>
            <th className="small fw-bold table-bordered color-white">Actions</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((role,index)=>(
            <tr key={index}>
                <td>{role.id}</td>
                <td>{role.role}</td>
                <td>{role.desc}</td>
                <td>
                    <div>
                        <button className='py-2 px-3 border-0 rounded mx-3' onClick={()=>deleteHandler(role)}><IconTrash/></button>
                        <button className='py-2 px-3 border-0 rounded' onClick={()=>editHandler(role)}><IconEdit/></button>
                    </div>
                </td>
            </tr>))}
        </tbody>
        </Table>
        <CreateRole show={show} handleClose={handleClose}/>
        <DeleteRole show={deleteShow} handleClose={handleDeleteClose} role={role}/>
        <EditRole show={editShow} handleClose={handleEditClose} role={role}/>
    </div>
  )
}

export default Roles