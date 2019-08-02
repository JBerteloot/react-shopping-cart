import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import '../styles/Cart.css'
import { Provider } from 'react-redux'
import store from '../store'
import MaterialIcons from "material-icons-react"
import {setToggle} from "../components/Cart"

import Cart from './Cart'
import Home from './Home'

export default props => {





  return (
    <Provider store={store}>
      <div id="container">
          <Home />
          <Cart />
      </div>
    </Provider>
  )
}