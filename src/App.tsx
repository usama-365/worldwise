import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { ROUTES } from "./utils/routes.utils";
import { ProductPage } from "./pages/product/ProductPage";
import { PricingPage } from "./pages/pricing/PricingPage";
import { LoginPage } from "./pages/login/LoginPage";
import { AppPage } from "./pages/app/AppPage";
import { CityList } from "./components/city-list/CityList";
import { CountryList } from "./components/country-list/CountryList";
import { CityDetail } from "./components/city-detail/CityDetail";
import Form from "./components/form/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.PRODUCTS_PAGE} element={<ProductPage />} />
          <Route path={ROUTES.PRICING_PAGE} element={<PricingPage />} />
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={ROUTES.APP_PAGE} element={<AppPage />}>
            <Route index element={<Navigate to={"cities"} replace />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="cities/:id" element={<CityDetail />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
