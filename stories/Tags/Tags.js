import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../../src/index'

const tags = [{
	value: 'T1',
	label: 'Tag 1'
},{
	value: 'T2',
	label: 'Tag 2'
}]


class Tags extends Component {
	render() {
		return (
			<div>
				<h1>tags</h1>
				<p>Autocomplete using tags prop with 2 objects.</p>
				<Autocomplete tags={tags} />
			</div>
		)
	}
}

export default Tags