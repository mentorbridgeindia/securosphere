import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "Mon", logins: 120 },
  { name: "Tue", logins: 98 },
  { name: "Wed", logins: 150 },
  { name: "Thu", logins: 170 },
  { name: "Fri", logins: 130 },
  { name: "Sat", logins: 90 },
  { name: "Sun", logins: 60 },
];

const pieData = [
  { name: "Chrome", value: 45 },
  { name: "Firefox", value: 25 },
  { name: "Edge", value: 15 },
  { name: "Safari", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Last Login Time</h3>
          <p>Feb 5, 2025 - 10:15 AM</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Last Logout Time</h3>
          <p>Feb 5, 2025 - 6:45 PM</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Browser Used</h3>
          <p>Google Chrome</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">User Login Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#ddd" />
              <YAxis stroke="#ddd" />
              <Tooltip />
              <Bar dataKey="logins" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Browser Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
