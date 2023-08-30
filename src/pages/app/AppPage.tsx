import { Map } from "../../components/map/Map";
import { SideBar } from "../../components/sidebar/SideBar";
import styles from "./AppPage.module.css";

export function AppPage() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}
