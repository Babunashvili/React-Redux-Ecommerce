import store from '../store'
import axios from 'axios'
import {fetchWishlist} from './fetchWishlist'

const requestRemoveFromWishlist = () => {
  return {
    type: 'REQUEST_REMOVE_FROM_WL',
  }
}

const receiveRemoveFromWishlist = (data) => {
   return {
    type: 'RECEIVE_REMOVE_FROM_WL',
    payload:(data === null) ? {} : data
  }
}

export  const removeFromWishlist = (key) => {
 	return dispatch => {
 		dispatch(requestRemoveFromWishlist())
 		 return axios.delete(`https://ecommerce-e4289.firebaseio.com/wishlist/${key}.json`)
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveRemoveFromWishlist(json.data))
 			dispatch(fetchWishlist())
 		})
 	}
 }