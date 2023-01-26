import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navigation;
