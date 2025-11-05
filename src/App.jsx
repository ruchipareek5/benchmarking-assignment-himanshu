import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './Pages/HomePage';
import { NavBar } from './Components/NavBar';
import StudentDetails from './Pages/StudentDetails';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
