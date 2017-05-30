import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import styles from './theme.css'
import Suggestions from './Suggestions/Suggestions'
import Tag from './Tag/Tag'
import Key from './Keys/Keys'
import DOM from './DOM/DOM'
import debounce from 'lodash/debounce'
import isEqual from 'lodash/isEqual'

const validateTagsLimit = (tags, limit) => {
  if(!tags) return []
	if(tags.length > limit){
		throw new Error('Number of initial tags should be less than the tag limit')
	}
	return tags
}

const TAG_SHAPE = PropTypes.shape({
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
})

export default class Autocomplete extends Component {

	static propTypes = {
		className: PropTypes.string,
		suggestions: PropTypes.arrayOf(TAG_SHAPE),
		tags: PropTypes.oneOfType([
			PropTypes.arrayOf(TAG_SHAPE),
			PropTypes.arrayOf(PropTypes.string)
		]),
		limitTags: PropTypes.number,
		delay: PropTypes.number,
		allowCreateTag: PropTypes.bool,
		loader: PropTypes.bool,
		customLoader: PropTypes.node,
		loaderPosition: PropTypes.oneOf(['top', 'bottom']),
		children: PropTypes.node,
		onKeyUp: PropTypes.func,
		onKeyDown: PropTypes.func,
		onAdd: PropTypes.func,
		onDelete: PropTypes.func,
		onFocus: PropTypes.func,
		onBlur: PropTypes.func,
		onChange: PropTypes.func,
		enterKeys: PropTypes.arrayOf(PropTypes.string),
	}

	static defaultProps = {
		className: '',
		suggestions: [],
		tags: [],
		allowCreateTag: true,
		loader: false,
		customLoader: null,
		loaderPosition: 'bottom',
		enterKeys: [],
		children: <input />,
		onKeyUp: ()=>{},
		onKeyDown: ()=>{},
		onAdd: ()=>{},
		onDelete: ()=>{},
		onFocus: ()=>{},
		onBlur: ()=>{},
		onChange: ()=>{},
	}

	state = {
		tags: validateTagsLimit(this.props.tags, this.props.limitTags),
		/* Used to focus tag */
		active: false,
		activeTag: null,
		value: '',
		input: true,
		suggestions: this.props.suggestions,
		focusedSuggestion: null
	}

	constructor(props){
		super(props)
		this.input
		this.root
	}

	componentDidMount() {
		this._enableCloseOnExit()
	}

	componentWillUnmount(){
		/* Disable listener on document */
		this._disableCloseOnExit()	
	}

	componentWillReceiveProps(nextProps){
		const suggestionsAreEqual = isEqual(nextProps.suggestions, this.props.suggestions)
		const newState = {}
		if(this.state.active && !suggestionsAreEqual){
			newState.suggestions = nextProps.suggestions
		}
		if(this.props.tags !== nextProps.tags) {
			newState.tags = validateTagsLimit(nextProps.tags, nextProps.limitTags)
		}
		if(newState) this.setState(newState)
	}

	render() {
		const { className, children, onKeyUp, customLoader, loaderPosition, loader } = this.props
		const { tags, value, suggestions, focusedSuggestion, input } = this.state
		return (
			<div>
				{loader && loaderPosition === 'top' && customLoader}
					<div
						className={`${className} ${styles.root}`}
						onClick={this._onClick}
						ref={node => this.root = node}
					>
						<div className={styles.content}>
							{tags.map((tag, idx) => {          
								const valueToRender = (typeof tag === 'string') ? tag : tag.label
								return <Tag value={valueToRender} key={idx} onDelete={this._onClickDelete.bind(this, idx)} />
							})}
							<div className={`${input ? styles.inputContainer : styles.inputHidden}`}>
								<input
									type="text"
									ref={node => this.input = node}
									onKeyUp={onKeyUp}
									onKeyDown={this._onKeyDown}
									onChange={this._onChange}
									onFocus={this._onFocus}
									onBlur={this._onBlur}
									value={value}
								/>
							</div>
							<Suggestions suggestions={suggestions} onClick={this.onClickSuggestion} focused={focusedSuggestion} />
						</div>
						{loader && loaderPosition === 'bottom' && customLoader}
					</div>
			</div>
		)
	}

	/* It controls the input value */
	_onChange = ev => {
		const hasKeys = this.props.enterKeys.some(enterKey => Key().getCharacter(enterKey) === ev.target.value)
		if(hasKeys) return
		this.setState({ value: ev.target.value })

		const { delay, onChange, enterKeys } = this.props
		const { value } = ev.target
		
		;(delay) ? this.onChangeDebounced(value) : onChange(value)
	}

	/* Handle click on container */
	_onClick = () => {
		findDOMNode(this.input).focus()
	}

	_onKeyDown = ev => {
		const key = Key(ev)
		const { value } = ev.target
		const { focusedSuggestion, suggestions } = this.state
		const hasAnotherEnterKey = key.isAny(this.props.enterKeys)

		this.props.onKeyDown(ev.target.value)
		
		/* Create navigation on suggestions when key down */
		if(key.is('down')){
			let newFocus = (!this.hasfocusedsuggestion()) ? 0 : focusedSuggestion + 1
			this.setState({
				focusedSuggestion: (newFocus > suggestions.length-1) ? 0 : newFocus
			})
		}

		/* Create navigation on suggestions when key up */
		if(key.is('up')){
			let newFocus = focusedSuggestion - 1
			this.setState({
				focusedSuggestion: (focusedSuggestion < 1) ? suggestions.length-1 : newFocus
			})
		}

		if(key.is('enter') || hasAnotherEnterKey){
			this._handleEnter(ev, value)
			hasAnotherEnterKey && this.setState({ value: ''})
		}
		
		//Verify why is 8
		if(key.is('delete') || key.get() === 8){
			this._handleBackspace(ev)
		}
	}

	_onFocus = () => {
		this.setState({ active: true })
		this.props.onFocus()
	}
	
	_onBlur = () => {
		this.setState({ active: false })
		this.props.onBlur()
	}

	/**
	 * Delete tag from state
	 * @param {Number} idx Tag index to be manipulated
	 */
	_onClickDelete = idx => {
		const newState = Object.assign({}, this.state)
			, { tags } = newState
			, deletedTag = tags.splice(idx,1)

		this.setState({ tags })
		this.handleInputVisibility(tags.length-1)
		this.props.onDelete(deletedTag, tags)
	}

	/**
	 * @param {Number} idx Suggestion index to be manipulated
	 */
	onClickSuggestion = idx => {
		const {label, value} = this.state.suggestions[idx]
		this._addTag(label, value)
	}

	/* On enter we add a tag in state.tags */
	_handleEnter = (ev, value) =>{
		const { suggestions, focusedSuggestion } = this.state
		const { allowCreateTag } = this.props
		const hasfocusedsuggestion = this.hasfocusedsuggestion()

		if(allowCreateTag){
			let tagToAdd = (!hasfocusedsuggestion) ? value : suggestions[focusedSuggestion].label
			this._addTag(tagToAdd, value)
		}else{
			if(hasfocusedsuggestion){
				const { label: labelToAdd, value: valueToAdd } = suggestions[focusedSuggestion]
				this._addTag(labelToAdd, valueToAdd)
			}
		}
	}
	
	/* On backspace we remove a tag if the input is empty */
	_handleBackspace = ev =>{
		const { state } = this
		if(state.value === '' && state.tags.length){
			let newState = Object.assign({}, state)
			this._onClickDelete(newState.tags.length-1)
			this.setState({ tags: newState.tags })
		}
	}

	/**
	 * Calling this method we add a new tag in state and turn the input empty
	 * @param {String} value Text to be added in a new tag
	 */
	_addTag = (label, value) => {
		const { limitTags, allowCreateTag } = this.props
			, { tags } = this.state
			, tagsLength = tags.length
		label = label.trim()

		/* Verify if allowCreateTag, and allow or not */
		if(label == '' || (!allowCreateTag && !this._valueMatchSuggestions(label))) return

		this.setState({
			value: '',
			tags: (!limitTags || tags.length < limitTags) ? [...tags, label ] : tags
		})
		this.handleInputVisibility(tagsLength+1)
		this._clearSuggestions()
		this.props.onAdd({label, value})
	}

	_clearSuggestions = () => {
		this.setState({
			suggestions: [],
			focusedSuggestion: null,
		})
	}

	_valueMatchSuggestions = value => this.state.suggestions.some(item => item.label === value )

	_enableCloseOnExit = ()=>{
		window.document.addEventListener('click', this.closeOnClickIfIsDescendant, false)
	}

	_disableCloseOnExit = ()=>{
		window.document.removeEventListener('click', this.closeOnClickIfIsDescendant)
	}

	/* Verify if the clicked target is inside the element, and close if necessary */
	closeOnClickIfIsDescendant = ev => {
		const isDescendant = DOM.isDescendant(ev.target, findDOMNode(this.root))
		if(!isDescendant){
			this._clearSuggestions()
		}
	}

	/**
	 * Handle input visibility based on limitTags
	 * @param {Number} tagsLength You can pass the quantity of tags, because sometimes the current state is different from what we want
	 */
	handleInputVisibility = tagsLength => {
		const { limitTags } = this.props
		if(!tagsLength) tagsLength = this.state.tags.length

		this.setState({input: limitTags ? tagsLength < limitTags : true })
	}

	hasfocusedsuggestion = () => Number.isInteger(this.state.focusedSuggestion)
	
	onChangeDebounced = debounce(value => this.props.onChange(value), this.props.delay)

}