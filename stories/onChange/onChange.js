import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class Change extends Component {
	render() {
		return (
			<div>
				<h1>onChange</h1>
				<p>Autocomplete with onChange prop.</p>
				<Autocomplete onChange={action('Event onChange: Input changed')} />
			</div>
		)
	}
}

export default Change