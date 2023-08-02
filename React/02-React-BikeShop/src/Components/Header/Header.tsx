import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";

import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <nav className={styles.navBar}>
      <div>
        <NavLink to={"/"}>
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={styles.navLinks}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/bikes">BIKES</NavLink>
        <NavLink to="/gear">GEAR</NavLink>
        <NavLink to="/parts">PARTS</NavLink>
        <NavLink to="/tires">TIRES</NavLink>
        <NavLink to="/service-info">SERVICE-INFO</NavLink>
        <NavLink to="/catalogues">CATALOGUES</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBagShopping} />
      </div>
    </nav>
  );
};
