import {Link} from "react-router-dom";
import './navbar.css';

/**
 * Navbar that contains all navigation links
 *
 * Uso: `<Navbar />`
 *
 * @returns {JSX.Element}
 */
const Navbar = () => {

    return <header>
            <div>
                <div>
                    <h2>Frontend IV Final Exam</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        <li><Link to="/details">Details</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Navbar