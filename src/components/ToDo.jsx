import React, { useState } from 'react'
import classes from './ToDo.module.css'
import Cross from '../assets/Icons/Cross.svg'
import Circle from './UI/Circle'
import Check from '../assets/Icons/Check.svg'

const ToDo = () => {
	const [check, isCheck] = useState(false)
	const [activeButton, setActiveButton] = useState('')

	const clickCheckActive = () => {
		isCheck(prevState => !prevState)
	}

	const handleButtonClick = buttonName => {
		setActiveButton(buttonName)
	}

	return (
		<>
			<ul>
				<li>
					<Circle onClick={clickCheckActive} className={check ? classes['todo-check-active'] : ''}>
						<img className={classes['check-img']} src={Check} alt="Check" />
					</Circle>
					asd
					<button type="button" className={classes['cross-button']}>
						<img src={Cross} alt="Cross" />
					</button>
				</li>
				<div className={classes['todo-list-container']}>
					<p>1 tem left</p>
					<div className={classes['todo-status-box']}>
						<button
							className={`${classes['todo-status-box-btn']} ${activeButton === 'all' ? classes.active : ''}`}
							onClick={() => handleButtonClick('all')}>
							All
						</button>
						<button
							className={`${classes['todo-status-box-btn']} ${activeButton === 'active' ? classes.active : ''}`}
							onClick={() => handleButtonClick('active')}>
							Active
						</button>
						<button
							className={`${classes['todo-status-box-btn']} ${activeButton === 'completed' ? classes.active : ''}`}
							onClick={() => handleButtonClick('completed')}>
							Completed
						</button>
					</div>
					<button className={classes['clear-button']} type="button">
						Clear completed
					</button>
				</div>
				<div className={classes['todo-status-box']}>
					<button
						className={`${classes['todo-status-box-btn']} ${activeButton === 'all' ? classes.active : ''}`}
						onClick={() => handleButtonClick('all')}>
						All
					</button>
					<button
						className={`${classes['todo-status-box-btn']} ${activeButton === 'active' ? classes.active : ''}`}
						onClick={() => handleButtonClick('active')}>
						Active
					</button>
					<button
						className={`${classes['todo-status-box-btn']} ${activeButton === 'completed' ? classes.active : ''}`}
						onClick={() => handleButtonClick('completed')}>
						Completed
					</button>
				</div>
			</ul>
		</>
	)
}

export default ToDo
