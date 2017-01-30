import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
/**
 * Create ProductList Container
 */
 class ProductList extends Component{
 	render(){
 		return (
 			   <section className="section">
				    <div className="container">
				      <div className="heading">
				        <h1 className="title">Latest Products</h1> 
				          <div className="columns is-multiline">
				          
                             <ProductItem />
                             <ProductItem />
                             <ProductItem />
                             <ProductItem />

                             <ProductItem />
                             <ProductItem />
                             <ProductItem />
                             <ProductItem />

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

 	}
 }

 export default connect(stateProps)(ProductList)