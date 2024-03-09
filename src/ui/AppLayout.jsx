import Header from "./Header.jsx";
import CartOverView from "../features/cart/CartOverview.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverView />
    </div>
  );
}

export default AppLayout;
