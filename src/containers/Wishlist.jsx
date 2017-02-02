import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchWishlist } from '../actions/fetchWishlist'
import { fetchProducts } from '../actions/fetchProducts'
import { Link } from 'react-router'
/**
 * Create Wishlist Container
 */
 class Wishlist extends Component{
	getItemById(id){
	  let obj = {}
      this.props.products.map((item) => {
         if(item.id == id) obj = item
	  })
	  return obj
	}
	componentDidMount(){
        const { dispatch } = this.props
        dispatch(fetchProducts())
        dispatch(fetchWishlist())
	}
 	render(){
 		return (
			<div>
                <Helmet  title="My Wishlist" />
				<section className="section">
					<div className="container">
						<div className="heading">
							<h1 className="title">My Wishlist</h1>
						</div>
						<table className="table">
							<thead>
								<tr>
								<th><abbr>ID</abbr></th>
								<th><abbr>Title</abbr></th>
								<th>Price</th>
								</tr>
							</thead>
							<tbody>
							   {
		                         Object.keys(this.props.wishlist).map((key) => {
									 return (<tr key={key}>
										  <td>{this.getItemById(this.props.wishlist[key].id).id}</td>
										  <td><Link to={`product/${this.props.wishlist[key].id}`}>{this.getItemById(this.props.wishlist[key].id).title}</Link></td>
										  <td>{this.getItemById(this.props.wishlist[key].id).price}$</td>
									 </tr>)
								 })
							   }
					     	</tbody>
						</table>
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
       wishlist:state.WishlistReducer.data,
       products:state.ProductsReducer.data
 	}
 }

 export default connect(stateProps)(Wishlist)