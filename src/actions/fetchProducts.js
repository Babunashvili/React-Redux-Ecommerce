import store from '../store'
import axios from 'axios'
/**
 * Create fetchAbout Action
 */
const requestProducts = () => {
  return {
    type: 'REQUEST_PRODUCTS',
  }
}

const receiveProducts = (data) => {
   return {
    type: 'RECEIVE_PRODUCTS',
    payload:data,
  }
}

export  const fetchProducts = () => {
 	return dispatch => {
 		dispatch(requestProducts())
 		return axios.get('https://ecommerce-e4289.firebaseio.com/products.json')
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveProducts(json.data))
 		})
 	}
 }