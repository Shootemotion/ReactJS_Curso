import React, { useContext } from 'react';
import carritoImg from '../../img/Carrito.png';
import './CartWidget.css';
import { cartContext } from '../../storage/cartContex';


function CartWidget(props) {

  const { cart } = useContext(cartContext);


  
  return (
    <div className="carrito">
      <img className="imgCarrito" src={carritoImg} alt="Carrito de compras" />
      <span >{cart.length}</span>
    </div>
  );
}

export default CartWidget;