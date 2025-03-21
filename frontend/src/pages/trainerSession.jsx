import React, { useState } from "react";
import "../styles/trainerSession/trainerSession.css";

const TrainerSession = () => {
    return (
        <div className="session-container">
            {/* Page Heading */}
            <h1 className="session-heading">Session Management Page</h1>
            <hr className="session-divider" />

            {/* Top Section - Add Session Form */}
            <div className="session-form">
                <h2>Add a Session</h2>
                <label>Day:</label>
                <select>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>

                <label>Time:</label>
                <input type="time" />

                <label>Payment:</label>
                <input type="number" placeholder="Enter amount in $" />

                <button className="add-session-btn">Add Session</button>
            </div>

            {/* Bottom Section - List of Added Sessions */}
            <div className="session-list">
                <h2>Added Sessions</h2>
                <ul>
                    <li>
                        Monday - 10:00 AM - $50
                        <button className="delete-btn">Delete</button>
                    </li>
                    <li>
                        Wednesday - 4:00 PM - $40
                        <button className="delete-btn">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TrainerSession;
