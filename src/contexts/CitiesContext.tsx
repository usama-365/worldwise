import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const API_URL = "http://localhost:8000";

export type City = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
};

const DEFAULT_VALUES: {
  cities: City[];
  isLoading: boolean;
} = {
  cities: [],
  isLoading: false,
};

const CitiesContext = createContext({
  cities: DEFAULT_VALUES.cities,
  isLoading: DEFAULT_VALUES.isLoading,
});

export type CitiesProviderProps = PropsWithChildren;

export function CitiesProvider({ children }: CitiesProviderProps) {
  const [cities, setCities] = useState(DEFAULT_VALUES.cities);
  const [isLoading, setIsLoading] = useState(DEFAULT_VALUES.isLoading);

  useEffect(() => {
    const fetchCities = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}/cities`);
        const cities = (await res.json()) as City[];
        setCities(cities);
      } catch (e) {
        alert(e);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("Cities context consumed outside of provider");
  }
  return context;
}
