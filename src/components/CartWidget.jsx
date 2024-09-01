import { Link } from "react-router-dom";
import { useContext } from "react";
import { itemContext } from "../contexts/itemContext";
import Carrito from "../assets/carritoneon.png";

export const CartWidget = () => {
  const { items } = useContext(itemContext);
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/CheckOut" className="cart-widget">
      <img src={Carrito} height={40} className="cart-icon" alt="Carrito" />
      <span>{quantity}</span>
    </Link>
  );
};
