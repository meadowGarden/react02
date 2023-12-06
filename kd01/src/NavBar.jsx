import { Link } from "react-router-dom";


const NavBar = () => {


    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/posts">posts</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                <li>
                    <Link to="/events">events</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;