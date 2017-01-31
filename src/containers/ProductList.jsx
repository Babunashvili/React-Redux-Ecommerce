import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { fetchProducts } from '../actions/fetchProducts'
/**
 * Create ProductList Container
 */
 class ProductList extends Component{
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchProducts())
    }
 	render(){
 		return (
 			   <section className="section">
				    <div className="container">
				      <div className="heading">
				        <h1 className="title">Latest Products</h1> 
				          <div className="columns is-multiline">
                             {this.props.products.map((product) => {
                                return <ProductItem key={product.id} product={product} />
                             })}
                          </div>
				      </div>
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
       products:state.ProductsReducer
 	}
 }
 export default connect(stateProps)(ProductList)