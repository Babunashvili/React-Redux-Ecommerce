import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { fetchProducts } from '../actions/fetchProducts'
import { addToCart } from '../actions/addToCart'
import Helmet from "react-helmet"
/**
 * Create ProductList Container
 */
 class ProductList extends Component{

	addToCart(id){
		const { dispatch } = this.props
		dispatch(addToCart(id))
	}
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchProducts())
    }
 	render(){
 		return (
			   <div>
            <Helmet title="Home" />
						<section className="section">
								<div className="container">
									<div className="heading">
										<h1 className="title">Latest Products</h1> 
											<div className="columns is-multiline">
												{this.props.products.map((product) => {
														return <ProductItem key={product.id} product={product} addToCart={ this.addToCart.bind(this) } />
												})}
											</div>
									</div>
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
       products:state.ProductsReducer.data
 	}
 }
 export default connect(stateProps)(ProductList)