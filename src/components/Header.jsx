import React from 'react'
import ToDo from './ToDo'
import classes from './Header.module.css'
import Moon from '../assets/Icons/Moon.svg'
import Input from './Input'
const Header = () => {
	return (
		<header>
			<div className={classes.container}>
				<h1>
					TODO
					<button>
						<img className={classes.icon} src={Moon} />
					</button>
				</h1>
				<Input />
				<ToDo />
			</div>
		</header>
	)
}
export default Header
