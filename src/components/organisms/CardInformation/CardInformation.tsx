import React, { useState } from 'react'
import { useToggle } from '../../../hooks'
import { ButtonMain } from '../../atoms'

/**
 * A card information component.
 *
 * @param param0
 * @returns
 */
const CardInformation = ({
	children,
	location,
	title,
	status,
	description,
}: CardInformationProps): JSX.Element => {
	const [isToggle, setIsToggle] = useToggle()

	return (
		<div className='card mb-4'>
			<div className='card-header'>
				<span>{status}</span>
				<span className='text-right'>
					<span onClick={setIsToggle}>{isToggle ? '-' : '+'}</span>
				</span>
			</div>
			{isToggle && (
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<h6>{location}</h6>
					<p className='card-text'>{description}</p>
					<div className='content'>{children}</div>
					<ButtonMain title='Apply now' href='#' />
				</div>
			)}
		</div>
	)
}

export default CardInformation
