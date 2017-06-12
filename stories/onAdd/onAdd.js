import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class Add extends Component {
	render() {
		return (
			<div>
				<h1>onAdd</h1>
				<p>Autocomplete with onAdd prop.</p>
				<Autocomplete onAdd={action('Event onAdd')} />
			</div>
		)
	}
}

export default Add