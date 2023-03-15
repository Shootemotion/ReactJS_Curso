import React from 'react';
import carritoImg from '../../img/Carrito.png';
import './CartWidget.css';

function CartWidget(props) {
  return (
    <div className="carrito">
      <img className="imgCarrito" src={carritoImg} alt="Carrito de compras" />
    </div>
  );
}

export default CartWidget;