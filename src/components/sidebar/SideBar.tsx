import { Outlet } from "react-router-dom";
import { Logo } from "../logo/Logo";
import styles from "./Sidebar.module.css";
import { AppNavigation } from "../app-navigation/AppNavigation";

export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNavigation />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
