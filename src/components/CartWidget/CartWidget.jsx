import React, { useContext } from 'react';
import carritoImg from '../../img/Carrito.png';
import './CartWidget.css';
import { cartContext } from '../../storage/cartContex';
import { Link } from 'react-router-dom';

function CartWidget(props) {

  const { cart ,getTotalPoduct} = useContext(cartContext);
const qProductos = getTotalPoduct(cart)

  return (
    <div className="carrito">
      <Link to="/Cart" className="carrito">
        <div className="carrito-wrapper">
          <img className="imgCarrito" src={carritoImg} alt="Carrito de compras" />
          <span>{qProductos}</span>
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;
