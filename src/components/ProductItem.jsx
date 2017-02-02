import React, { Component } from 'react'
import { Link } from 'react-router'
/**
 * Create ProductItem Component
 */
 class ProductItem extends Component{
	
	checkWishlist(id){
		let check = null
		Object.keys(this.props.wishlist).map((key) => {
        if(this.props.wishlist[key].id == id) check = true
		})
		return check
	}
	getKeyById(id){
		let productKey = ''
		 Object.keys(this.props.wishlist).map((key) => {
        if(this.props.wishlist[key].id == id) productKey = key
		})
		return productKey
	}
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
						<button className="button is-success is-pulled-left" onClick={ () => { this.props.addToCart(this.props.product.id) } }  >
				    	<i className="fa fa-shopping-cart" aria-hidden="true"></i>
				    </button>
						<button className={`button is-pulled-right ${ (this.checkWishlist(this.props.product.id)) ? 'is-info' : 'is-primary' }`} 
						    onClick={ (e) => {	
									(this.checkWishlist(this.props.product.id)) ? 
									    this.props.removeFromWishlist(this.getKeyById(this.props.product.id)) : 
											this.props.addToWishlist(this.props.product.id) } } >
				      <i className="fa fa-heart" aria-hidden="true"></i>
				    </button>
				  </div>
				</div>
			  </div>
 			)
 	}
 }
 export default ProductItem