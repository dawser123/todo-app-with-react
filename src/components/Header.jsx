import React from 'react'

import classes from './Header.module.css'
import Moon from '../assets/Icons/Moon.svg'
const Header = () => {
	return (
		<header>
			<div className={classes.container}>
				<h1>
					TODO
					<img className={classes.icon} src={Moon} />
				</h1>
				<div className={classes['input-container']}>
					<label htmlFor="input"></label>
					<input id="input" type="text" placeholder="Create a new todo..." />
				</div>
			</div>
		</header>
	)
}

export default Header
