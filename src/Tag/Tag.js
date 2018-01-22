import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import styles from './theme.css'
import Chip from './Chip'

export default class Tag extends PureComponent {

	static propTypes = {
		value: PropTypes.string.isRequired,
		onDelete: PropTypes.func,
		onClick: PropTypes.func,
		labelColor: PropTypes.string,
		backgroundColor: PropTypes.string,
	}

	static defaultProps = {
		onDelete: ()=>{},
		onClick: ()=>{}
	}

	render() {
		return (
			<Chip 
				backgroundColor={this.props.backgroundColor}
				onRequestDelete={this.props.onDelete}
				onClick={this.props.onClick}
				label={this.props.value}
				labelColor={this.props.labelColor}
			/>
		)
	}
}