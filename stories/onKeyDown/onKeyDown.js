import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class KeyDown extends Component {
	render() {
		return (
			<div>
				<h1>onKeyDown</h1>
				<p>Autocomplete with onKeyDown prop.</p>
				<Autocomplete onKeyDown={action('Event onKeyDown')} />
			</div>
		)
	}
}

export default KeyDown