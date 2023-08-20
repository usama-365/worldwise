import { Outlet } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
