import React, {useState } from 'react'
import Circle from './UI/Circle'
import classes from './Input.module.css'
const Input = ({ addToDo }) => {
	const [enteredValue, setEnteredValue] = useState('')
	const inputHandler = event => {
		setEnteredValue(event.target.value)
	}
	const formSubmitHandler = event => {
		event.preventDefault()
		if (!enteredValue) {
			return
		}
		addToDo(enteredValue)
		setEnteredValue('')
	}
	return (
		<form onSubmit={formSubmitHandler} className={classes.container}>
			<label htmlFor="input">
				<Circle />
			</label>
			<input
				className={classes.input}
				id="input"
				onChange={inputHandler}
				value={enteredValue}
				placeholder="Create a new todo..."
				autoComplete="off"
			/>
		</form>
	)
}
export default Input
