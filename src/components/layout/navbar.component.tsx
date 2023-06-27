import { Link } from "react-router-dom";
import "./navbar.css";
import navlogo from "../../imgs/front-final-logo.png";

/**
 * Navbar that contains all navigation links
 *
 * Uso: `<Navbar />`
 *
 * @returns {JSX.Element}
 */
const Navbar = () => {
  const logo = navlogo;

  return (
    <header>
      <div>
        <div className="max-w-[400px] max-h-[300px]">
          <Link to='/'> 
            <img src={logo} alt="Frontend IV Final Exam" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
