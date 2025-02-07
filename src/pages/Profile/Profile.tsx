import { FormLabel } from "@atoms/FormLabel";
import { Spinner } from "@atoms/Spinner";
import type { IProfileEntity } from "@entities/Profile";
import { useGetProfile } from "@entities/Profile";
import { useUpdateProfile } from "@entities/Profile/useUpdateProfile";
import { Calendar, Mail } from "lucide-react";
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Partial<IProfileEntity>>({
    firstName: "Raj",
    lastName: "Kumar"
  });

  const { data, isLoading, error } = useGetProfile();

  const { mutate: updateProfile } = useUpdateProfile({
    onSuccess: () => {
      toast.success("Profile updated successfully");
      setIsEditing(false);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (data) {
      updateProfile({
        ...data,
        firstName: profile.firstName ?? "",
        lastName: profile.lastName ?? "",
      });
    }
  };

  if (isLoading) return <Spinner isLoading={isLoading} />;

  if (error) {
    navigate("/error-page?error=Something went wrong");
  }

  return (
    <Container className="py-5">
      {data && (
        <>
          <Card className="border-0 shadow-sm mb-4 center">
            <Card.Body className="text-center">
              <h4 className="mb-1">{`${data.firstName} ${data.lastName}`}</h4>
              <p className="text-muted mb-3">{data.role}</p>
              <Badge
                bg={data.status === "active" ? "success" : "warning"}
                className="px-3 py-2 rounded-pill"
              >
                {data.status === "active" ? "Active" : "Inactive"}
              </Badge>
            </Card.Body>
          </Card>
          <Row>
            <Col lg={4}>
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body>
                  <h5 className="mb-4 fw-bold">Contact Information</h5>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded-circle p-2 me-3">
                      <Mail size={18} className="text-black" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Email</small>
                      {data.email}
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded-circle p-2 me-3">
                      <Calendar size={18} className="text-black" />
                    </div>
                    <div>
                      <small className="text-muted d-block">Member since</small>
                      {data.createdAt}
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
                      variant="primary"
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
                          <FormLabel className="text-muted">
                            First Name
                          </FormLabel>
                          <Form.Control
                            type="text"
                            value={data.firstName}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                firstName: e.target.value,
                              })
                            }
                            disabled={!isEditing}
                            className="rounded-pill"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <FormLabel className="text-muted">
                            Last Name
                          </FormLabel>
                          <Form.Control
                            type="text"
                            value={data.lastName}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                lastName: e.target.value,
                              })
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
        </>
      )}
    </Container>
  );
}

export default Profile;
