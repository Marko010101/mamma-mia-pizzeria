import Header from "./Header.jsx";
import CartOverView from "../features/cart/CartOverview.jsx";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverView />
    </div>
  );
}

export default AppLayout;
