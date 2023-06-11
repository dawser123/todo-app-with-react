import React, { useState } from 'react'
const Button = props => {
	const [activeButton, setActiveButton] = useState('All')
	const buttonNames = ['All', 'Active', 'Completed']
	const handleButtonClick = buttonName => {
		setActiveButton(buttonName)
	}
	return (
		<div className={props.className}>
			{buttonNames.map(buttonName => (
				<button
					onClick={() => handleButtonClick(buttonName)}
					key={buttonName}
					className={`${props.className} ${activeButton === buttonName ? props.activeClassName : ''}`}>
					{buttonName}
				</button>
			))}
		</div>
	)
}
export default Button
