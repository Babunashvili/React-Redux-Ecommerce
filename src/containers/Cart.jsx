import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
/**
 * Create Cart Container
 */
 class Cart extends Component{
 	render(){
 		return (
			<div>
			    <Helmet  title="My Cart" />
				<section className="section">
					<div className="container">
						<div className="heading">
							<h1 className="title">My Cart</h1>
						</div>
						cart
					</div>
				</section>
			</div>
 			)
    }
}
/**
 * Insert Props Into Component
 */
 const stateProps = (state) => {
 	return { 

 	}
 }

 export default connect(stateProps)(Cart)