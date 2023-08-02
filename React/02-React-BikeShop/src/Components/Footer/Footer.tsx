import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterComponent } from "./FooterComponent";
import styles from "./footer.module.scss";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => (
  <div className={styles.footer}>
    <div>
      <h2>Social share</h2>
      <div className={styles.socialMedia}>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
    </div>
    <div>
      <FooterComponent heading="Event info" />
    </div>
    <div>
      <FooterComponent heading="Registration" />
    </div>
    <div>
      <FooterComponent heading="Schedule" />
    </div>
  </div>
);
