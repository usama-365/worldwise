import { City } from "../../App";
import { CityItem } from "../city-item/CityItem";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import styles from "./CityList.module.css";

export type CityListProps = {
  cities: City[];
  isLoading: boolean;
};

export function CityList({ cities, isLoading }: CityListProps) {
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
