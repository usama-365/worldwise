import { Link } from "react-router-dom";

import styles from "./Logo.module.css";
import { ROUTES } from "../../utils/routes.utils";

export function Logo() {
  return (
    <Link to={ROUTES.HOME_PAGE}>
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}
