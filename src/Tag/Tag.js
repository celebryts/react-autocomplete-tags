import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './theme.css'

export default class Tag extends PureComponent {

	static propTypes = {
		value: PropTypes.string.isRequired,
		onDelete: PropTypes.func,
	}

	static defaultProps = {
		onDelete: ()=>{}
	}

	render() {
		const { value, onDelete } = this.props
		return (
			<div className={styles.tag}>
				<div className={styles.text}>
					{value}
				</div>
				<span className={styles.delete} onClick={onDelete}>
					<svg viewBox="0 0 40 40" className={styles.deleteIcon}>
						<path className={styles.deleteX} d="M 12,12 L 28,28 M 28,12 L 12,28" />
					</svg>
				</span>
			</div>
		)
	}
}