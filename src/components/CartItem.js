import React from "react"

export default props => {

  console.log(props)
  return (
    <>
      <img src={'/assets/' + props.sku + "_2.jpg"} />
        <div className="details">
          <p className="name">{props.title}</p>
          <p>{props.availableSizes[0]} | {props.style}</p>
          <p>Quatity: </p>
          <button type="button" className="itemdelete" >&times;</button>
        </div>
        <div className="price">
          <p className="price">$ {(props.price).toFixed(2)} </p>
        </div>
      </>


    )
}