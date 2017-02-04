import { generate } from 'randomstring'

export const Auth = store => next => action => {

    let prev = next(action)

    let filterUserData = (data) => {
        let newCart = {}
        Object.keys(data).map((key) => {
            if (localStorage.getItem('guest') || false) {
                //guest exists
                if (data[key].guestKey == localStorage.getItem('guest')) {
                    newCart[key] = data[key]
                }
            } else if (localStorage.getItem('user') || false) {
                //user exists
                if (data[key].userId == localStorage.getItem('user')) {
                    newCart[key] = data[key]
                }
            } else {
                //user not exists
                //create random key for guest
                localStorage.setItem('guest', generate(7))
            }
        })
        return newCart
    }

    switch (action.type) {
    case 'RECEIVE_CART':
        next({ type: 'RECEIVE_CART', payload: filterUserData(action.payload) })
        break
    case 'RECEIVE_WL':
        next({ type: 'RECEIVE_WL', payload: filterUserData(action.payload) })
        break
    default:

    }

    // if (localStorage.getItem('guest') || false) {
    //     //user exists

    // } else {
    //     //user not exists
    //     localStorage.setItem('guest', generate(7))
    // }
    //   if(isFetching) {
    //     next({type:"SHOW_LOADING"})
    //   }else{
    //     next({type:"HIDE_LOADING"})
    //   }

    return prev
}