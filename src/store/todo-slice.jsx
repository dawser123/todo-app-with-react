import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todos: [],
	taskLeft: 0,
	activeButton: 'All',
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const { id, task, completed } = action.payload
			state.todos.push({ id, task, completed })
			state.taskLeft++
		},
		toggleComplete: (state, action) => {
			const id = action.payload
			const todo = state.todos.find(todo => todo.id === id)
			if (todo) {
				todo.completed = !todo.completed
			}
		},
		deleteTodo: (state, action) => {
			const id = action.payload
			state.todos = state.todos.filter(todo => todo.id !== id)
			state.taskLeft--
		},
		setActiveButton: (state, action) => {
			state.activeButton = action.payload
		},
		clearCompleted: state => {
			state.todos = state.todos.filter(todo => !todo.completed)
			state.taskLeft = state.todos.filter(todo => !todo.completed).length
		},
	},
})

export const todoActions = todosSlice.actions

export default todosSlice.reducer
