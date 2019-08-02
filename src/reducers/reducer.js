const initialState = {
  products: [],
  cart: []
}



export default function(state = initialState, action) {
  switch (action.type) {
    case "GENERATE" :
        return {...state, products:[...action.payload]}

    case 'ADD_ITEM':
      return {...state, cart:[state.products.find(item => item.id === action.payload), ...state.cart]}

    default:
      return state
  }
}