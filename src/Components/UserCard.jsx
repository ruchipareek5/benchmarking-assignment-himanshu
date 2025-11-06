import { useNavigate } from "react-router-dom"; 
import { studentDetails } from "../Data/studentDetailsData";
import "./UserCard.css";
import {MdEmail} from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
export default function UserCard({ user }) {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/student/${user.id}`);
  };

  // Find matching student in local data to get the image
  const getProfileImage = () => {
    const localStudent = studentDetails.find(s => s.id === user.id);
    return localStudent?.profileImg || user.profileImg || "/default-avatar.jpg";
  };

  return (
    <div className="user-card" onClick={handleClick}> 
      <img 
        src={getProfileImage()} 
        alt={user.name}
        className="user-image"
      />
     <div className="user-details">
       <h3 className="user-name">{user.name}</h3>
      <div className="user-email"><MdEmail  className="email-icon" />
            <p className="email-text" >{user.email}</p>
            </div>

      <div className="user-city"><MdLocationPin  className="email-icon" />
            <p className="city-text" >{user.address?.city || user.city}</p>
            </div>
      
     </div>
    </div>
  );
}