import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { ROUTES } from "./utils/routes.utils";
import { ProductPage } from "./pages/product/ProductPage";
import { PricingPage } from "./pages/pricing/PricingPage";
import { LoginPage } from "./pages/login/LoginPage";
import { AppPage } from "./pages/app/AppPage";
import { useEffect, useState } from "react";
import { CityList } from "./components/city-list/CityList";
import { CountryList } from "./components/country-list/CountryList";
import CityDetail from "./components/city-detail/CityDetail";

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

const API_URL = "http://localhost:8000";

export default function App() {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.PRODUCTS_PAGE} element={<ProductPage />} />
        <Route path={ROUTES.PRICING_PAGE} element={<PricingPage />} />
        <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={ROUTES.APP_PAGE} element={<AppPage />}>
          <Route
            index
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route
            path="cities"
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<CityDetail />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
