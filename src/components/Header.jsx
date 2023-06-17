import React, { useState } from 'react'
import ToDo from './ToDo'
import Input from './Input'
import Button from './UI/Button'
import classes from './Header.module.css'
import Moon from '../assets/Icons/Moon.svg'
import Sun from '../assets/Icons/Sun.svg'
const Header = ({ theme, toggleTheme }) => {
	const [toDos, setToDos] = useState([])
	const [taskLeft, setTaskLeft] = useState(0)
	const [activeButton, setActiveButton] = useState('All')
	const addToDo = todo => {
		setToDos([...toDos, { id: Math.random().toString(), task: todo, completed: false }])
		setTaskLeft(prevCount => prevCount + 1)
	}
	const toggleComplete = id => {
		setToDos(toDos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
	}
	const deleteToDo = id => {
		setToDos(toDos.filter(todo => todo.id !== id))
		setTaskLeft(prevCount => prevCount - 1)
	}
	const handleButtonClick = buttonName => {
		setActiveButton(buttonName)
	}
	const filteredToDos = toDos.filter(todo => {
		if (activeButton === 'All') {
			return true
		} else if (activeButton === 'Active') {
			return !todo.completed
		} else if (activeButton === 'Completed') {
			return todo.completed
		}
	})
	const clearCompleted = () => {
		setToDos(toDos.filter(todo => !todo.completed))
		setTaskLeft(toDos.filter(todo => !todo.completed).length)
	}
	return (
		<header className={theme === 'dark' ? classes.dark : ''}>
			<div className={classes.container}>
				<h1>
					TODO
					<button onClick={toggleTheme}>
						<img className={classes.icon} src={theme === 'light' ? Moon : Sun} alt="Theme" />
					</button>
				</h1>
				<Input addToDo={addToDo} />
				<ul>
					{filteredToDos.map(item => (
						<ToDo key={item.id} task={item} deleteToDo={() => deleteToDo(item.id)} toggleComplete={toggleComplete} />
					))}
				</ul>
				<div className={classes['todo-list-container']}>
					<p>{taskLeft} item left</p>
					<div className={classes['todo-status-box']}>
						<Button
							className={classes['todo-status-box-btn']}
							activeButton={activeButton}
							onButtonClick={handleButtonClick}
						/>
					</div>
					<button className={classes['clear-button']} type="button" onClick={clearCompleted}>
						Clear completed
					</button>
				</div>
				<div className={classes['todo-status-box']}>
					<Button
						className={classes['todo-status-box-btn']}
						activeButton={activeButton}
						onButtonClick={handleButtonClick}
					/>
				</div>
			</div>
		</header>
	)
}
export default Header
