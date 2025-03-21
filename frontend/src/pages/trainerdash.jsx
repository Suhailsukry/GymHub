import React from "react";
import "../styles/trainerdash/trainerdash.css";
import { FaCog, FaCalendarAlt, FaChartBar } from "react-icons/fa"; // Changed icons

const TrainerDashboard = () => {
  const trainerName = "John Doe"; // Replace with actual trainer name
  const phoneNumber = "+123 456 7890"; // Replace with actual trainer phone
  const email = "john.doe@example.com"; // Replace with actual trainer email
  const location = "New York, USA"; // Replace with actual location
  const experience = "5 Years"; // Replace with actual experience
  const certification = "Certified Personal Trainer"; // Replace with actual certification

  return (
    <div className="trainer-dashboard">
      <div className="trainer-header">
        <div className="welcome-text">Welcome, {trainerName}!</div>
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="profile-pic"
        />
      </div>

      <div className="trainer-info">
        <div className="info-item">
          <label>Phone:</label>
          <div className="info-box">{phoneNumber}</div>
        </div>
        <div className="info-item">
          <label>Email:</label>
          <div className="info-box">{email}</div>
        </div>
        <div className="info-item">
          <label>Location:</label>
          <div className="info-box">{location}</div>
        </div>
        <div className="info-item">
          <label>Years of Experience:</label>
          <div className="info-box">{experience}</div>
        </div>
        <div className="info-item">
          <label>Certification:</label>
          <div className="info-box">{certification}</div>
        </div>
      </div>

      <div className="trainer-body">
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="dashboard-icon">
              <FaCog /> {/* Changed Icon */}
            </div>
            <h4>Settings</h4>
            <p>Manage your profile and preferences</p>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">
              <FaCalendarAlt /> {/* Changed Icon */}
            </div>
            <h4>Appointments</h4>
            <p>View and manage your sessions</p>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">
              <FaChartBar /> {/* Changed Icon */}
            </div>
            <h4>Progress</h4>
            <p>Track your clients' progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
