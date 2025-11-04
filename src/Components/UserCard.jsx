import "./UserCard.css";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
}
