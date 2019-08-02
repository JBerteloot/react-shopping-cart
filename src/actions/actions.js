import store from '../store'
import axios from 'axios'


axios.get("/api/products").then(resp => {
  store.dispatch({
    type: "GENERATE",
    payload : resp.data
  })
})

export function add(id) {
  store.dispatch({
    type: 'ADD_ITEM',
    payload: id
  })
}
