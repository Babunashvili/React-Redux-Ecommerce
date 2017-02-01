import React, { Component } from 'react'
import { connect } from 'react-redux'
/**
 * Create Loading Component
 */
 class Loading extends Component{
  render(){
    let isLoading = (this.props.loading) ? 'is-loading' : 'is-loaded'
    return (
          <div className={`loading-wrapper ${isLoading}`}>
             <div className="loading">
               <span>Loading ...</span>
            </div>
          </div>
    )
  }
 }
 export default Loading