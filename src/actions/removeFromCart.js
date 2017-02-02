import store from '../store'
import axios from 'axios'
import {fetchCart} from './fetchCart'

const requestRemoveFromCart = () => {
  return {
    type: 'REQUEST_REMOVE_FROM_CART'
  }
}

const receiveRemoveFromCart = (data) => {
   return {
    type: 'RECEIVE_REMOVE_FROM_CART'
  }
}

export  const removeFromCart = (key) => {
 	return dispatch => {
 		dispatch(requestRemoveFromCart())
 		 return axios.delete(`https://ecommerce-e4289.firebaseio.com/cart/${key}.json`)
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveRemoveFromCart(json.data))
 			dispatch(fetchCart())
 		})
 	}
 }