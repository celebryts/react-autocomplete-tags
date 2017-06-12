import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class Blur extends Component {
	render() {
		return (
			<div>
				<h1>onBlur</h1>
				<p>Autocomplete with onBlur prop.</p>
				<Autocomplete onBlur={action('Event onBlur')} />
			</div>
		)
	}
}

export default Blur