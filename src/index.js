import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import About from './containers/About'
import Cart from './containers/Cart'
import Wishlist from './containers/Wishlist'
import ProductList from './containers/ProductList'
import SingleProduct from './containers/SingleProduct'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
/**
 * Render App
 */
ReactDOM.render(
   <Provider store={store}>
     <Router history={hashHistory}> 
	     <Route path="/" component={App} >
	         <IndexRoute component={ProductList} />
             <Route path="about" component={About} />
             <Route path="cart" component={Cart} />
             <Route path="wishlist" component={Wishlist} />
             <Route path="product/:id" component={SingleProduct} onEnter={ () => store.dispatch({type:'CLEAR_PRODUCT'}) } />
	     </Route>
	 </Router>  	
	</Provider>,
  document.getElementById('root')
);