import React from 'react'

/**
 * A font awesome social icon.
 *
 * @params An interface from src/types/IconSocialProps.ts
 * @returns A JSX.Element
 */
const IconSocial = ({ faIcon, href, title }: IconSocialProps): JSX.Element => {
	return (
		<a href={href} className='nav-link' title={title}>
			<i className={`fab fa-` + faIcon}></i>
		</a>
	)
}

export default IconSocial
