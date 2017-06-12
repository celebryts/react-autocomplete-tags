import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class SaveOnBlur extends Component {
	render() {
		return (
			<div>
				<h1>saveOnBlur</h1>
				<p>Autocomplete using saveOnBlur prop as true.</p>
				<Autocomplete saveOnBlur={true} />
			</div>
		)
	}
}

export default SaveOnBlur