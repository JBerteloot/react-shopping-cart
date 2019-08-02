import React, { useState, useEffect }  from 'react'
import {add} from "../actions/actions"

export default props => {
  function addtocart() {
    add(props.id)
    console.log(props.id)
  }
  return (
    <>
      <img src={'/assets/' + props.sku + "_1.jpg"} />
      <p className="itemname">{props.title}</p>
      <p>$ {(props.price).toFixed(2)}</p>
      <button onClick={addtocart}>Add to Cart</button>
    </>
  )
}

