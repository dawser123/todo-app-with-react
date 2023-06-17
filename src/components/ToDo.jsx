import React from 'react'
import classes from './ToDo.module.css'
import Circle from './UI/Circle'
import Cross from '../assets/Icons/Cross.svg'
import Check from '../assets/Icons/Check.svg'
const ToDo = ({ toggleComplete, task, deleteToDo }) => {
	return (
		<> 
			<li className={`${task.completed ? classes['todo-check-checked'] : ''}`}>
				<Circle
					onClick={() => toggleComplete(task.id)}
					className={`${task.completed ? classes['todo-check-active'] : ''}`}>
					<img
						className={`${classes['check-img']} ${task.completed ? classes['todo-check-active-img'] : ''}`}
						src={Check}
					/>
				</Circle>
				{task.task}
				<button onClick={deleteToDo} type="button" className={classes['cross-button']}>
					<img src={Cross} alt="Cross" />
				</button>
			</li>
		</>
	)
}
export default ToDo
