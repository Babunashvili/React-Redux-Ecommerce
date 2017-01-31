/**
 * About Reducer
 * @param  {Object} state 
 * @param  {Object} action
 */
const itemsReducer = (state = {title:'',content:''}, action) => {
   switch(action.type){
   	  case 'REQUEST_ABOUT':
        return state
   	  break
      case 'RECEIVE_ABOUT':
        return Object.assign({}, state, action.payload)
   	  break
   	  default:
   	  return state
   }
}
export default itemsReducer