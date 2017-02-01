import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import { Loading } from './middlewares/Loading'

/**
 * Create Middleware
 */
const middleware = applyMiddleware(thunk,Loading)
/**
 * Create Store
 */
const store = createStore(reducers, middleware)

export default store