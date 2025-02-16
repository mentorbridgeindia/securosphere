import "./Dashboard.scss";
import { Card, Col, Row, Image, Container, ProgressBar } from "react-bootstrap";
import WorldMapComponent from "./WorldMapComponent";

//---------------------------------------------

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

// ------------------------------------------

const stats = {
  UserName: "Mathew Anderson",
  TotalUsers: 1200,
  ActiveUsers: 850,
};

// ------------------------------------------
const socialLogins = [
  { type: "Google", value: 90 },
  { type: "Facebook", value: 30 },
  { type: "Github", value: 20 },
  { type: "Twitter", value: 10 },
  { type: "Linkedin", value: 5 },
];

const SocialLoginBar = ({
  type,
  value,
  color,
}: {
  type: string;
  value: number;
  color: string;
}) => (
  <div className="social-login-bar mb-3">
    <div className="d-flex justify-content-between align-items-center mb-1">
      <span className="login-type">
        <i className={`bi bi-${type.toLowerCase()}`}></i>
        {type}
      </span>
      <span className="login-value">{value}%</span>
    </div>
    <ProgressBar now={value} variant={color} className="custom-progress" />
  </div>
);

// ------------------------------------------

const browserStats = [
  { name: "Chrome", value: 70, color: "#4318FF" },
  { name: "Firefox", value: 10, color: "#1DA1F2" },
  { name: "Safari", value: 10, color: "#24292E" },
  { name: "Edge", value: 10, color: "#1877F2" },
];

const DonutChart = ({ data }: { data: typeof browserStats }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let rotateOffset = 0;

  return (
    <div className="donut-chart-container">
      <div className="donut-chart">
        {data.map((item, index) => {
          const degrees = (item.value / total) * 360;
          const style = {
            "--offset": `${rotateOffset}deg`,
            "--value": `${degrees}deg`,
            "--bg-color": item.color,
          } as React.CSSProperties;
          rotateOffset += degrees;
          return (
            <div key={item.name} className="donut-segment" style={style} />
          );
        })}
      </div>
      <div className="donut-legend">
        {data.map((item) => (
          <div key={item.name} className="legend-item">
            <span
              className="legend-dot"
              style={{ backgroundColor: item.color }}
            />
            <span className="legend-label">{item.name}</span>
            <span className="legend-value">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
//------------------------------------------

const ActivityLineChart = () => {
  const hours = ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"];
  const values = [30, 20, 25, 85, 90, 70, 95, 60];

  const maxValue = Math.max(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 100 - (value / maxValue) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="activity-chart">
      <div className="chart-labels y-labels">
        {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0].map(
          (label, index) => (
            <span key={index}>{Math.round(label)}</span>
          )
        )}
      </div>
      <div className="chart-container">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4318FF" />
              <stop offset="100%" stopColor="#9F7AEA" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4318FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4318FF" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path
            d={`M0,100 L${points} L100,100 Z`}
            fill="url(#areaGradient)"
            className="area-path"
          />

          <polyline
            points={points}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0."
            className="main-line"
          />
        </svg>
        <div className="x-labels">
          {hours.map((hour, index) => (
            <span key={index}>{hour}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

//----------------------------------------

const recentUsers = [
  {
    date: "11.2.2021",
    name: "John Smith",
  },
  {
    date: "11.2.2021",
    name: "Sarah Johnson",
  },
  {
    date: "11.2.2021",
    name: "Michael Brown",
  },
  {
    date: "11.2.2021",
    name: "Emma Wilson",
  },
  {
    date: "11.2.2021",
    name: "James Davis",
  },
  {
    date: "11.2.2021",
    name: "James Davis",
  },
];

const RecentUsers = () => {
  return (
    <div className="recent-users-list px-5">
      {recentUsers.map((user, index) => (
        <div key={index} className="user-timeline-item">
          <div className="time-stamp">{user.date}</div>
          <div className="user-info">
            <div className="timeline-dot"></div>
            <div className="user-name">{user.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
const Dashboard = () => {
  return (
    <Container fluid className="pt-4">
      <Row className="mb-4 ">
        <Col xs={12}>
          <Card
            className="welcome-card rounded-4 border-0 shadow-sm"
            style={{ backgroundColor: "#eef3ff" }}
          >
            <Card.Body className="p-0 px-2">
              <Row className="align-items-center">
                <Col xs={12} md={7} className="welcome-content  p-md-5 ">
                  <div className="welcome-header mb">
                    <h5 className="fw-semibold text-dark mb-3 fs-2">
                      Welcome back, {stats.UserName}!
                    </h5>
                  </div>
                  <div className="stats-container d-flex flex-column flex-md-row">
                    <div className="stat-item text-center mb-3 mb-md-0  ">
                      <h3 className="mt-3 fw-bold text-dark fs-5 d-flex align-items-center justify-content-center">
                        {stats.TotalUsers}
                      </h3>
                      <p className="mb-0 text-secondary fw-medium ">
                        Total users
                      </p>
                    </div>
                    <div className="stat-item text-center ps-md-5">
                      <h3 className="mt-3 fw-bold text-dark fs-5 d-flex align-items-center justify-content-center">
                        {stats.ActiveUsers}
                      </h3>
                      <p className="mb-0 text-secondary fw-medium">
                        Active users
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={5}
                  className="welcome-illustration text-center"
                >
                  <Image
                    src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/backgrounds/welcome-bg.svg"
                    alt="Welcome Illustration"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        {Object.entries(stats1).map(([key, value], index) => (
          <Col xs={12} sm={6} md={3} lg={3} key={index} className="mb-3">
            <Card
              className={`dashboard-stat-card border-0 shadow-sm bg-light-${value.color}`}
            >
              <Card.Body>
                <div className="text-center">
                  <div className={`icon-circle mb-3 `}>
                    <Image
                      src={value.img}
                      className={`bi bi-person fs-4 text-${value.color}`}
                    />
                  </div>
                  <p className={`fw-semibold fs-5 text-${value.color} mb-1`}>
                    {value.title}
                  </p>
                  <h5 className={`fw-semibold fs-5 text-${value.color} mb-0`}>
                    {value.value}
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
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
                <h5 className="card-title mt-2 ">Social Login Statistics</h5>
              </div>

              <div className="social-login-bars">
                {socialLogins.map((login, index) => (
                  <SocialLoginBar
                    key={login.type}
                    type={login.type}
                    value={login.value}
                    color={`custom-${index}`}
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card
            className="browser-stats-card border-0 shadow-sm  "
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
              <RecentUsers />
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
              <ActivityLineChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} md={12} lg={12}>
          <WorldMapComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
