import { useNavigate } from "react-router-dom"; 
import "./UserCard.css";

export default function UserCard({ user }) {
  const navigate = useNavigate(); 

  const handleClick = () => {

    navigate(`/student/${user.id}`);
  };

  return (
    <div className="user-card" onClick={handleClick}> 
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address?.city}</p>
    </div>
  );
}