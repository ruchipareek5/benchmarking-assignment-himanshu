import React, { useEffect, useState } from "react";
import UserCard from "../Components/UserCard";
import "./HomePage.css";

export const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // search text

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

  return (
    <div className="home-container">
      <h1 className="welcome">Welcome to the Student Dashboard</h1>
      <p className="subtitle">Search and click a student to view details</p>

      {/*Search bar */}
      <input
        type="text"
        placeholder="Search by name, email, or city..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

     
      <div className="grid-container">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="no-results">No students found</p>
        )}
      </div>
    </div>
  );
};
