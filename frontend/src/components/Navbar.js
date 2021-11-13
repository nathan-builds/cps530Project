import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="link" to="/page1">
        {" "}
        Page 1
      </Link>
      <Link className="link" to="/page2">
        {" "}
        Page 2
      </Link>
      <Link className="link" to="/page3">
        {" "}
        Page 3
      </Link>
      <Link className="link" to="/page4">
        {" "}
        Page 4
      </Link>
      <Link className="link" to="/page5">
        {" "}
        Page 5
      </Link>
      <Link className="link" to="/page6">
        {" "}
        Page 6
      </Link>
    </nav>
  );
};

export default Navbar;
