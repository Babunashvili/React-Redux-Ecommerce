/**
 * Products Reducer
 * @param  {Array} state 
 * @param  {Object} action
 */
const ProductsReducer = (state = [], action) => {
   switch(action.type){
   	  case 'REQUEST_PRODUCTS':
        return state
   	  break
      case 'RECEIVE_PRODUCTS':
        return action.payload
   	  break
   	  default:
   	  return state
   }
}
export default ProductsReducer