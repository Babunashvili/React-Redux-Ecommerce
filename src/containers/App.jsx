import React, { Component } from 'react'
import NavBar from '../containers/NavBar'
import ProductList from '../containers/ProductList'
import Footer  from    '../components/Footer'
import Helmet from "react-helmet"
import Laoding from '../components/Laoding'
import { connect } from 'react-redux'
/**
 * Create App Component
 */
class App extends Component {
	render(){
		return (
           <div>
		     <Helmet titleTemplate="Ecommerce - %s" />
			 <Laoding loading={this.props.loading} />
           	 <NavBar />
                {this.props.children}
             <Footer />
           </div>
		)
	}
}

 const stateProps = (state) => {
 	return { 
      loading:state.LoadingReducer.isVisible
 	}
 }

export default connect(stateProps)(App)
