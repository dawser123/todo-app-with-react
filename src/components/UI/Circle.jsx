import React from 'react'
import classes from './Circle.module.css'
const Circle = props => {
	return (
		<div className={`${classes['todo-check']} ${props.className}`} onClick={props.onClick}>
			{props.children}
		</div>
	)
}
 export default Circle
