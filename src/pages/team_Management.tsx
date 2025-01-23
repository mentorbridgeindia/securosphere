import Table from 'react-bootstrap/Table';
import { ReactComponent as IconLogo } from "@assets/icons/logo.svg";
import { Button } from 'react-bootstrap';

function StripedRowExample() {
  return (
    <div className="my-2 mt-5">
    <Table striped className="table table-hover table-bordered">
      <thead  >
      
        <tr >
          <th className="small fw-bold bordered">S.No</th>
          <th className="small fw-bold table-bordered">First Name</th>
          <th className="small fw-bold table-bordered">Last Name</th>
          <th className="small fw-bold table-bordered">Email</th>
          <th className="small fw-bold table-bordered">Last Loggedin date</th>
          <th className="small fw-bold table-bordered">Actions</th>
        </tr>
       
      </thead>
      <tbody className="small fw-normal">
  <tr>
    <td>1</td>
    <td>Jeya</td>
    <td>shree</td>
    <td>@mdo</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
      <button className="btn btn-light p-1 border-0">
        <img src="/edit.svg" alt="edit"/></button>
        <button className="btn btn-light p-1 border-0">
        <img src="/delete.svg" alt="delete"/></button>
      </div>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
      <button className="btn btn-light p-1 border-0">
        <img src="/edit.svg" alt="edit" /></button>
        <button className="btn btn-light p-1 border-0">
        <img src="/delete.svg" alt="delete" /></button>
      </div>
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>Larry the</td>
    <td>bird</td>
    <td>@twitter</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
      <button className="btn btn-light p-1 border-0">
        <img src="/edit.svg" alt="edit" /></button>
        <button className="btn btn-light p-1 border-0">
        <img src="/delete.svg" alt="delete" /></button>
      </div>
    </td>
  </tr>
  <tr>
    <td>4</td>
    <td>Larry the</td>
    <td>bird</td>
    <td>@twitter</td>
    <td>12/12/2022</td>
    <td className="align-middle text-center">
      <div className="d-flex  gap-4">
      <button className="btn btn-light p-1 border-0">
        <img src="/edit.svg" alt="edit" /></button>
        <button className="btn btn-light p-1 border-0">
        <img src="/delete.svg" alt="delete" /></button>
      </div>
    </td>
  </tr>
</tbody>

    </Table>
    </div>
  );
}

export default StripedRowExample;