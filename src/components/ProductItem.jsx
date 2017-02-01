import React, { Component } from 'react'
import { Link } from 'react-router'
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
				      <Link to={`product/${this.props.product.id}`}><img src={this.props.product.image} /></Link> 
				    </figure>
				  </div>
				  <div className="card-content is-clearfix">
				    <div className="media">
				      <div className="media-content">
								<h4 className="title is-4"><Link to={`product/${this.props.product.id}`}>{this.props.product.title}</Link></h4>
				      </div>
				    </div>
				    <div className="content">
				      <h4>Price: {this.props.product.price}$</h4>
				    </div>
						<a className="button is-success is-pulled-left" onClick={ () => { this.props.addToCart(this.props.product.id) } }>
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