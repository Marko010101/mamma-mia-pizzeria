import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
  return (
    <header>
      <Link to="/">Mamma Mia Pizzeria Co.</Link>

      <SearchOrder />
      <p>Marko</p>
    </header>
  );
}

export default Header;
