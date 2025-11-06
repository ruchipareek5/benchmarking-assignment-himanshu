import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { studentDetails } from "../Data/studentDetailsData";
import "./StudentDetails.css";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Check if it's a custom student from studentDetailsData
  const customStudent = studentDetails.find((s) => s.id === parseInt(id));
  
  // Check if it's a newly added student from localStorage
  const addedStudents = JSON.parse(localStorage.getItem("addedStudents")) || [];
  const addedStudent = addedStudents.find((s) => s.id === parseInt(id));

  const student = customStudent || addedStudent;

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

  // Check if it's a basic student (newly added) or detailed student (from API)
  const isBasicStudent = !customStudent;

  return (
    <div className="student-details-container">
      <button onClick={() => navigate("/")} className="back-btn">
        ← Back to Home
      </button>

      <div className="student-card">
        <h2>Student Profile</h2>

        <div className="student-profile">
          <img
            src={student.profileImg || "/default-avatar.jpg"}
            alt={student.name}
            className="student-image"
          />
          <div className="student-info">
            <div>
              <h3>{student.name}</h3>
            <p>{student.email}</p>
            <p>{student.address?.city || student.city}</p>
            </div>

            {isBasicStudent ? (
              <div className="student-meta">
                <p><strong>Status:</strong> Basic Profile</p>
                <p><em>Detailed assessment data not available for newly added students.</em></p>
              </div>
            ) : (
              <div className="student-meta">
                <p><strong>Assessment Date:</strong> {student.assessmentDate}</p>
                <p><strong>Average Score:</strong> {student.averageScore}/100</p>
                <p><strong>Last Score:</strong> {student.lastScore}/100</p>
              </div>
            )}
          </div>
        </div>

        {!isBasicStudent && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}