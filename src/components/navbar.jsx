import { Link } from "react-router-dom";
import { Search , Bell, Settings} from "lucide-react";
import "../styles/navbar.css"; 
export default function Navbar() {
  return (
    <header className="navbar">
      <h1>NotifyMe</h1>
      <nav className="center">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
      <nav className="corner">
        <ul>
            <li className="search-box">
                <Search size={15} color="grey" className="search-icon"/>
                <input className="search-bar" type="text" placeholder="search projects..."/>
            </li>
            <li><Link className="create-project-btn" to="/signup">Create Projects</Link></li>
            <li>
                <Bell size={23}className="bell"/>
            </li><li className="settings-item"><Settings size={23} className="settings"/></li>

        </ul>
      </nav>
    </header>
  );
}
