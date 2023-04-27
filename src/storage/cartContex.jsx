
import { createContext,   useState } from 'react';
import swal from 'sweetalert';

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
                console.log(newCart)
                } 



        function getCountInCarrito(id){
        const item =  cart.find((itemEnCarrito)=> itemEnCarrito.id===id)
        return item !== undefined ? item.count:0
        }




        function getTotalPrice() {
            return cart.reduce((total, item) => total + parseFloat(item.price) * parseInt(item.count), 0);
          }

      

        function getTotalPoduct() {
            return cart.reduce((total, item) => total + parseInt(item.count), 0);
          }
          




        function removeItem(productId){
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
              const newCart = [...cart];
              if (newCart[itemIndex].count > 0) {
                // Eliminar el producto por completo si la cantidad es > 1
                newCart.splice(itemIndex, 1);
            }
            
            setCart(newCart);
            swal({
              title: 'Producto eliminado',
              text: 'El producto ha sido eliminado del carrito',
              icon: 'success',
              button: 'Aceptar'
            });
          }
        }
        



return(
<Provider value={{cart,addItem,estaEnElCarrito,getTotalPoduct,removeItem,getTotalPrice, getCountInCarrito }}>
{props.children}
</Provider>
)
}




export  {cartContext, CartProvider};