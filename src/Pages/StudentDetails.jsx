import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { studentDetails } from "../Data/studentDetailsData";
import "./StudentDetails.css";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = studentDetails.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="student-details-container">
        <h2>Student not found!</h2>
        <button onClick={() => navigate("/")} className="back-btn">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="student-details-container">
      <button onClick={() => navigate("/")} className="back-btn">
        ← Back to Home
      </button>

      <div className="student-card">
        <h2>Student Profile</h2>

        <div className="student-profile">
          <img
            src={student.profileImg}
            alt={student.name}
            className="student-image"
          />
          <div className="student-info">
            <h3>{student.name}</h3>
            <p>{student.email}</p>
            <p>{student.city}</p>

            <div className="student-meta">
              <p>
                <strong>Assessment Date:</strong> {student.assessmentDate}
              </p>
              <p>
                <strong>Average Score:</strong> {student.averageScore}/100
              </p>
              <p>
                <strong>Last Score:</strong> {student.lastScore}/100
              </p>
            </div>
          </div>
        </div>

        <div className="performance-section">
          <h4>Performance Overview</h4>
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Score (/10)</th>
              </tr>
            </thead>
            <tbody>
              {student.performance.map((item, index) => (
                <tr key={index}>
                  <td>{item.parameter}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="remarks-section">
          <h4>Remarks</h4>
          <p>{student.remarks}</p>
        </div>
      </div>
    </div>
  );
}
