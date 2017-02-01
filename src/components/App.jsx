import React, { Component } from 'react'
import NavBar from '../containers/NavBar'
import ProductList from '../containers/ProductList'
import Footer  from    '../components/Footer'
import Helmet from "react-helmet"
/**
 * Create App Component
 */
class App extends Component {
	render(){
		return (
           <div>
		     <Helmet 
			    title="Home" 
			    titleTemplate="Ecommerce - %s"
			 />
           	 <NavBar />
                {this.props.children}
             <Footer />
           </div>
		)
	}
}

export default App 