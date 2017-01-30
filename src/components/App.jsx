import React, { Component } from 'react'
import NavBar from '../containers/NavBar'
import ProductList from '../containers/ProductList'
import Footer  from    '../components/Footer'
/**
 * Create App Component
 */
class App extends Component {
	render(){
		return (
           <div>
           	 <NavBar />
             <ProductList />
             <Footer />
           </div>
		)
	}
}

export default App 