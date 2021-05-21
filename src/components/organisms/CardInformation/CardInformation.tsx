import React from 'react'
import { CardInformationBase } from './CardInformation.style'
import { useToggle } from '../../../hooks'
import { ButtonMain } from '../../atoms'
import { FaMinus, FaPlus, FaLocationArrow, FaRegClock } from 'react-icons/fa'

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
	const [isToggle, setIsToggle] = useToggle(false)

	return (
		<CardInformationBase className='card mb-4'>
			<div className='card-header'>
				<span>{title}</span>
				<span className='text-right'>
					<span onClick={setIsToggle}>
						{isToggle ? <FaMinus /> : <FaPlus />}
					</span>
				</span>
			</div>
			{isToggle && (
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p>
						<span>
							<FaLocationArrow /> {location}
						</span>
						<span className='pl-4'>
							<FaRegClock /> {status}
						</span>
					</p>
					<p className='card-text'>{description}</p>
					<div className='content'>{children}</div>
					<ButtonMain title='Apply now' href='#' />
				</div>
			)}
		</CardInformationBase>
	)
}

export default CardInformation
