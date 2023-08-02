import { NavLink } from 'react-router-dom';
import './Navbar.css';
export const Navbar = () => {
  return (
    <nav>
      <NavLink to="">restaurant</NavLink>
      <NavLink to="/favorites">
        <i className="fas fa-heart"></i>
      </NavLink>
    </nav>
  );
};
