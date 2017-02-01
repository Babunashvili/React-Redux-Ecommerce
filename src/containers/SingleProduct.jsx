import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchProduct } from '../actions/fetchProduct'
/**
 * Create SingleProduct Container
 */
 class SingleProduct extends Component{
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchProduct(this.props.params.id))
    }
 	render(){
 		return (
			<div>
            <Helmet title="single product" />
						<section className="section">
								<div className="container">
                                   <div className="columns">
                                      <div className="column is-half">
                                          <img src={this.props.product.image} width="100%" />
                                      </div>

                                       <div className="column is-half">
                                           <h1 className="title">{this.props.product.title}</h1> 
                                           <h3><b>Price:{this.props.product.price}$</b></h3>
                                           <br />
                                           <p>{this.props.product.description}</p>
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
       product:state.ProductReducer.data
 	}
 }
 export default connect(stateProps)(SingleProduct)