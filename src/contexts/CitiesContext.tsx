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
  currentCity: City | undefined;
  getCity: (id: string) => Promise<void>;
} = {
  cities: [],
  isLoading: false,
  currentCity: undefined,
  getCity: async function () {},
};

const CitiesContext = createContext({
  cities: DEFAULT_VALUES.cities,
  isLoading: DEFAULT_VALUES.isLoading,
  currentCity: DEFAULT_VALUES.currentCity,
  getCity: DEFAULT_VALUES.getCity,
});

export type CitiesProviderProps = PropsWithChildren;

export function CitiesProvider({ children }: CitiesProviderProps) {
  const [cities, setCities] = useState(DEFAULT_VALUES.cities);
  const [isLoading, setIsLoading] = useState(DEFAULT_VALUES.isLoading);
  const [currentCity, setCurrentCity] = useState(DEFAULT_VALUES.currentCity);

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

  async function getCity(id: string) {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/cities/${id}`);
      const cities = (await res.json()) as City;
      setCurrentCity(cities);
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
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
