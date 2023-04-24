import React, { useState } from 'react';
import './Item.css';
import MyButton from '../MyButton/MyButton';
import { Link } from 'react-router-dom';



export default function Item(props) {
const [fav, setFav] = useState(false)

function handleFav(){
  setFav(!fav)
  console.log("Botón de corazón clickeado. Favorito:", !fav);
}
let classNameFav = fav ? "card icon fav" : "card icon";

  return (
    <div className="card">
      <button onClick={handleFav} className={classNameFav}>
        ❤
      </button>
      <div className={props.stock===0? 'card-img':'card-img disabled'} >

      <img src={props.image} alt={props.title} />
      </div>
      <div className="card-body">
        <div className='card-title'>
        <h2>{props.title}</h2>
        </div>
        <div className='card-descrip'>
        <p>{props.description}</p>
        </div>
        <div className='card-Price'>
        <h3>{props.price}</h3>
        </div>
     
    

      </div>
      {props.stock >0 &&(
      <Link to={`/detail/${props.id}`} >
         <MyButton label ="Ver Detalle"> </MyButton>
         </Link>
         )}
    </div>
  );
}


