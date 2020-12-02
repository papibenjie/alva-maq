import * as React from 'react';
import { CssBorderStyle, CssColor, CssLength } from '../types';
import { EBorderStyle } from "../enums";

/**
 * @name Checkbox
 */

export interface BorderProps {
	borderColor?: CssColor,
	borderWidth?: CssLength,
	borderStyle?: CssBorderStyle,
	borderRadius?: CssLength,
	margin?: CssLength,
	padding?: CssLength,
	children?: React.ReactNode
}

/**
 * @description Simple border
 * @author MAQ
 */
export default class Border extends React.Component<BorderProps> {

	static defaultProps : BorderProps = {
		borderColor: "black",
		borderWidth: "1px",
		borderStyle: EBorderStyle.Solid,
		borderRadius: "0",
		margin: "0",
		padding: "1em",
		children: "Border"
	}
	
	/**
	 * @description Renders border
	 * @author MAQ
	 * @returns React.ReactNode
	 */
	render() {

		const {
			children,
			...props
		} = this.props

		let styles = {
			...props
		}

		return (
			<div style={styles}>
				{children}
			</div>
		)
	}
}

  