import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import "./WelcomeCard.scss";

interface WelcomeCardProps {
  stats: {
    UserName: string;
    TotalUsers: number;
    ActiveUsers: number;
  };
}

const WelcomeCard = ({ stats }: WelcomeCardProps) => {
  return (
    <Card
      className="welcome-card rounded-4 border-0 shadow-sm"
      style={{ backgroundColor: "#eef3ff" }}
    >
      <Card.Body className="p-0 px-2">
        <Row className="align-items-center">
          <Col xs={12} md={7} className="welcome-content p-md-5">
            <div className="welcome-header mb">
              <h5 className="fw-semibold text-dark mb-3 fs-2">
                Welcome back, {stats.UserName}!
              </h5>
            </div>
            <div className="stats-container d-flex flex-column flex-md-row">
              <div className="stat-item text-center mb-3 mb-md-0">
                <h3 className="mt-3 fw-bold text-dark fs-5 d-flex align-items-center justify-content-center">
                  {stats.TotalUsers}
                </h3>
                <p className="mb-0 text-secondary fw-medium">Total users</p>
              </div>
              <div className="stat-item text-center ps-md-5">
                <h3 className="mt-3 fw-bold text-dark fs-5 d-flex align-items-center justify-content-center">
                  {stats.ActiveUsers}
                </h3>
                <p className="mb-0 text-secondary fw-medium">Active users</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} className="welcome-illustration text-center">
            <Image
              src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/backgrounds/welcome-bg.svg"
              alt="Welcome Illustration"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WelcomeCard;
