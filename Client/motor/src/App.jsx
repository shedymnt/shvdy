import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import AddMotor from "./components/addMotor.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMotor />} />
      </Routes>
    </Router>
  );
}
