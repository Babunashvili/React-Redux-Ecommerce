import React, { Component } from 'react'
import { connect } from 'react-redux'

/**
 * Create Default Container
 */
class defaultContainer extends Component{
	render(){
		return <div>Default Container</div>
	}
}
/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
    return { 
      //..
    }
}

export default connect(stateProps)(defaultContainer)