import React from 'react'
import useLocalStorage from 'use-local-storage'
import Header from './components/Header'
import classes from './App.module.css'
function App() {
	const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches
	const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
 	const appClasses = `${classes.app} ${theme === 'dark' ? classes.dark : ''}`
 	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}
 	return (
		<div className={appClasses} data-theme={theme}>
			<Header theme={theme} toggleTheme={toggleTheme} />
		</div>
	)
}
 export default App
