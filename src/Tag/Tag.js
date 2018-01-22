import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import styles from './theme.css'
import Chip from './Chip'

export default class Tag extends PureComponent {

	static propTypes = {
		value: PropTypes.string.isRequired,
		onDelete: PropTypes.func,
	}

	static defaultProps = {
		onDelete: ()=>{}
	}

	render() {
		return (
			<Chip 
				backgroundColor={this.props.backgroundColor}
				handleRequestDelete={this.props.onDelete}
				onClick={this.props.handleClick}
				style={{margin: 4}}
				icon={this.props.icon}
				iconColor={this.props.iconColor}
				avatarSrc={this.props.avatarSrc}
				avatarTextColor={this.props.avatarTextColor}
				avatarTextBackgroundColor={this.props.avatarTextBackgroundColor}
				label={this.props.value}
			/>
			// <div className={styles.tag}>
			// 	<div className={styles.text}>
			// 		{value}
			// 	</div>
			// 	<span className={styles.delete} onClick={onDelete}>
			// 		<svg viewBox="0 0 40 40" className={styles.deleteIcon}>
			// 			<path className={styles.deleteX} d="M 12,12 L 28,28 M 28,12 L 12,28" />
			// 		</svg>
			// 	</span>
			// </div>
		)
	}
}