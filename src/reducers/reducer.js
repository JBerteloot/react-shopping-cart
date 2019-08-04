const initialState = {
  products: [],
  cart: []
}



export default function(state = initialState, action) {
  switch (action.type) {
    case "GENERATE" :
        return {...state, products:[...action.payload]}

    case 'ADD_ITEM':
      if (state.cart.find(cartitem => cartitem.item.id === action.payload)) {
        return {...state, cart: state.cart.map(cartitem => 
          {return {
            qty: cartitem.item.id === action.payload ? cartitem.qty +1 : cartitem.qty, 
            item: cartitem.item}})}
      } else {
        return {
          ...state, 
          cart:[{item: state.products.find(item => item.id===action.payload), qty: 1}, ...state.cart]}} 
      
      case 'REMOVE_TASK':
      return {...state, cart: state.cart.filter(cartitem => action.payload !== cartitem.item.id)}
      
    default:
      return state
  }
}