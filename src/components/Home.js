import React, {useEffect, useState} from 'react'
import MaterialIcons from "material-icons-react"
import { useSelector } from 'react-redux'

import Item from './item'
import Cart from './Cart'


export default props => {  
  const products = useSelector(appState => appState.products)

  const count = products.length

  return (
    <div id="page">
      <header>
        <p>{count} product(s) found.</p>
        <h3>Order by</h3>
        <select>Order
          <option>Select</option>
          <option>Lowest to highest</option>
          <option>Highest to lowest</option>
        </select>
      </header>
      <main>
        <aside id='sizes'>
          <p>Sizes:</p>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>ML</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </aside>
        
          <ul id="itemlist">
          {products.map(item => (
            <li key={'item' + item.id} className="item">
              <Item {...item} />
            </li>
          ))}
          </ul>
        
      </main>
    </div>
  )
}