import store from '../store'
import axios from 'axios'
/**
 * Create fetchAbout Action
 */
const requestCart = () => {
    return {
        type: 'REQUEST_CART',
    }
}

const receiveCart = (data) => {
    return {
        type: 'RECEIVE_CART',
        payload: (data === null) ? {} : data
    }
}

export const fetchCart = () => {
    return dispatch => {
        dispatch(requestCart())
        return axios.get('https://ecommerce-e4289.firebaseio.com/cart.json')
            .then(response => response)
            .then(json => {
                dispatch(receiveCart(json.data))
            })
    }
}