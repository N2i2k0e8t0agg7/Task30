import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="bg-black text-white flex p-4 justify-evenly items-center">
        <Link to="/" className="navhover">Home</Link>
        <Link to="/dashboard" className="navhover">Dashboard</Link>
        <Link to="/login" className="navhover">Login</Link>
        <Link to="/signup" className="navhover">Signup</Link>
    </nav>
  );
}

export default Navbar;