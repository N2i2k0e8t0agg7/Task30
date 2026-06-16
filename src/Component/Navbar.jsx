import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex gap-6">
        <Link to="/">
          Home
        </Link>
        <Link to="/dashboard">
          Dashboard
        </Link>
        <Link to="/login">
          Login
        </Link>
        <Link to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;