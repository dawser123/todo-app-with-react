import React, { useState } from 'react'
import classes from './Button.module.css'
const Button = ({ onButtonClick, className}) => {
	const [activeButton, setActiveButton] = useState('All')
	const buttonNames = ['All', 'Active', 'Completed']
	const handleButtonClick = buttonName => {
		setActiveButton(buttonName)
		onButtonClick(buttonName)
	}
	return (
		<div className={className}>
			{buttonNames.map(buttonName => (
				<button
					onClick={() => handleButtonClick(buttonName)}
					key={buttonName}
					className={`${className} ${activeButton === buttonName ? classes.active : ''}`}>
					{buttonName}
				</button>
			))}
		</div>
	)
}
export default Button
