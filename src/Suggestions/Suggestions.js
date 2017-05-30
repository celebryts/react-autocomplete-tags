import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './theme.css'

export default class Suggestions extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		suggestions: PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				value: PropTypes.string.isRequired,
			})
		),
		onClick: PropTypes.func,
		focused: PropTypes.number,
	}

	static defaultProps = {
		className: '',
		suggestions: [],
		onClick: ()=>{}
	}

	constructor(props){
		super(props)
	}

	render() {
		const { className, suggestions } = this.props

		//Loader?
		if(!suggestions || !suggestions.length) return null

		return (
			<div className={`${styles.dropdown} ${className}`}>
				<ul className={styles.suggestions}>
					{this._renderSuggestions(suggestions)}
				</ul>
			</div>
		)
	}

	_renderSuggestions = suggestions => {
		return (
			suggestions.map(({label}, idx) => {
				return (
					<li
						key={idx}
						onClick={this._onClick.bind(this, idx)}
						className={this.props.focused === idx ? styles.focused : null}
					>
						{label}
					</li>
				)
			})
		)
	}

	_onClick = idx => {
		this.setState({ suggestions: [] })
		this.props.onClick(idx)
	}

}