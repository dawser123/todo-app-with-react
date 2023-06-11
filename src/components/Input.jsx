import React from 'react'
import Circle from './UI/Circle'
import classes from './Input.module.css'

const Input = () => {
	return (
		<div className={classes.container}>
			<label htmlFor="input">
				<Circle />
			</label>
			<input id="input" placeholder="Create a new todo..." type="text" />
		</div>
	)
}

export default Input
