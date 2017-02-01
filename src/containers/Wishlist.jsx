import React, { Component } from 'react'
import { connect } from 'react-redux'
/**
 * Create Wishlist Container
 */
 class Wishlist extends Component{
 	render(){
 		return (
 			<section className="section">
				<div className="container">
					<div className="heading">
						<h1 className="title">My Wishlist</h1>
					</div>
				    Wishlist...
				</div>
 			</section>
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

 export default connect(stateProps)(Wishlist)