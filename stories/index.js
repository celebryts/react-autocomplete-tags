import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../src/index'

const tags = [{
	value: 'T1',
	label: 'Tag 1'
},{
	value: 'T2',
	label: 'Tag 2'
}]

const suggestions = [{
	value: 'S1',
	label: 'Suggestion 1'
},{
	value: 'S2',
	label: 'Suggestion 2'
}]


storiesOf('Events', module)
	.add('Basic', () => <Autocomplete />)
	.add('Handling onChange', () => <Autocomplete onChange={action('Event onChange: Input changed')} />)
	.add('Handling onAdd', () => <Autocomplete onAdd={action('Event onAdd')} />)
	.add('Handling onDelete', () => <Autocomplete onDelete={action('Event onDelete')} />)
	.add('Handling onFocus', () => <Autocomplete onFocus={action('Event onFocus')} />)
	.add('Handling onBlur', () => <Autocomplete onBlur={action('Event onBlur')} />)
	.add('Handling onKeyUp', () => <Autocomplete onKeyUp={action('Event onKeyUp')} />)
	.add('Handling onKeyDown', () => <Autocomplete onKeyDown={action('Event onKeyDown')} />)

storiesOf('Options', module)
	.add('With suggestions', () => <Autocomplete suggestions={suggestions} />)
	.add('With initial tags', () => <Autocomplete tags={tags} />)
	.add('Limit in 2 tags', () => <Autocomplete limitTags={2} />)
	.add('Add tag on blur', () => <Autocomplete saveOnBlur={true} />)