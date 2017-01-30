import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

/**
 * Create Middleware
 */
const middleware = applyMiddleware(thunk)
/**
 * Create Store
 */
const store = createStore(reducers, middleware)

export default store