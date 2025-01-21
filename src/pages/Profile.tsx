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
import type { UserProfile } from "@modules/settings/types/config";

function Profile() {
  const [profile, setProfile] = useState<UserProfile>({
    id: "1",
    firstName: "Raj",
    lastName: "Kumar",
    email: "raj.kumar@example.com",
    phoneNumber: "+1234567890",
    role: "Admin",
    department: "IT",
    employeeId: "EMP001",
    profilePicture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Senior Software Engineer with expertise in IAM solutions",
    dateOfBirth: "1990-01-01",
    address: "Chennai, India",
    accountStatus: "active",
    lastLogin: new Date(),
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
              <div className="position-relative d-inline-block mb-4">
                <div
                  className="rounded-circle overflow-hidden border border-white shadow"
                  style={{ width: "180px", height: "180px" }}
                >
                  <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
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
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light rounded-circle p-2 me-3">
                  <Phone size={18} className="text-black" />
                </div>
                <div>
                  <small className="text-muted d-block">Phone</small>
                  {profile.phoneNumber}
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light rounded-circle p-2 me-3">
                  <Building size={18} className="text-black" />
                </div>
                <div>
                  <small className="text-muted d-block">Department</small>
                  {profile.department}
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

                <Form.Group className="mb-4">
                  <Form.Label className="text-muted">Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                    disabled={!isEditing}
                    className="rounded-3"
                  />
                </Form.Group>

                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        value={profile.phoneNumber}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            phoneNumber: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted">
                        Date of Birth
                      </Form.Label>
                      <Form.Control
                        type="date"
                        value={profile.dateOfBirth}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            dateOfBirth: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="text-muted">Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.address}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                    disabled={!isEditing}
                    className="rounded-pill"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted">
                        Employee ID
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.employeeId}
                        disabled
                        className="rounded-pill bg-light"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted">Department</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.department}
                        disabled
                        className="rounded-pill bg-light"
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
