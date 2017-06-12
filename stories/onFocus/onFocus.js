import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class Add extends Component {
	render() {
		return (
			<div>
				<h1>onFocus</h1>
				<p>Autocomplete with onFocus prop.</p>
				<Autocomplete onFocus={action('Event onFocus')} />
			</div>
		)
	}
}

export default Add