import store from '../store'
import axios from 'axios'
/**
 * Create fetchAbout Action
 */
const requestPosts = () => {
  return {
    type: 'REQUEST_ABOUT',
  }
}

const receiveAbout = (data) => {
   return {
    type: 'RECEIVE_ABOUT',
    payload:data,
  }
}

export  const fetchAbout = () => {
 	return dispatch => {
 		dispatch(requestPosts())
 		return axios.get('https://ecommerce-e4289.firebaseio.com/pages/about.json')
 		.then(response => response)
 		.then(json => {
 			dispatch(receiveAbout(json.data))
 		})
 	}
 }