import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoActions } from '../store/todo-slice'
import ToDo from './ToDo'
import Input from './Input'
import Button from './UI/Button'
import classes from './Header.module.css'
import Moon from '../assets/Icons/Moon.svg'
import Sun from '../assets/Icons/Sun.svg'

const Header = ({ theme, toggleTheme }) => {
	const todos = useSelector(state => state.todo.todos)
	const taskLeft = useSelector(state => state.todo.taskLeft)
	const activeButton = useSelector(state => state.todo.activeButton)
	const dispatch = useDispatch()

	const addToDo = todo => {
		const newTodo = {
			id: Math.random().toString(),
			task: todo,
			completed: false,
		}
		dispatch(todoActions.addTodo(newTodo))
	}

	const toggleComplete = id => {
		dispatch(todoActions.toggleComplete(id))
	}

	const deleteToDo = id => {
		dispatch(todoActions.deleteTodo(id))
	}

	const handleButtonClick = buttonName => {
		dispatch(todoActions.setActiveButton(buttonName))
	}

	const clearCompleted = () => {
		dispatch(todoActions.clearCompleted())
	}

	const filteredToDos = todos.filter(todo => {
		if (activeButton === 'All') {
			return true
		} else if (activeButton === 'Active') {
			return !todo.completed
		} else if (activeButton === 'Completed') {
			return todo.completed
		}
	})

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
				{taskLeft ? (
					<>
						<div className={classes['todo-list-container']}>
							<p>{taskLeft} item left</p>
							<div className={classes['todo-status-box']}>
								<Button activeButton={activeButton} onButtonClick={handleButtonClick} />
							</div>
							<button className={classes['clear-button']} type="button" onClick={clearCompleted}>
								Clear completed
							</button>
						</div>
						<div className={classes['todo-status-box']}>
							<div className={classes['todo-status-box-btn']}>
								<Button activeButton={activeButton} onButtonClick={handleButtonClick} />
							</div>
						</div>
					</>
				) : (
					''
				)}
			</div>
		</header>
	)
}
export default Header
