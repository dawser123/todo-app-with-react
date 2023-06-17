import React from 'react'
import classes from './Circle.module.css'
const Circle = ({className,onClick,children}) => {
	return (
		<div className={`${classes['todo-check']} ${className}`} onClick={onClick}>
			{children}
		</div>
	)
}
export default Circle
