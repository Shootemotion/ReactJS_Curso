
import './ItemListContainer.css';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import {getProducts_, getProducts_Category} from '../../service/dataBase';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const {categoryId}= useParams()
  console.log(categoryId)
  
useEffect(()=> {
  if(!categoryId){
        getProducts_().then((respuesta)=> {
            setProductos(respuesta)
    })
  }

  else{
    getProducts_Category(categoryId).then(
      (respuesta) => setProductos(respuesta)
    )
  }
  
},[categoryId])

if(productos.length===0){
 return <Loader/>
  
};


    return (
      <div className="item-list-container">
        <h1>{props.title}</h1>
        <div className="card-container">
          {productos.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              stock={product.stock}
             />
          
          ))}
        </div>
    
      </div>
    );
  
  }
  
  

export default ItemListContainer;
