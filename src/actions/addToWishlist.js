import store from '../store'
import axios from 'axios'
import {fetchWishlist} from './fetchWishlist'
/**
 * Create fetchAbout Action
 */
const requestAddToWishlist = () => {
  return {
    type: 'REQUEST_ADD_TO_WL',
  }
}

const receiveAddToWishlist = (data) => {
   return {
    type: 'RECEIVE_ADD_TO_WL',
    payload:data,
  }
}

export  const addToWishlist = (id) => {
 	return dispatch => {
 		dispatch(requestAddToWishlist())
 		 return axios.post('https://ecommerce-e4289.firebaseio.com/wishlist.json',{id:id,userId:1})
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveAddToWishlist(json.data))
 			dispatch(fetchWishlist())
 		})
 	}
 }