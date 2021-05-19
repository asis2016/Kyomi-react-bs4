import React from 'react'
import { ButtonAuthorStyle } from './ButtonAuthor.style'

/**
 *  A link button for an author.
 *
 * @params Props from src/types/ButtonAuthorProps
 * @returns A JSX.Element
 */
const ButtonAuthor = ({ authorName, href }: ButtonAuthorProps): JSX.Element => {
	return (
		<ButtonAuthorStyle>
			<a href={href}>
				<i className='fas fa-pen-square'></i> {authorName}
			</a>
		</ButtonAuthorStyle>
	)
}

export default ButtonAuthor
