import React from "react";
import { Card, Col } from "react-bootstrap";
import "./DashboardStatCard.scss";

interface DashboardStatCardProps {
  title: string;
  value: number;
  img: string;
  color: string;
}

const DashboardStatCard = ({
  title,
  value,
  img,
  color,
}: DashboardStatCardProps) => {
  return (
    <Col xs={12} sm={6} md={3} lg={3} className="mb-3">
      <Card
        className={`dashboard-stat-card border-0 shadow-sm bg-light-${color}`}
      >
        <Card.Body>
          <div className="text-center">
            <div className={` mb-3`}>
              <img
                src={img}
                alt={title}
                className={`bi bi-person fs-4 text-${color}`}
              />
            </div>
            <p className={`fw-semibold fs-5 text-${color} mb-1`}>{title}</p>
            <h5 className={`fw-semibold fs-5 text-${color} mb-0`}>{value}</h5>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DashboardStatCard;
