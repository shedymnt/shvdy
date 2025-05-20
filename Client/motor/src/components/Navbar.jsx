import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MotorShop</Link>
      </div>
      <div className="navbar-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/add" ? "active" : ""} to="/add">Add Motor</Link>
      </div>
    </nav>
  );
}