import ToDo from './ToDo'
import classes from './Header.module.css'
import Moon from '../assets/Icons/Moon.svg'
import Sun from '../assets/Icons/Sun.svg'
import Input from './Input'
const Header = props => {
	return (
		<header className={props.theme === 'dark'? classes.dark : ''}>
			<div className={classes.container}>
				<h1>
					TODO
					<button onClick={props.toggleTheme}>
						<img className={classes.icon} src={props.theme === 'light' ? Moon : Sun} alt="Theme" />
					</button>
				</h1>
				<Input />
				<ToDo theme={props.theme} />
			</div>
		</header>
	)
}
export default Header
