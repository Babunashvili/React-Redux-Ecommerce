import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAbout } from '../actions/fetchAbout'
/**
 * Create About Container
 */
 class About extends Component{
 	componentDidMount() {
	    const { dispatch } = this.props
	    dispatch(fetchAbout())
	}
 	render(){ 
 		return (
 			<section className="section">
 			<div className="container">
 			<div className="heading">
 			<h1 className="title">{this.props.about.title}</h1>
 			</div>
 			<p>{this.props.about.content}</p>
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
       about:state.AboutReducer
 	}
 }

 export default connect(stateProps)(About)