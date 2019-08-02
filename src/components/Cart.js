import React, { useState } from 'react'
import MaterialIcons from "material-icons-react"
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default props => {
 
  const [toggle, setToggle] = useState('hidden')

  const cart = useSelector(appState => appState.cart)  
  
  return (
    <>
      <div  className={toggle} >  
        <h1>
          <MaterialIcons icon="shopping_cart" /> Cart
        </h1>

        <ul>
          {cart.map(cartitem => (
            <li key={"cartitem" + cartitem.id} className="cartitem">
              <CartItem {...cartitem}/>
            </li>
            ))}
        </ul>


        <div className="total">
          <div>
            <h2>SUBTOTAL</h2>
            <h3 className="price">$$$$</h3>
          </div>
          <button>Checkout</button>
        </div>
      

        <button className="closecart" onClick={e => toggle === setToggle('hidden')}>X</button>
       
      </div>
      <button type="button" className="showcart" onClick={e => toggle === 'hidden' ? setToggle('cart') : setToggle('hidden')}><i className="material-icons md-48">shopping_cart</i></button>
    </>
  )
}