import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Bell, Settings } from "lucide-react";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCreateTaskPage = location.pathname !== "/create_task";
  const gotofeature = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById("Feature")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <header className="navbar">
      <h1>NotifyMe</h1>
      <nav className="center">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/schedule">Current Tasks</Link>
          </li>
          <li>
            <Link to="/" onClick={gotofeature}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="corner">
        <ul>
          {isCreateTaskPage && (
            <li className="search-box">
              <Search size={15} color="grey" className="search-icon" />
              <input
                className="search-bar"
                type="text"
                placeholder="search Tasks..."
              />
            </li>
          )}
          {isCreateTaskPage && (
            <li>
              <Link className="create-project-btn" to="/create_task" >
                Create Tasks
              </Link>
            </li>
          )}
          <li>
            <Link className="create-project-btn" to="/">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
