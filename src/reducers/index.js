import { combineReducers } from 'redux'
import AboutReducer from './AboutReducer'
import ProductsReducer from './ProductsReducer'
/**
 * Combine Reducers In One Object
 */
export default combineReducers({
  AboutReducer: AboutReducer,
  ProductsReducer:ProductsReducer
}) 