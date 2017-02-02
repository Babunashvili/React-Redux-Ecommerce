import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchCart } from '../actions/fetchCart'
import { fetchWishlist } from '../actions/fetchWishlist'
/**
 * Create NavBar Container
 */
 class NavBar extends Component{
 	constructor(props){
 		super(props)
 		this.state ={
 			showBar: false
 		}
 	}
	 componentWillMount(){
		 const { dispatch } = this.props
         dispatch(fetchCart())
         dispatch(fetchWishlist())
	 }
	 componentDidUpdate(){
	 
	 }
 	toggleNavBar(){
 		if(this.state.showBar){
 			this.setState({
 				showBar:false
 			})
 		}else{
 			this.setState({
 				showBar:true
 			})
 		}
 	}
 	render(){
 		return (
 			<nav className="nav has-shadow">
				<div className="container">
					<div className="nav-left">
						<Link to="/" className="nav-item">
							<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
						</Link>
					</div>
					<span className="nav-toggle" onClick={this.toggleNavBar.bind(this)}>
						<span></span>
						<span></span>
						<span></span>
					</span>

					<div className={`nav-right nav-menu ${ (this.state.showBar) ? 'is-active' : '' }`}>
						<Link to="/" className="nav-item">
						Home
						</Link>
						<Link to="/about" className="nav-item">
						About us
						</Link> 
						<div className="nav-item">
						<Link to="cart" className="button is-success is-outlined" >
							<span className="icon">
							   <i className="fa fa-shopping-cart" aria-hidden="true"></i>
							</span>
							<span className="tag is-light">{Object.keys(this.props.cart).length}</span>
						</Link>
						<Link to="wishlist" className="button is-danger is-outlined">
							<span className="icon">
								<i className="fa fa-heart" aria-hidden="true"></i>
							</span>
							<span className="tag is-light">{Object.keys(this.props.wishlist).length}</span>
						</Link>
						</div>

						<span className="nav-item">
							<a className="button" >
								<span>Login</span>
							</a>
							<a className="button is-info">
								<span>Register</span>
							</a>
						</span>
					</div>
				</div>
 			</nav>
 		)
 	}
 }
/**
 * Insert Props Into Component
 */
 const stateProps = (state) => {
 	return { 
       cart:state.CartReducer.data,
       wishlist:state.WishlistReducer.data
 	}
 }

 export default connect(stateProps)(NavBar)