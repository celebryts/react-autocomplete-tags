import React, { Component } from 'react'
import Autocomplete from '../../src/index'

class Placeholder extends Component {
	render() {
		return (
			<div>
				<h1>Placeholder</h1>
				<p>Autocomplete with placeholder on input.</p>
				<Autocomplete placeholder="Insert multiple tags" />
			</div>
		)
	}
}

export default Placeholder