import React, { Component } from 'react'
import Autocomplete from './../../src/index'

class Basic extends Component {
	render() {
		return (
			<div>
				<h1>Basic</h1>
				<p>Autocomplete without props. Just render the default.</p>
				<Autocomplete />
			</div>
		)
	}
}

export default Basic