import React, { useEffect, useState } from 'react';

import './ItemCount.css';
import Boton from '../Boton/Boton';



function ItemCount(props) {

  const [stockFinished, setStockFinished] = useState(false);
  const [count, setCount] = useState(props.initialCount || 0);


  useEffect(() => {
    if (props.stock - count < 0) {
      setStockFinished(true);
    } else {
      setStockFinished(false);
    }
  }, [props.stock, count]);

  const handleIncrement = () => {
    if (count < props.stock  || !stockFinished)  {
      setCount(count + 1);
    
 
  }
}
useEffect(() => {
  console.log("CONTADOR:", count);
  console.log("el Stok esta:"+stockFinished)
  console.log("Stok es:"+props.stock)
}, [count]);
  
const handleDecrement = () => {
  if (count > 0) {
    setCount(count - 1);
    console.log("el Stok esta:" + stockFinished);
    console.log("Stok " + props.stock);
    console.log("CONTADOR:" + count);

    if (stockFinished && count <= props.stock) {
      setStockFinished(false);
    }
  }
};

  return (
    <div className="item-count">
      <Boton className="item-count-button item-count-decrement" onClick={handleDecrement}text="-"> </Boton>
      <span>{count}</span>
      <Boton className="item-count-button item-count-increment" onClick={handleIncrement}text="+"> </Boton>
      <Boton
  className={`item-agree ${stockFinished ? 'desactivado' : ''}`}
  onClick={() => props.onAddToCart(count)}
  text="Agregar Carrito"
  disabled={stockFinished}
></Boton>
    </div>
  );
}

export default ItemCount;