import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

const suggestions = [{
	value: 'S1',
	label: 'Suggestion 1'
},{
	value: 'S2',
	label: 'Suggestion 2'
}]

class Suggestions extends Component {
	render() {
		return (
			<div>
				<h1>suggestions</h1>
				<p>Autocomplete with suggestions prop.</p>
				<Autocomplete suggestions={suggestions} />
			</div>
		)
	}
}

export default Suggestions