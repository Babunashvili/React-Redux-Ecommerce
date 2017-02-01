import { combineReducers } from 'redux'
import AboutReducer from './AboutReducer'
import ProductsReducer from './ProductsReducer'
import ProductReducer from './ProductReducer'
import LoadingReducer from './LoadingReducer'
import CartReducer from './CartReducer'
import WishlistReducer from './WishlistReducer'
/**
 * Combine Reducers In One Object
 */
export default combineReducers({
  AboutReducer: AboutReducer,
  ProductsReducer:ProductsReducer,
  ProductReducer:ProductReducer,
  LoadingReducer:LoadingReducer,
  CartReducer:CartReducer,
  WishlistReducer:WishlistReducer
}) 