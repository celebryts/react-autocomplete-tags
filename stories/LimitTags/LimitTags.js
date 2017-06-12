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

class LimitTags extends Component {
	render() {
		return (
			<div>
				<h1>limitTags</h1>
				<p>Autocomplete using limitTags props as 2.</p>
				<Autocomplete limitTags={2} />
			</div>
		)
	}
}

export default LimitTags