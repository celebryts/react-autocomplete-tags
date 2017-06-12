import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class KeyUp extends Component {
	render() {
		return (
			<div>
				<h1>onKeyUp</h1>
				<p>Autocomplete with onKeyUp prop.</p>
				<Autocomplete onKeyUp={action('Event onKeyUp')} />
			</div>
		)
	}
}

export default KeyUp