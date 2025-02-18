import React from "react";
import "./RecentUsers.scss";

interface RecentUsersProps {
  users: Array<{ date: string; name: string }>;
}

const RecentUsers = ({ users }: RecentUsersProps) => {
  return (
    <div className="recent-users-list px-5">
      {users.map((user) => (
        <div key={`${user.name}-${user.date}`} className="user-timeline-item">
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

export default RecentUsers;
