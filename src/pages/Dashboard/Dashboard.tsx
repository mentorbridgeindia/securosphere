import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import DashboardStatCard from "./DashboardStatCard/DashboardStatCard";
import SocialLoginBar from "./SocialLoginBar/SocialLoginBar";
import DonutChart from "./DonutChart/DonutChart";
import ActivityLineChart from "./ActivityLineChart/ActivityLineChart";
import RecentUsers from "./RecentUsers/RecentUsers";
import WorldMapComponent from "./WorldMapComponent/WorldMapComponent";

const stats = {
  UserName: "Mathew Anderson",
  TotalUsers: 1200,
  ActiveUsers: 850,
};

const stats1 = [
  {
    title: "Reports",
    value: 59,
    img: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-connect.svg",
    color: "info",
  },
  {
    title: "Total Users",
    value: 1200,
    img: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-briefcase.svg",
    color: "primary",
  },
  {
    title: "Active Users",
    value: 850,
    img: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-mailbox.svg",
    color: "success",
  },
  {
    title: "Sign Ups",
    value: 300,
    img: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-user-male.svg",
    color: "warning",
  },
];

const socialLogins = [
  { type: "Google", value: 90, color: "custom-0" },
  { type: "Facebook", value: 30, color: "custom-1" },
  { type: "Github", value: 20, color: "custom-2" },
  { type: "Twitter", value: 10, color: "custom-3" },
  { type: "Linkedin", value: 5, color: "custom-4" },
  { type: "Instagram", value: 5, color: "custom-5" },
];

const browserStats = [
  { name: "Chrome", value: 70, color: "#4318FF" },
  { name: "Firefox", value: 10, color: "#1DA1F2" },
  { name: "Safari", value: 10, color: "#24292E" },
  { name: "Edge", value: 10, color: "#1877F2" },
];

const recentUsers = [
  { date: "11.2.2021", name: "John Smith" },
  { date: "11.2.2021", name: "Sarah Johnson" },
  { date: "11.2.2021", name: "Michael Brown" },
  { date: "11.2.2021", name: "Emma Wilson" },
  { date: "11.2.2021", name: "James Davis" },
  { date: "11.2.2021", name: "Olivia Martinez" },
];
const activityData = {
  hours: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
  values: [30, 20, 25, 85, 90, 70, 95, 60],
};

const users = [
  { id: "1", coordinates: [10, 50] as [number, number] },
  { id: "2", coordinates: [-122.4194, 37.7749] as [number, number] },
  { id: "3", coordinates: [-74.006, 40.7128] as [number, number] },
  { id: "4", coordinates: [139.6917, 35.6895] as [number, number] },
  { id: "5", coordinates: [77.209, 28.6139] as [number, number] },
];

const Dashboard = () => {
  return (
    <Container fluid className="pt-4">
      <Row className="mb-4">
        <WelcomeCard stats={stats} />
      </Row>

      <Row className="mb-4">
        {stats1.map((stat, index) => (
          <DashboardStatCard
            key={index}
            title={stat.title}
            value={stat.value}
            img={stat.img}
            color={stat.color}
          />
        ))}
      </Row>

      <Row>
        <Col xs={12} md={8} className="mb-2">
          <Card
            className="social-login-card border-0 shadow-sm"
            style={{ backgroundColor: "#eef3ff" }}
          >
            <Card.Body className="px-5">
              <div className="d-flex align-items-center mb-2">
                <h5 className="card-title mt-2">Social Login Statistics</h5>
              </div>

              <div className="social-login-bars">
                {socialLogins.map((login, index) => (
                  <SocialLoginBar
                    key={login.type}
                    type={login.type}
                    value={login.value}
                    color={login.color}
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card
            className="browser-stats-card border-0 shadow-sm"
            style={{ backgroundColor: "#eef3ff" }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                <h5 className="card-title mb-0">Browser Statistics</h5>
              </div>
              <DonutChart data={browserStats} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col lg={4} xs={12} md={12}>
          <Card
            className="recent-users rounded-4 border-0 shadow-sm mt-4"
            style={{ backgroundColor: "#eef3ff" }}
          >
            <Card.Body className="px-4">
              <div className="d-flex align-items-center">
                <h5 className="card-title mb-0">Recent Users</h5>
              </div>
              <RecentUsers users={recentUsers} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8} xs={12} md={12}>
          <Card
            className="activity-chart-card rounded-4 border-0 shadow-sm mt-4"
            style={{ backgroundColor: "#eef3ff" }}
          >
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="card-title mb-0">User Activity Hours</h5>
              </div>
              <ActivityLineChart
                hours={activityData.hours}
                values={activityData.values}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} md={12} lg={12}>
          <WorldMapComponent users={users} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
