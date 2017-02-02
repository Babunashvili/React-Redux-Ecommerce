import store from '../store'
import axios from 'axios'
/**
 * Create fetchAbout Action
 */
const requestWishlist = () => {
  return {
    type: 'REQUEST_WL',
  }
}

const receiveWishlist = (data) => {
   return {
    type: 'RECEIVE_WL',
		payload:(data === null) ? {} : data,
  }
}

export  const fetchWishlist = () => {
 	return dispatch => {
 		dispatch(requestWishlist())
 		return axios.get('https://ecommerce-e4289.firebaseio.com/wishlist.json')
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveWishlist(json.data))
 		})
 	}
 }