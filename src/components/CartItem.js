import React from "react"
import { remove} from "../actions/actions"

export default props => {
  function removeitem() {
    remove(props.item.id)
  }

  
  return (
    <>
      <img src={'/assets/' + props.item.sku + "_2.jpg"} />
      <button type="button" className="itemdelete" onClick={removeitem} >&times;</button>
      <div className="details">
        <p className="name">{props.item.title}</p>
        <p>{props.item.availableSizes[0]} | {props.item.style}</p>
        <p>Quatity: {props.qty} </p>
        <button type="button" className="itemdelete" onClick={removeitem} >&times;</button>
      </div>
      <div className="price">
        <p>$ {(props.item.price * props.qty).toFixed(2)} </p>
      </div>
      </>


    )
}