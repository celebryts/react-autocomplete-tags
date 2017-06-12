import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

class Delete extends Component {
	render() {
		return (
			<div>
				<h1>onDelete</h1>
				<p>Autocomplete with onDelete prop.</p>
				<Autocomplete onDelete={action('Event onDelete')} />
			</div>
		)
	}
}

export default Delete