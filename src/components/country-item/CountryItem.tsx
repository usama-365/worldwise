import { Country } from "../country-list/CountryList";
import styles from "./CountryItem.module.css";

export type CountryItemProps = {
  country: Country;
};

export function CountryItem({ country }: CountryItemProps) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.name}</span>
    </li>
  );
}
