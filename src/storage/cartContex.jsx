
import { createContext,   useState } from 'react';

const cartContext = createContext({cart:[]})
const Provider = cartContext.Provider;


function CartProvider(props){
    const [cart,setCart]= useState([])
    const newCart = [...cart]

    

function estaEnElCarrito(id){
    return cart.some((itemEnCarrito)=> itemEnCarrito.id===id)
}




function addItem(product, countDelContador){
    // .some devuelve un booleano. true o false
   if(estaEnElCarrito(product.id)){
    const itemIndex = cart.findIndex(
        (itemEnCarrito)=> itemEnCarrito.id===product.id)
        newCart[itemIndex].count+= countDelContador}
        else{
            newCart.push({...product,count:countDelContador})
        }
    setCart(newCart)
    } 

function getCountInCarrito(id){

const item =  cart.find((itemEnCarrito)=> itemEnCarrito.id===id)

return item !== undefined ? item.count:0
}


function precioCarrito (){
    return 111
}

function removeItem(){
}



    return(
    <Provider value={{cart,addItem,precioCarrito,estaEnElCarrito,removeItem, getCountInCarrito }}>
        {props.children}
    </Provider>
    )
}




export  {cartContext, CartProvider};