import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/home/HomePage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { ROUTES } from "./utils/routes.utils";
import { ProductPage } from "./pages/product/ProductPage";
import { PricingPage } from "./pages/pricing/PricingPage";
import { LoginPage } from "./pages/login/LoginPage";
import { AppPage } from "./pages/app/AppPage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PAGE,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PRODUCTS_PAGE,
        element: <ProductPage />,
      },
      {
        path: ROUTES.PRICING_PAGE,
        element: <PricingPage />,
      },
      {
        path: ROUTES.LOGIN_PAGE,
        element: <LoginPage />,
      },
      {
        path: ROUTES.APP_PAGE,
        element: <AppPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
