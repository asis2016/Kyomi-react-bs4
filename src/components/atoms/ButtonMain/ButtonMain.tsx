import React from 'react'
import { ButtonMainBase } from './ButtonMain.style'

/**
 * The main button.
 *
 * @params An interface from src/types/ButtonMainProps
 * @returns A JSX.Element
 */
const ButtonMain = ({ faIcon, href, title }: ButtonMainProps): JSX.Element => {
	return (
		<ButtonMainBase>
			<a className='btn btn-primary-kyomi btn-lg mt-3' href={href}>
				{faIcon && <i className={`pr-3 fas ` + faIcon}></i>}
				{title}
			</a>
		</ButtonMainBase>
	)
}

export default ButtonMain
