import store from '../store'
import axios from 'axios'
import { fetchWishlist } from './fetchWishlist'
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
        payload: data,
    }
}
const checkUserOrGuest = (productId) => {
    if (localStorage.getItem('user') || false) {
        return { id: productId, userId: localStorage.getItem('user') }
    } else if (localStorage.getItem('guest') || false) {
        return { id: productId, guestKey: localStorage.getItem('guest') }
    }
}

export const addToWishlist = (productId) => {
    return dispatch => {
        dispatch(requestAddToWishlist())
        return axios.post('https://ecommerce-e4289.firebaseio.com/wishlist.json', checkUserOrGuest(productId))
            .then(response => response)
            .then(json => {
                dispatch(receiveAddToWishlist(json.data))
                dispatch(fetchWishlist())
            })
    }
}