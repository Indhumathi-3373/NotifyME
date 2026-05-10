import { Link } from 'react-router-dom';
import { Globe, Share2 } from 'lucide-react';
import '../styles/endnav.css';

export default function Endnavbar() {
  return (
    <nav className="endnav">
      <ul className="text">
        <li className="brand">ProjectFlow</li>
        <li className="copyright">© 2024 Project Time Scheduler. All rights reserved.</li>
      </ul>

      <ul className="endnavcenter">
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">Terms of Service</Link>
        </li>
        <li>
          <Link to="/">Contact Support</Link>
        </li>
      </ul>

      <ul className="endnavicons">
        <li>
          <Globe size={18} />
        </li>
        <li>
          <Share2 size={18} />
        </li>
      </ul>
    </nav>
  );
}
