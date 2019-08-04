import React, { useState } from 'react'
import MaterialIcons from "material-icons-react"
import { useSelector } from 'react-redux'
import CartItem from './CartItem'



export default props => {
 
  const [toggle, setToggle] = useState('hidden')

  const cart = useSelector(appState => appState.cart)  
  const total = cart.reduce((acc, cartitem) => {
    return acc + cartitem.item.price * cartitem.qty; 
    }, 0)

  const itemqty = cart.reduce((acc, cartitem) => {
    return acc + cartitem.qty; 
    }, 0)

  return (
    <>
      <div  className={toggle} > 
      <MaterialIcons icon="shopping_cart"/>
        <div className="cartheader">
          <i className="material-icons md-48">shopping_cart</i>
          <h1>Cart</h1>
          <p className="itemqty">{itemqty}</p>
        </div> 

        <ul className="cartlist">
          {cart.map(cartitem => (
            <li key={"cartitem" + cartitem.item.id} className="cartitem">
              <CartItem {...cartitem}/>
            </li>
            ))}
        </ul>


        <div className="total">
          <div>
            <h2>SUBTOTAL</h2>
            <h3 className="price">$ {total.toFixed(2)}</h3>
          </div>
          <button>Checkout</button>
        </div>
      

        <button className="closecart" onClick={e => toggle === setToggle('hidden')}>X</button>
       
      </div>

      <button type="button" className="showcart" onClick={e => toggle === 'hidden' ? setToggle('cart') : setToggle('hidden')}><i className="material-icons md-48">shopping_cart</i></button>
    </>
  )
}