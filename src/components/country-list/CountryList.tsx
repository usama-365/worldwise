import { City, useCities } from "../../contexts/CitiesContext";
import { CountryItem } from "../country-item/CountryItem";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import styles from "./CountryList.module.css";

export type Country = {
  name: string;
  emoji: string;
};

const filterCountries = (cities: City[]): Country[] =>
  cities.reduce<Country[]>((countries, city) => {
    if (countries.map((country) => country.name).includes(city.country))
      return countries;
    else return [...countries, { name: city.country, emoji: city.emoji }];
  }, []);

export function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  else if (cities.length === 0)
    return (
      <Message message="Add your first item by clicking no a city on map" />
    );
  const countries = filterCountries(cities);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.emoji} country={country} />
      ))}
    </ul>
  );
}
