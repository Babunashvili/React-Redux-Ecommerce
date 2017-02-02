import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchProducts } from '../actions/fetchProducts'
import { fetchCart } from '../actions/fetchCart'
import { Link } from 'react-router'
/**
 * Create Cart Container
 */
 class Cart extends Component{
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
        dispatch(fetchCart())
	}
 	render(){
 		return (
			<div>
			    <Helmet  title="My Cart" />
				<section className="section">
					<div className="container">
						<div className="heading">
							<h1 className="title">My Cart</h1>
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
		                         Object.keys(this.props.cart).map((key) => {
									 return (<tr key={key}>
										  <td>{this.getItemById(this.props.cart[key].id).id}</td>
										  <td><Link to={`product/${this.props.cart[key].id}`}>{this.getItemById(this.props.cart[key].id).title}</Link></td>
										  <td>{this.getItemById(this.props.cart[key].id).price}$</td>
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
       cart:state.CartReducer.data,
       products:state.ProductsReducer.data
 	}
 }

 export default connect(stateProps)(Cart)