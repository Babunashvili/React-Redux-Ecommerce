import { combineReducers } from 'redux'
import AboutReducer from './AboutReducer'
import ProductsReducer from './ProductsReducer'
import LoadingReducer from './LoadingReducer'
/**
 * Combine Reducers In One Object
 */
export default combineReducers({
  AboutReducer: AboutReducer,
  ProductsReducer:ProductsReducer,
  LoadingReducer:LoadingReducer
}) 