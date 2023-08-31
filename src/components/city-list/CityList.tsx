import { CityItem } from "../city-item/CityItem";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import styles from "./CityList.module.css";
import { useCities } from "../../contexts/CitiesContext";

export function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) {
    return <Spinner />;
  } else if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  } else {
    return (
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    );
  }
}
