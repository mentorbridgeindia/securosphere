import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import { Mail, Phone, Building, Calendar } from "lucide-react";
import type { UserProfile } from "./Profile.types";

function Profile() {
  const [profile, setProfile] = useState<UserProfile>({
    id: "1",
    firstName: "Raj",
    lastName: "Kumar",
    email: "raj.kumar@example.com",
    role: "Admin",
    accountStatus: "active",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date(),
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={4}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="text-center">
              <h4 className="mb-1">{`${profile.firstName} ${profile.lastName}`}</h4>
              <p className="text-muted mb-3">{profile.role}</p>
              <Badge
                bg={profile.accountStatus === "active" ? "success" : "warning"}
                className="px-3 py-2 rounded-pill"
              >
                {profile.accountStatus.charAt(0).toUpperCase() +
                  profile.accountStatus.slice(1)}
              </Badge>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4 fw-bold">Contact Information</h5>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light rounded-circle p-2 me-3">
                  <Mail size={18} className="text-black" />
                </div>
                <div>
                  <small className="text-muted d-block">Email</small>
                  {profile.email}
                </div>
              </div>
   
             
              <div className="d-flex align-items-center">
                <div className="bg-light rounded-circle p-2 me-3">
                  <Calendar size={18} className="text-black" />
                </div>
                <div>
                  <small className="text-muted d-block">Member since</small>
                  {profile.createdAt.toLocaleDateString()}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold">Profile Details</h5>
                <Button
                  onClick={() =>
                    isEditing ? handleSave() : setIsEditing(true)
                  }
                  className="px-4 rounded-pill"
                  style={{ backgroundColor: "#002851", borderColor: "#002851" }}
                >
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="py-4">
              <Form>
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.firstName}
                        onChange={(e) =>
                          setProfile({ ...profile, firstName: e.target.value })
                        }
                        disabled={!isEditing}
                        className="rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.lastName}
                        onChange={(e) =>
                          setProfile({ ...profile, lastName: e.target.value })
                        }
                        disabled={!isEditing}
                        className="rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
