import { Logo } from "../logo/Logo";
import { Navbar } from "../navbar/Navbar";
import styles from "./Sidebar.module.css";

export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      {/* <Navbar /> */}
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
