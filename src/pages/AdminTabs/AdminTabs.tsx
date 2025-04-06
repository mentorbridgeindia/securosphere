import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { TeamManagement } from "../TeamManagement/TeamManagement";
import Roles from "../Roles/Roles";
import Teams from "../Teams/Teams";

export const AdminTabs = () => {
  return (
    <Container className="py-5">
      <Card className="shadow-sm rounded">
        <Card.Body>
          <Tabs
            defaultActiveKey="invite"
            id="team-management-tabs"
            className="mb-3"
            fill
          >
            <Tab eventKey="invite" title="Invite User">
              <div className="p-3">
                <TeamManagement />
              </div>
            </Tab>

            <Tab eventKey="roles" title="Roles">
              <div className="p-3">
                <Roles />
              </div>
            </Tab>

            <Tab eventKey="teams" title="Teams">
              <div className="p-3">
                <Teams />
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminTabs;
