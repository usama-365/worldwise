import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { ROUTES } from "./utils/routes.utils";
import { RootLayout } from "./layouts/RootLayout";
import { ProductsPage } from "./pages/ProductsPage";
import { PricingPage } from "./pages/PricingPage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PAGE,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PRODUCTS_PAGE,
        element: <ProductsPage />,
      },
      {
        path: ROUTES.PRICING_PAGE,
        element: <PricingPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
