import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { ReactComponent as IconPlus } from "@assets/icons/icon-plus.svg";
import { ReactComponent as IconTrash } from "@assets/icons/icon-trash.svg";
import { ReactComponent as IconEdit } from "@assets/icons/icon-edit.svg";
import { Button } from "react-bootstrap";
import { useGetTeams } from "@/entities/Teams/useGetTeam";
import { CreateTeam } from "./CreateTeam";
import { DeleteTeam } from "./DeleteTeam";
import { EditTeam } from "./EditTeam";

const Teams = () => {
  const [show, setShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const { data, isLoading, error } = useGetTeams();
  const [team, setTeam] = useState({ id: "", teamName: "", teamDesc: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClose = () => {
    setShow(false);
    setTeam({ id: "", teamName: "", teamDesc: "" });
  };

  const deleteHandler = (team: any) => {
    setDeleteShow(true);
    setTeam({ id: team.id, teamName: team.teamName, teamDesc: team.teamDesc });
  };

  const handleEditClose = () => {
    setEditShow(false);
    setTeam({ id: "", teamName: "", teamDesc: "" });
  };

  const editHandler = (team: any) => {
    setEditShow(true);
    setTeam({ id: team.id, teamName: team.teamName, teamDesc: team.teamDesc });
  };

  return (
    <div className="my-2">
      <div className="d-flex justify-content-between mx-1 align-items-center mt-5 mb-3">
        <h3 className="pt-1">Teams</h3>
        <Button type="button" className="p-2 border-0" onClick={handleShow}>
          <IconPlus className="mx-1" /> New Team
        </Button>
      </div>
      <Table responsive>
        <thead className="">
          <tr>
            <th className="small fw-bold table-bordered color-white">
              Team Id
            </th>
            <th className="small fw-bold table-bordered color-white">Team</th>
            <th className="small fw-bold table-bordered color-white">
              Description
            </th>
            <th className="small fw-bold table-bordered color-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((team, index) => (
            <tr key={index}>
              <td>{team.id}</td>
              <td>{team.teamName}</td>
              <td>{team.teamDesc}</td>
              <td>
                <div>
                  <button
                    className="py-2 px-3 border-0 rounded mx-3"
                    onClick={() => deleteHandler(team)}
                  >
                    <IconTrash />
                  </button>
                  <button
                    className="py-2 px-3 border-0 rounded"
                    onClick={() => editHandler(team)}
                  >
                    <IconEdit />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CreateTeam show={show} handleClose={handleClose} />
      <DeleteTeam
        show={deleteShow}
        handleClose={handleDeleteClose}
        team={team}
      />
      <EditTeam show={editShow} handleClose={handleEditClose} team={team} />
    </div>
  );
};

export default Teams;
