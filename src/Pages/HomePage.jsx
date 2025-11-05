import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; //  import navigation hook
import UserCard from "../Components/UserCard";
import "./HomePage.css";

export const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); //  create navigate instance

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  const filteredUsers = users.filter((user) =>
    [user.name, user.email, user.address.city]
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Navigate to student details when clicked
  const handleCardClick = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <div className="home-container">
      <h1 className="welcome">Welcome to the Student Dashboard</h1>
      <p className="subtitle">Search and click a student to view details</p>

      {/*  Search bar */}
      <input
        type="text"
        placeholder="Search by name, email, or city..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/*  Grid of students */}
      <div className="grid-container">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="card-click-wrapper"
              onClick={() => handleCardClick(user.id)} // navigate on click
            >
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <p className="no-results">No students found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
