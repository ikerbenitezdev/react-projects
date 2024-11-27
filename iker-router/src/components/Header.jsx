import { Link } from "./Link";
import './Header.css'
export function Header() {
    return (
        <header className="navbar">
            <h3>Iker Router</h3>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}