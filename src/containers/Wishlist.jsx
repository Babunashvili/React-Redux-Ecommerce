import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
/**
 * Create Wishlist Container
 */
 class Wishlist extends Component{
 	render(){
 		return (
			<div>
                <Helmet  title="My Wishlist" />
				<section className="section">
					<div className="container">
						<div className="heading">
							<h1 className="title">My Wishlist</h1>
						</div>
						Wishlist...
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

 export default connect(stateProps)(Wishlist)