import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

export default function AddStudent() {
  const navigate = useNavigate();

  // Form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission 
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = formData;

    // Basic validation
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear error once valid
    setError("");
  };

  return (
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <p className="subtitle">Fill in the details below to add a new student.</p>

      <form onSubmit={handleSubmit} className="add-student-form">
        {error && <p className="error-msg">{error}</p>}

        <div className="form-group">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city name"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
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
