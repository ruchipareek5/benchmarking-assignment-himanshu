import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar"; 
import HomePage from "./Pages/HomePage";
import StudentDetails from "./Pages/StudentDetails";
import AddStudent from "./Pages/AddStudent";

export default function App() {
  return (
    <Router>
     
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}





