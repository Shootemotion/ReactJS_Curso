
import { useContext, useEffect, useState } from 'react';
import {getSingleProduct} from '../../service/dataBase';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailContainer.css';
import { cartContext, } from '../../storage/cartContex';
import swal from 'sweetalert';

function ItemDetailContainer(props) {
  
const [producto, setProducto] = useState([]);
const {id} = useParams()
const {addItem, getCountInCarrito} = useContext(cartContext)
const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(
        ()=>{
            getSingleProduct(id).then((respuesta)=> {
                setProducto(respuesta)
        })
    },[id])


    function handleAddToCart(count) {
        addItem(producto, count);
        swal({
          title: "¡Producto agregado!",
          text: `Se ha agregado ${count} unidad(es) de ${producto.title} al carrito.`,
          icon: "success",
          button: "Seguir comprando",
        });
      }
      
 
    const countCart = getCountInCarrito(producto.id) 


    return (

      <div className="container-item-detail">
    
      <div className="item-detail-container">
        <h1>{props.title}</h1>
        <div className="card-detail-container">
      <div>
      <h1>{producto.title}</h1>
      </div>
      <div>
          <img src={producto.image }alt="Imagen del producto"/> 
      </div>
      <div>
          <h1>{producto.subcategory}</h1>
      </div>
      <div>
          <h3>{producto.category}</h3>
      </div>
      <div>
          <p>{producto.price}</p>
      </div>
          </div>
          <div className="card-itm">  

      <ItemCount 
      stock={producto.stock -countCart}
      countInCart={countCart}
      onAddToCart = {handleAddToCart} initialCount={0}
       />

      </div>  
      </div>
      <div className="item-detail-description">
      <div>
          <p>{producto.description}</p>

      </div>
      </div>
      </div>
    );
  }
  
export default ItemDetailContainer;


