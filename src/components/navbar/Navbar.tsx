import { NavLink } from "react-router-dom";

import { ROUTES } from "../../utils/routes.utils";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME_PAGE}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PRODUCTS_PAGE}>Products</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PRICING_PAGE}>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}
