import classes from './Button.module.css'
import { useSelector } from 'react-redux'
const Button = ({ onButtonClick }) => {
	const activeButton = useSelector(state => state.todo.activeButton)

	const buttonNames = ['All', 'Active', 'Completed']
	const handleButtonClick = buttonName => {
		onButtonClick(buttonName)
	}
	return (
		<>
			{buttonNames.map(buttonName => (
				<button
					onClick={() => handleButtonClick(buttonName)}
					key={buttonName}
					className={`${classes['button-status']} ${activeButton === buttonName ? classes.active : ''}`}>
					{buttonName}
				</button>
			))}
		</>
	)
}
export default Button
