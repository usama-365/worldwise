import { NavLink } from "react-router-dom";

import { ROUTES } from "../../utils/routes.utils";
import styles from "./Navbar.module.css";
import { Logo } from "../logo/Logo";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={ROUTES.PRICING_PAGE}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PRODUCTS_PAGE}>Product</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to={ROUTES.LOGIN_PAGE}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
