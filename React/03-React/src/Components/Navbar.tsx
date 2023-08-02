import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-outter">
      <div className="nav">
        <Link to={"/"}>
          <h1>music db</h1>
        </Link>
      </div>
    </div>
  );
};
