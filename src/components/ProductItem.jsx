import React, { Component } from 'react'
/**
 * Create ProductItem Component
 */
 class ProductItem extends Component{
 	render(){
 		return (
 			<div className="column is-one-quarter">
 		       <div className="card">
				  <div className="card-image">
				    <figure className="image is-4by3">
				      <img src="http://bulma.io/images/placeholders/1280x960.png" /> 
				    </figure>
				  </div>
				  <div className="card-content is-clearfix">
				    <div className="media">
				      <div className="media-content">
				        <h4 className="title is-4">John Smith</h4>
				      </div>
				    </div>
				    <div className="content">
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Phasellus nec iaculis mauris.
				    </div>
				    <a className="button is-success is-pulled-left">
				    	<i className="fa fa-shopping-cart" aria-hidden="true"></i>
				    </a>
				    <a className="button is-danger is-pulled-right">
				      <i className="fa fa-heart" aria-hidden="true"></i>
				    </a>
				  </div>
				</div>
			  </div>
 			)
 	}
 }
 export default ProductItem