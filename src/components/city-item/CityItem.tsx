import styles from "./CityItem.module.css";
import { City, useCities } from "../../contexts/CitiesContext";
import { Link } from "react-router-dom";

export type CityItemProps = {
  city: City;
  key: number;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export function CityItem({ city }: CityItemProps) {
  const {
    emoji,
    cityName,
    date,
    id,
    position: { lat, lng },
  } = city;
  const { currentCity } = useCities();

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity &&
          currentCity.id === city.id &&
          styles["cityItem--active"]
        }`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
