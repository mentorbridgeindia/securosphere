import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
} from "@coreui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./Dashboard.scss";
import WorldMap from "./WorldMap";

interface BrowserData {
  browser: "Chrome" | "Firefox" | "Edge" | "Safari";
  count: number;
}

interface GenderData {
  gender: "Male" | "Female";
  count: number;
}

const GENDER_COLORS: Record<string, string> = {
  Male: "#4C78D0",
  Female: "#F2668B",
};

const BROWSER_COLORS: Record<string, string> = {
  Chrome: "#36A2EB",
  Firefox: "#FF6384",
  Edge: "#4BC0C0",
  Safari: "#FFCE56",
};

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

const stats = {
  TotalUsers: 1200,
  ActiveUsers: 850,
  SignUps: 300,
  SignIns: 700,
};
const genderData: GenderData[] = [
  { gender: "Male", count: 700 },
  { gender: "Female", count: 500 },
];

const browserUsage: BrowserData[] = [
  { browser: "Chrome", count: 600 },
  { browser: "Firefox", count: 300 },
  { browser: "Edge", count: 200 },
  { browser: "Safari", count: 100 },
];

const weeklyActivity = [
  { day: "Mon", logins: 40 },
  { day: "Tue", logins: 60 },
  { day: "Wed", logins: 80 },
  { day: "Thu", logins: 30 },
  { day: "Fri", logins: 90 },
  { day: "Sat", logins: 50 },
  { day: "Sun", logins: 20 },
];

const socialLogins = [
  { type: "Google", value: 50 },
  { type: "Facebook", value: 30 },
  { type: "Github", value: 20 },
  { type: "Twitter", value: 10 },
  { type: "Linkedin", value: 5 },
];

const loginDetails = [
  {
    name: "John Doe",
    date: "2024-02-10",
    country: "USA",
    method: "Google",
    activity: "Sign-in",
    profileImage:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  },
  {
    name: "Jane Smith",
    date: "2024-02-09",
    country: "UK",
    method: "Facebook",
    activity: "Sign-up",
    profileImage:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  },
  {
    name: "Alice Johnson",
    date: "2024-02-08",
    country: "Canada",
    method: "Github",
    activity: "Sign-in",
    profileImage:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
  {
    name: "Bob Brown",
    date: "2024-02-07",
    country: "Australia",
    method: "Google",
    activity: "Sign-up",
    profileImage:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
];

const activeTimeData = [
  { hour: "00:00", users: 120 },
  { hour: "03:00", users: 80 },
  { hour: "06:00", users: 150 },
  { hour: "09:00", users: 300 },
  { hour: "12:00", users: 400 },
  { hour: "15:00", users: 350 },
  { hour: "18:00", users: 250 },
  { hour: "21:00", users: 180 },
];

const ScrollIndicator = () => (
  <div className="d-block d-md-none text-muted text-center py-2">
    <small>← Scroll horizontally to view more →</small>
  </div>
);

const Dashboard = () => {
  return (
    <CContainer fluid className="pt-4" >
      <CRow>
        {Object.entries(stats).map(([key, value], index) => (
          <CCol xs={12} sm={6} md={3} lg={3} key={key} className="mb-3">
            <CCard
              className={`dashboard-card dashboard-card-${key.toLowerCase()}`}
            >
              <CCardHeader className="border-0 bg-transparent">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </CCardHeader>
              <CCardBody>
                <h3>{value}</h3>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
      <CRow className="mt-3 mb-4">
        <CCol xs={12} sm={12} md={4} lg={4}>
          <CCard className="dashboard-chart-card">
            <CCardHeader>Gender Distribution</CCardHeader>
            <CCardBody>
              <ResponsiveContainer width="80%" height={300}>
                <BarChart data={genderData}>
                  <XAxis dataKey="gender" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" barSize={30}>
                    {genderData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={GENDER_COLORS[entry.gender]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} sm={12} md={8} lg={8} className="mt-4 mt-md-0">
          <CCard className="dashboard-chart-card">
            <CCardHeader>Weekly Logins</CCardHeader>
            <CCardBody>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyActivity}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="logins" stroke="#002851" />
                </LineChart>
              </ResponsiveContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mt-4 mb-4">
        <CCol xs={12} sm={12} md={6} lg={6}>
          <CCard className="dashboard-chart-card">
            <CCardHeader>Social Login Methods</CCardHeader>
            <CCardBody>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={socialLogins}
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    innerRadius="0%"
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="type"
                  >
                    {socialLogins.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value}%`,
                      `${props.payload.type} Login`,
                    ]}
                  />
                  <Legend
                    layout="horizontal"
                    align="center"
                    verticalAlign="bottom"
                    iconType="circle"
                    iconSize={4}
                    wrapperStyle={{
                      fontSize: "12px",
                      padding: "10px",
                      width: "100%",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                    formatter={(value, entry, index) => (
                      <span
                        style={{
                          color: "#666",
                          marginLeft: "4px",
                          padding: "0 8px",
                        }}
                      >
                        {value}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={12} md={6} lg={6} className="mt-4 mt-md-0">
          <CCard className="dashboard-chart-card">
            <CCardHeader>Browser Usage </CCardHeader>
            <CCardBody>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={browserUsage}>
                  <XAxis dataKey="browser" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" barSize={24}>
                    {browserUsage.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={BROWSER_COLORS[entry.browser]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCol xs={12} sm={12} md={12} lg={12} className="mt-4">
        <CCard className="dashboard-chart-card">
          <CCardHeader>Most Active Hours</CCardHeader>
          <CCardBody>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activeTimeData}>
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#4C78D0"
                  strokeWidth={2}
                  dot={{ fill: "#4C78D0" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CCardBody>
        </CCard>
      </CCol>
      <CRow className="mt-3 mb-4">
        <CCol lg={12} md={12} sm={12} xs={12}>
          <CCard className="dashboard-chart-card">
            <CCardHeader>Global User Distribution</CCardHeader>
            <CCardBody>
              <WorldMap />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mt-3 mb-4">
        <CCol xs={12} sm={12} md={12} lg={12}>
          <CCard className="dashboard-chart-card">
            <CCardHeader>User Login Details</CCardHeader>
            <CCardBody>
              <ScrollIndicator />
              <div className="responsive-table-wrapper">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Date</th>
                      <th>Country</th>
                      <th>Method</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loginDetails.map((user, index) => (
                      <tr key={index}>
                        <td className="user-info-cell">
                          <div className="d-flex align-items-center">
                            <img
                              src={user.profileImage}
                              alt={user.name}
                              className="user-profile-image"
                              style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                marginRight: "10px",
                                objectFit: "cover",
                              }}
                            />
                            <span>{user.name}</span>
                          </div>
                        </td>
                        <td>{user.date}</td>
                        <td>{user.country}</td>
                        <td>
                          <span
                            title={`Logged in using ${user.method}`}
                            style={{ cursor: "pointer" }}
                          >
                            {user.method}
                          </span>
                        </td>
                        <td>{user.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <div className="card text-bg-primary border-0 w-100">
          <div className="card-body pb-0">
            <h4 className="fw-semibold mb-1 text-white card-title">
              Best Selling Products
            </h4>
            <p className="fs-3 mb-3 text-white">Overview 2024</p>
            <div className="text-center mt-3">
              <img
                src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/backgrounds/piggy.png"
                className="img-fluid"
                alt="modernize-img"
              />
            </div>
          </div>
          <div className="card mx-2 mb-2 mt-n2">
            <div className="card-body">
              <div className="mb-7 pb-1">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h6 className="mb-1 fs-4 fw-semibold">MaterialPro</h6>
                    <p className="fs-3 mb-0">$23,568</p>
                  </div>
                  <div>
                    <span className="badge bg-primary-subtle text-primary fw-semibold fs-3">
                      55%
                    </span>
                  </div>
                </div>
                <div className="progress bg-primary-subtle h-4">
                  <div
                    className="progress-bar w-50"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h6 className="mb-1 fs-4 fw-semibold">Flexy Admin</h6>
                    <p className="fs-3 mb-0">$23,568</p>
                  </div>
                  <div>
                    <span className="badge bg-secondary-subtle text-secondary fw-bold fs-3">
                      20%
                    </span>
                  </div>
                </div>
                <div className="progress bg-secondary-subtle h-4">
                  <div
                    className="progress-bar text-bg-secondary w-25"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CRow>{" "}
    </CContainer>
  );
};

export default Dashboard;
