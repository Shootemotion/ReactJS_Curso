import React, { useContext } from "react";
import "./ListadoEnCarrito.css"
import { cartContext } from '../../storage/cartContex';
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../service/dataBase";
import LoginForm from "../Loggin/Loggin";
import Boton from "../Boton/Boton";

function ListadoEnCarrito() {
  const context = useContext(cartContext);
  const { cart, getTotalPrice, removeItem } = context;
 const precioTotal = getTotalPrice(cart)

  const navigateTo = useNavigate();

  async function handleCheckout(userData) {
    const order = {
      items: cart,
      buyer: userData,
      total: precioTotal,
      date: new Date(),
    };

    const orderId = await createOrder(order);
    console.log(orderId)
    // navigateTo(`/checkout/${orderId}`);
  }

  return (
    <>
    <div className="carritoContainer">
      <h1>Revisa Tu Compra!</h1>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <Boton color="#c63224" className="botonEliminar" onClick={() => removeItem(item.id)} text="X">
             
                </Boton>
              </td>
              <th>{isNaN(item.price) || isNaN(item.count) ? 0 : parseFloat(item.price) * parseInt(item.count).toFixed(2)} </th>

            </tr>
          ))}
        </tbody>
      </table>
      <div className="cartList_detail">
        <h4>{`El precio total  es  $${precioTotal.toFixed(2)}`}</h4>
      </div>
      <LoginForm onLogin={handleCheckout} />
      </div>
    </>
  );
}

export default ListadoEnCarrito;