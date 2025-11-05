import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

export default function AddStudent() {
  const navigate = useNavigate();

  return (
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <p className="subtitle">Fill in the details below to add a new student.</p>

      <form className="add-student-form">
        <div className="form-group">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter valid email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city name"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="submit-btn">
            Add Student
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
